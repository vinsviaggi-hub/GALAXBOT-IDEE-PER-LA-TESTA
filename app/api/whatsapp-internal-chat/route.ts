import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * API interna usata SOLO dal webhook WhatsApp.
 * Riceve: { text: string, sector?: string }
 * Restituisce: { reply: string }
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => null)) as
      | { text?: string; sector?: string }
      | null;

    const text = body?.text?.trim() || "";
    const sector = body?.sector || "generico";

    if (!text) {
      return NextResponse.json(
        { reply: "Non ho ricevuto nessun messaggio da elaborare." },
        { status: 400 }
      );
    }

    const systemPrompt =
      sector === "barbiere"
        ? `Sei il bot di un barber shop.
Rispondi SEMPRE in italiano, in modo chiaro e amichevole.
Compito:
- Capisci se il messaggio parla di PRENOTAZIONI (giorno, orario, servizio)
- Se capisci già giorno e ora, conferma e chiedi solo il nome e un contatto (telefono / Instagram).
- Se i dettagli non sono chiari, fai 1-2 domande brevi per chiarire.
- Se la domanda è solo informativa (prezzi, servizi, orari), rispondi con info utili e poi proponi di prenotare.
NON parlare di API, JSON o cose tecniche.`
        : `Sei un assistente per un'azienda. Rispondi in italiano, in modo semplice e utile.`;

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: text,
        },
      ],
    });

    let reply =
      "Al momento non riesco a rispondere dal bot. Puoi riprovare tra poco.";

    try {
      const output = (response as any).output?.[0];
      const firstContent = output?.content?.[0];

      if (firstContent?.type === "output_text" && firstContent?.text) {
        reply = firstContent.text;
      } else if (firstContent?.text) {
        reply = firstContent.text;
      }
    } catch {
      // se qualcosa va storto nell'estrazione, usiamo il fallback
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[WA-INTERNAL-CHAT] Errore generale:", err);
    return NextResponse.json(
      {
        reply:
          "Al momento non riesco a rispondere dal bot. Puoi riprovare tra poco.",
      },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";