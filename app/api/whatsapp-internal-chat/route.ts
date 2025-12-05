// app/api/whatsapp-internal-chat/route.ts
import { NextRequest, NextResponse } from "next/server";

// 🔗 URL della pagina di prenotazione collegata al foglio Google
// (quella con la tabella piccola per WhatsApp)
const BOOKING_URL =
  "https://galaxbot-ai-site.vercel.app/whatsapp-booking";

/**
 * Normalizza il testo: stringa, trim, minuscolo.
 */
function normalizeText(value: unknown): string {
  if (!value) return "";
  return String(value).trim().toLowerCase();
}

/**
 * Messaggio che mandiamo quando l’utente vuole prenotare.
 */
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

/**
 * Messaggio generico per info / saluto.
 */
function buildDefaultReply(): string {
  return [
    "Ciao! Sono il bot del barber shop. 💈",
    "Posso darti informazioni su servizi, orari e prezzi,",
    "oppure aiutarti a fissare un appuntamento.",
    "",
    'Per prenotare scrivimi, ad esempio: "voglio prenotare" oppure "mi serve un appuntamento".',
  ].join("\n");
}

/**
 * API chiamata dal webhook WhatsApp.
 * Deve restituire un JSON con il testo da mandare al cliente.
 */
export async function POST(req: NextRequest) {
  try {
    const body: any = await req.json().catch(() => null);

    // Dal webhook noi passiamo: { input: text, sector, from, waName }
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

    let reply: string;

    if (!text) {
      // Nessun testo riconosciuto → messaggio di benvenuto
      reply = buildDefaultReply();
    } else {
      // Rilevo intenzione di prenotare
      const wantsBooking =
        text.includes("prenot") || // prenotare, prenotazione, prenoto…
        text.includes("appunt") || // appuntamento
        text.includes("taglio") ||
        text.includes("barba") ||
        text.includes("colore") ||
        text.includes("voglio venire") ||
        text.includes("voglio fissare") ||
        text.includes("vorrei venire");

      if (wantsBooking) {
        reply = buildBookingReply();
      } else {
        reply = buildDefaultReply();
      }
    }

    // Risposta nel formato che si aspetta il webhook
    return NextResponse.json(
      {
        success: true,
        reply,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[whatsapp-internal-chat] Errore:", err);
    const fallback =
      "C'è stato un problema tecnico nel rispondere ora. Riprova tra qualche minuto, per favore. 🙏";

    return NextResponse.json(
      {
        success: false,
        reply: fallback,
      },
      { status: 500 }
    );
  }
}