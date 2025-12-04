// app/api/whatsapp-internal-chat/route.ts
import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const FALLBACK_REPLY =
  "Al momento il bot non è disponibile. Riprova tra qualche minuto.";

// 🔗 Link diretto alla pagina di prenotazione (solo tabella)
const BOOKING_LINK =
  "https://galaxbot-ai-site.vercel.app/booking/barbiere";

// --- utility semplici ---

function isThanks(text: string): boolean {
  const t = text.toLowerCase();
  return (
    t === "grazie" ||
    t.includes("grazie mille") ||
    t === "ok grazie" ||
    t === "ok" ||
    t.includes("ti ringrazio")
  );
}

function hasBookingKeyword(text: string): boolean {
  const t = text.toLowerCase();
  return (
    t.includes("prenot") ||
    t.includes("appuntamento") ||
    t.includes("appuntamenti") ||
    t.includes("fissare") ||
    t.includes("taglio") ||
    t.includes("barba")
  );
}

// --- handler principale ---

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    body = null;
  }

  const input = body?.input?.toString().trim() ?? "";
  const sector = body?.sector?.toString().trim() ?? "barbiere";
  const from = body?.from?.toString().trim() ?? "";
  const waName = body?.waName?.toString().trim() ?? "";

  if (!input) {
    console.error("[INTERNAL-CHAT] Nessun input nel body:", body);
    return NextResponse.json(
      { reply: "Non ho ricevuto nessun messaggio da elaborare." },
      { status: 400 }
    );
  }

  const lower = input.toLowerCase();

  // 1) Gestione messaggi di ringraziamento
  if (isThanks(lower)) {
    const namePart = waName ? ` ${waName}` : "";
    return NextResponse.json(
      {
        reply:
          `Prego${namePart}! Se hai bisogno di altre informazioni o vuoi prenotare, scrivimi pure oppure usa il link prenotazioni: ${BOOKING_LINK}`,
      },
      { status: 200 }
    );
  }

  // 2) Se l'utente parla di prenotare / taglio / appuntamento → manda link
  if (hasBookingKeyword(lower)) {
    return NextResponse.json(
      {
        reply:
          `Perfetto, ti aiuto subito con la prenotazione.\n\n` +
          `👉 Per vedere gli orari disponibili e confermare l'appuntamento usa questo link:\n` +
          `${BOOKING_LINK}\n\n` +
          `Lì puoi scegliere giorno e orario liberi e inviare la prenotazione in pochi secondi. ✂️`,
      },
      { status: 200 }
    );
  }

  // 3) Per il resto: risposte "normali" con OpenAI (servizi, orari, info, ecc.)
  if (!OPENAI_API_KEY) {
    console.error("[INTERNAL-CHAT] OPENAI_API_KEY mancante");
    return NextResponse.json({ reply: FALLBACK_REPLY }, { status: 200 });
  }

  const systemPrompt =
    sector === "barbiere"
      ? `
Sei il bot WhatsApp di un barber shop.

REGOLE:
- Rispondi SEMPRE in italiano.
- Rispondi in modo breve, chiaro e amichevole.
- Puoi parlare di servizi (taglio, barba, colore), orari, prezzi indicativi, come funziona la prenotazione.
- NON dire mai che registri tu le prenotazioni.
- Se l'utente chiede come prenotare, spiega che c'è un link esterno e di solito il sistema tecnico manda il link diretto.
`.trim()
      : `
Sei un assistente per un'attività locale.
Rispondi sempre in italiano, in modo chiaro, utile e amichevole.
`.trim();

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: input },
        ],
        temperature: 0.4,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("[INTERNAL-CHAT] Errore OpenAI:", res.status, data);
      return NextResponse.json({ reply: FALLBACK_REPLY }, { status: 200 });
    }

    const reply =
      data?.choices?.[0]?.message?.content?.toString().trim() ||
      FALLBACK_REPLY;

    return NextResponse.json({ reply }, { status: 200 });
  } catch (err) {
    console.error("[INTERNAL-CHAT] Errore chiamando OpenAI:", err);
    return NextResponse.json({ reply: FALLBACK_REPLY }, { status: 200 });
  }
}