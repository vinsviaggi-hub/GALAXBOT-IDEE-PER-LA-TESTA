// app/api/whatsapp-internal-chat/route.ts
import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// 🔗 URL della pagina di prenotazione collegata al foglio Google
// Usa il dominio Vercel, NON localhost
const BOOKING_URL = "https://galaxbot-ai-site.vercel.app/whatsapp-booking";

// ================== UTILS ==================

function normalizeText(value: unknown): string {
  if (!value) return "";
  return String(value).trim().toLowerCase();
}

function isBookingIntent(text: string): boolean {
  const t = text.toLowerCase();
  return (
    t.includes("prenot") || // prenotare, prenotazione, prenoto...
    t.includes("appunt") || // appuntamento, appuntamenti
    t.includes("fissare") ||
    t.includes("prendere un taglio") ||
    t.includes("fare un taglio") ||
    t.includes("mi taglio") ||
    t.includes("vorrei un taglio") ||
    t.includes("barba") ||
    t.includes("taglio") ||
    t.includes("colore") ||
    t.includes("colore capelli")
  );
}

function buildBookingReply(): string {
  return [
    "Perfetto, ti aiuto subito con la prenotazione. ✂️",
    "",
    "👉 Per scegliere giorno, orario e servizio tra gli slot liberi usa questo link:",
    BOOKING_URL,
    "",
    "Lì puoi vedere solo gli orari disponibili e inviare la prenotazione in pochi secondi. ✅",
  ].join("\n");
}

function buildDefaultInfoReply(): string {
  return [
    "Ciao! Sono il bot del barber shop. 💈",
    "Posso darti informazioni su servizi, orari e prezzi,",
    "oppure aiutarti a fissare un appuntamento.",
    "",
    'Per prenotare ti mando un link dedicato quando mi scrivi che vuoi prenotare. 😉',
  ].join("\n");
}

// ================== HANDLER PRINCIPALE ==================

export async function POST(req: NextRequest) {
  let body: any = null;

  try {
    body = await req.json().catch(() => null);
  } catch {
    body = null;
  }

  // Il webhook ti manda: { input, sector, from, waName }
  const rawText: unknown =
    body?.input ??
    body?.text ??
    body?.message ??
    body?.lastUserMessage ??
    body?.body ??
    (Array.isArray(body?.history)
      ? body.history[body.history.length - 1]?.content
      : "");

  const text = normalizeText(rawText);
  const sector = String(body?.sector || "barbiere");

  if (!text) {
    const reply = buildDefaultInfoReply();
    return NextResponse.json(
      {
        success: true,
        reply,
        replyText: reply,
        message: reply,
      },
      { status: 200 }
    );
  }

  // 1️⃣ Se parla di prenotare → manda SOLO il link
  if (isBookingIntent(text)) {
    const reply = buildBookingReply();
    return NextResponse.json(
      {
        success: true,
        reply,
        replyText: reply,
        message: reply,
      },
      { status: 200 }
    );
  }

  // 2️⃣ Se è una domanda generica → usa OpenAI per rispondere bene
  if (!OPENAI_API_KEY) {
    console.error("[whatsapp-internal-chat] OPENAI_API_KEY mancante");
    const fallback = buildDefaultInfoReply();
    return NextResponse.json(
      {
        success: true,
        reply: fallback,
        replyText: fallback,
        message: fallback,
      },
      { status: 200 }
    );
  }

  const systemPrompt =
    sector === "barbiere"
      ? `
Sei l'assistente WhatsApp di un barber shop.

REGOLE IMPORTANTI:
- Rispondi SEMPRE in italiano.
- Tono breve, chiaro, amichevole.
- Puoi parlare di:
  - servizi (taglio uomo, barba, taglio+barba, colore),
  - orari di apertura,
  - prezzi indicativi,
  - come funziona la prenotazione in generale.
- NON chiedere mai al cliente di inviarti nome, data, ora e telefono in un formato particolare.
- NON inventare link di prenotazione.
- Se l'utente parla di prenotare o chiede di fissare un appuntamento,
  limita a spiegare come funziona in generale e lascia che il sistema mandi il link.
`.trim()
      : `
Sei l'assistente WhatsApp di un'attività locale.
Rispondi sempre in italiano, in modo chiaro, breve e amichevole.
Non creare link o moduli di prenotazione: se l'utente vuole prenotare,
spiega solo che riceverà un link specifico dal sistema.
`.trim();

  try {
    const openaiRes = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: String(rawText || "") },
          ],
          temperature: 0.4,
        }),
      }
    );

    const data = await openaiRes.json().catch(() => null);

    if (!openaiRes.ok || !data?.choices?.[0]?.message?.content) {
      console.error(
        "[whatsapp-internal-chat] Errore OpenAI:",
        openaiRes.status,
        data
      );
      const fallback = buildDefaultInfoReply();
      return NextResponse.json(
        {
          success: true,
          reply: fallback,
          replyText: fallback,
          message: fallback,
        },
        { status: 200 }
      );
    }

    const reply: string = String(
      data.choices[0].message.content
    ).trim();

    return NextResponse.json(
      {
        success: true,
        reply,
        replyText: reply,
        message: reply,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[whatsapp-internal-chat] Errore chiamando OpenAI:", err);
    const fallback =
      "C'è stato un problema tecnico nel rispondere ora. Riprova tra qualche minuto, per favore. 🙏";

    return NextResponse.json(
      {
        success: false,
        reply: fallback,
        replyText: fallback,
        message: fallback,
      },
      { status: 500 }
    );
  }
}