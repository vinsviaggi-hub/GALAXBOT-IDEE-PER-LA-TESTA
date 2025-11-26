// app/api/whatsapp-internal-chat/route.ts
import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const FALLBACK_REPLY =
  "Al momento il bot non è disponibile. Riprova tra qualche minuto.";

/**
 * Endpoint usato SOLO dalla chat interna del sito
 * (non da WhatsApp).
 *
 * Riceve:
 *  POST { input: string, sector?: string }
 * Risponde:
 *  { reply: string }
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
Sei il bot interno (da sito web) di un barber shop.

REGOLE IMPORTANTI:

1. Rispondi sempre e solo in ITALIANO.
2. Tono: chiaro, amichevole, professionale, come un barbiere che conosce bene il suo lavoro.
3. Puoi:
   - spiegare i servizi (taglio uomo, barba, taglio + barba, colore, trattamenti, ecc.),
   - dare informazioni su prezzi indicativi, durata dei servizi,
   - spiegare orari di apertura e modalità di contatto,
   - spiegare che il negozio usa un sistema di gestione/agenda digitale.
4. NON dire mai frasi del tipo:
   - "Ho registrato la tua prenotazione",
   - "Ho salvato la prenotazione nel gestionale",
   - "Ho inserito l'appuntamento a calendario",
   perché la registrazione vera è fatta dal sistema esterno (server + foglio Google).
5. Se l'utente chiede di prenotare:
   - raccogli in modo conversazionale i dati necessari (nome, servizio, giorno/data, orario preferito, numero di telefono),
   - ma parla sempre come assistente virtuale: puoi dire che "il sistema potrà usare questi dati per fissare l'appuntamento",
     non dire mai che TU hai già fissato l'appuntamento.
6. Se l'utente ringrazia (tipo "grazie", "grazie mille", ecc.),
   rispondi con una breve frase di chiusura gentile e NON provare a riaprire una nuova prenotazione,
   a meno che l'utente lo chieda esplicitamente.
7. Se non hai informazioni specifiche (ad es. prezzi precisi), rispondi in modo generico ma utile
   e suggerisci che il barbiere potrà confermare i dettagli.

Il tuo obiettivo è far capire bene come funziona il servizio e, se serve,
guidare l'utente sui dati che servono per una prenotazione, senza mentire su ciò che il bot può fare.
`.trim()
      : `
Sei un assistente interno per un'attività locale.
Rispondi sempre in italiano, in modo chiaro, utile e amichevole.
Non dire mai di aver inserito o modificato prenotazioni reali: puoi parlare solo in termini generali
(es. quali dati servono, come funziona il servizio, ecc.).
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