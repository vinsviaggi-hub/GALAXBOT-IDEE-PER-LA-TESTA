// app/api/whatsapp-internal-chat/route.ts
import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const FALLBACK_REPLY =
  "Al momento il bot non è disponibile. Riprova tra qualche minuto.";

/**
 * Questo endpoint viene chiamato dal webhook WhatsApp.
 * Deve restituire SEMPRE una risposta testuale già pronta da
 * mandare al cliente.
 */
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

  if (!OPENAI_API_KEY) {
    console.error("[INTERNAL-CHAT] OPENAI_API_KEY mancante");
    return NextResponse.json({ reply: FALLBACK_REPLY }, { status: 200 });
  }

  const systemPrompt =
    sector === "barbiere"
      ? `
Sei il bot WhatsApp di un barber shop.

REGOLE IMPORTANTI (SEGUILE SEMPRE):

1. Rispondi sempre e solo in ITALIANO.
2. Se l'utente chiede o accenna a una **prenotazione** (parole tipo: "prenotare", "appuntamento", "fissare un taglio", "taglio domani alle", ecc.),
   NON dire di chiamare il negozio, NON dire di passare di persona.
3. Invece spiega chiaramente che il sistema di prenotazione funziona con una riga nel formato:

   Prenotazione: NOME, SERVIZIO, AAAA-MM-GG, HH:MM, TELEFONO

4. Se il messaggio dell'utente contiene già tutti questi dati (nome, servizio, data futura, orario e telefono),
   rispondi così:
   - prima una frase breve di conferma tipo:
     "Perfetto, per registrare la prenotazione con il bot ti basta inviarmi questa riga:"
   - poi, su una NUOVA riga, SOLO:
     Prenotazione: NOME, SERVIZIO, AAAA-MM-GG, HH:MM, TELEFONO
   Il cliente dovrà copiare e incollare quella riga e inviarla.
5. Se mancano alcuni dati, spiega quali mancano e dì qualcosa tipo:
   "Per farmi registrare la prenotazione, mandami un messaggio fatto così:
    Prenotazione: Nome, Servizio, AAAA-MM-GG, HH:MM, Telefono"
   Usa SEMPRE questo formato esatto, con la parola iniziale "Prenotazione:".
6. NON inventare numeri di telefono, NON inventare date o orari specifici se l'utente non li ha detti.

Per tutte le altre domande (orari, servizi, prezzi, informazioni generali)
rispondi in modo chiaro, amichevole e sintetico, come un vero barbiere digitale.
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