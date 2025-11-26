// app/api/whatsapp-internal-chat/route.ts
import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const FALLBACK_REPLY =
  "Al momento il bot non è disponibile. Riprova tra qualche minuto.";

// parole di ringraziamento brevi: risposta fissa, senza parlare di nuove prenotazioni
const THANK_YOU_REGEX =
  /(grazie|grazie mille|ok grazie|ti ringrazio|thank you)/i;

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

  // 🔒 Caso speciale: messaggio breve di ringraziamento
  if (THANK_YOU_REGEX.test(input) && input.length <= 60) {
    const reply =
      "Non c'è di che! Se ti serve modificare qualcosa o hai altre domande, scrivimi pure. 😊";
    return NextResponse.json({ reply }, { status: 200 });
  }

  if (!OPENAI_API_KEY) {
    console.error("[INTERNAL-CHAT] OPENAI_API_KEY mancante");
    return NextResponse.json({ reply: FALLBACK_REPLY }, { status: 200 });
  }

  const systemPrompt =
    sector === "barbiere"
      ? `
Sei il bot WhatsApp di un barber shop.

REGOLE IMPORTANTI:

1. Rispondi sempre e solo in ITALIANO, tono amichevole ma professionale.
2. Aiuta il cliente a:
   - chiedere informazioni su servizi, orari, prezzi;
   - fare, modificare o cancellare prenotazioni.
3. Se il cliente sta facendo una prenotazione, guida tu con domande chiare:
   - nome
   - servizio (es. taglio, barba, taglio + barba)
   - data
   - orario
   - numero di telefono se non è già chiaro dal contesto.
4. Dopo aver confermato una prenotazione:
   - conferma in modo chiaro cosa hai registrato (servizio, data, ora);
   - NON proporre subito di prenotare altri appuntamenti;
   - chiudi in modo gentile, dicendo che può scrivere se gli serve modificare o avere altre info.
5. Non inventare mai prezzi reali, numeri di telefono o politiche del negozio.
6. Se non sei sicuro di qualcosa, rispondi in modo generico (es. "ti consiglio di chiedere in negozio per i dettagli esatti").

Per tutte le altre domande (informazioni generali, consigli, ecc.)
rispondi in modo chiaro, sintetico e utile, come un vero barbiere digitale.
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
      data?.choices?.[0]?.message?.content?.toString().trim() || FALLBACK_REPLY;

    return NextResponse.json({ reply }, { status: 200 });
  } catch (err) {
    console.error("[INTERNAL-CHAT] Errore chiamando OpenAI:", err);
    return NextResponse.json({ reply: FALLBACK_REPLY }, { status: 200 });
  }
}