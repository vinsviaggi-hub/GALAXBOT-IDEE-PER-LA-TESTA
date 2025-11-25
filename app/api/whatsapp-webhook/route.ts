// app/api/whatsapp-webhook/route.ts
import { NextRequest, NextResponse } from "next/server";

/**
 * Body di test per ora:
 * {
 *   "text": "ciao, vorrei prenotare",
 *   "sector": "barbiere"
 * }
 *
 * In futuro qui dentro leggeremo il payload vero di WhatsApp Cloud API
 * (entry → changes → messages...) e mapperemo su text/sector.
 */
type TestBody = {
  text?: string;
  sector?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => null)) as TestBody | null;

    if (!body || typeof body.text !== "string" || !body.text.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Nessun testo valido nel body (campo 'text' mancante).",
        },
        { status: 400 }
      );
    }

    const text = body.text.trim();
    const sector = typeof body.sector === "string" ? body.sector : "altro";

    // 🔁 Qui riutilizziamo il TUO cervello già pronto: /api/chat
    // Usiamo l'origin della richiesta per avere l'URL giusto
    const baseUrl = req.nextUrl.origin;

    const chatRes = await fetch(`${baseUrl}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [{ sender: "user", text }],
        sector,
      }),
    });

    if (!chatRes.ok) {
      const errorText = await chatRes.text().catch(() => "");
      console.error("Errore chiamata interna /api/chat:", chatRes.status, errorText);

      return NextResponse.json(
        {
          success: false,
          error: "Errore nel chatbot interno (/api/chat).",
        },
        { status: 500 }
      );
    }

    const data = (await chatRes.json().catch(() => null)) as
      | { reply?: string }
      | null;

    const reply =
      data?.reply ||
      "Al momento non riesco a rispondere dal bot. Puoi riprovare tra poco?";

    // 👉 OGGI: restituiamo JSON (utile per testare da Postman / curl)
    // DOMANI: qui faremo la chiamata a WhatsApp Cloud API per rispondere al cliente.
    return NextResponse.json(
      {
        success: true,
        input: text,
        sector,
        reply,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Errore API /api/whatsapp-webhook:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Errore interno del server WhatsApp webhook.",
      },
      { status: 500 }
    );
  }
}

// GET di comodo per vedere se l'endpoint è vivo
export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      ok: true,
      message: "Webhook WhatsApp GalaxBot AI attivo.",
    },
    { status: 200 }
  );
}