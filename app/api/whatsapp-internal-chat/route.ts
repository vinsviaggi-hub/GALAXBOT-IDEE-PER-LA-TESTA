// app/api/whatsapp-internal-chat/route.ts
import { NextRequest, NextResponse } from "next/server";

// 🔗 URL della pagina di prenotazione collegata al foglio Google
const BOOKING_URL =
  "https://galaxbot-ai-site.vercel.app/prenotazione-whatsapp";

function normalizeText(value: unknown): string {
  if (!value) return "";
  return String(value).trim().toLowerCase();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json({
        reply:
          "C'è stato un problema nel messaggio ricevuto. Riprova tra qualche secondo.",
      });
    }

    // 👇 QUI USIAMO `input` (come lo manda il webhook)
    const rawText = (body as any).input ?? (body as any).text ?? "";
    const text = normalizeText(rawText);

    const wantsBooking =
      /prenot|appuntamento|taglio|barba|booking/.test(text);

    if (wantsBooking) {
      const reply = [
        "Perfetto ✂️ ti aiuto con la prenotazione.",
        "",
        "Per fissare il tuo appuntamento clicca qui:",
        BOOKING_URL,
        "",
        "Da quella pagina scegli giorno, orario e servizio tra gli slot liberi e confermi in pochi secondi. 😉",
      ].join("\n");

      return NextResponse.json({ reply });
    }

    const reply =
      "Ciao! Posso aiutarti con informazioni su servizi, orari e prezzi. 😊\n" +
      'Se vuoi prenotare scrivi qualcosa come "voglio prenotare" o "vorrei un appuntamento" e ti mando il link diretto. ✂️';

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[INTERNAL_CHAT] Errore:", err);
    return NextResponse.json({
      reply:
        "C'è stato un errore interno. Riprova tra qualche secondo, per favore.",
    });
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    message:
      "Endpoint whatsapp-internal-chat attivo. Usa POST con { input: '...' }",
  });
}