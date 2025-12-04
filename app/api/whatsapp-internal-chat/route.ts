// app/api/whatsapp-internal-chat/route.ts
import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const FALLBACK_REPLY =
  "Al momento il bot non è disponibile. Riprova tra qualche minuto.";

// parole che indicano che l'utente vuole prenotare
function hasBookingKeyword(text: string): boolean {
  const t = text.toLowerCase();
  return (
    t.includes("prenot") ||
    t.includes("appuntamento") ||
    t.includes("appuntamenti") ||
    t.includes("fissare") ||
    t.includes("fissarmi") ||
    t.includes("taglio") ||
    t.includes("barba")
  );
}

// base URL (funziona sia in locale che su Vercel)
function getBaseUrl(req: NextRequest): string {
  const host =
    req.headers.get("host") ||
    process.env.VERCEL_URL ||
    "localhost:3000";

  const isLocalhost =
    host.includes("localhost") || host.includes("127.0.0.1");
  const protocol = isLocalhost ? "http" : "https";

  return `${protocol}://${host}`;
}

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    body = null;
  }

  const input = body?.input?.toString().trim() ?? "";
  const sector = body?.sector?.toString().trim() ?? "barbiere";

  if (!input) {
    console.error("[INTERNAL-CHAT] Nessun input nel body:", body);
    return NextResponse.json(
      { reply: "Non ho ricevuto nessun messaggio da elaborare." },
      { status: 400 }
    );
  }

  const lower = input.toLowerCase();
  const baseUrl = getBaseUrl(req);
  const bookingPageUrl = `${baseUrl}/demos/barbiere`;

  // 1) Se l'utente parla di prenotazione → manda SOLO il link al modulo
  if (hasBookingKeyword(lower)) {
    const reply = [
      "Perfetto, ti aiuto subito con la prenotazione. 😊",
      "",
      "Per fissare il tuo appuntamento usa questo link:",
      bookingPageUrl,
      "",
      "Lì puoi scegliere giorno, orario e servizio tra gli orari realmente disponibili e confermare in pochi secondi. ✂️",
    ].join("\n");

    return NextResponse.json({ reply }, { status: 200 });
  }

  // 2) Tutto il resto → risposte generiche con OpenAI
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
- Puoi parlare di servizi (taglio, barba, colore), orari, prezzi indicativi, come funziona la prenotazione in generale.
- NON dire mai che registri tu le prenotazioni: spiega solo che il cliente riceve un link per prenotare tramite il modulo online.
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