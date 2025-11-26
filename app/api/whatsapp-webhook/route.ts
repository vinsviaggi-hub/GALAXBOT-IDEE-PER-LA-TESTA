// app/api/whatsapp-webhook/route.ts
import { NextRequest, NextResponse } from "next/server";

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN;
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const WHATSAPP_API_VERSION = process.env.WHATSAPP_API_VERSION || "v21.0";
const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;

// Per sicurezza, logghiamo se mancano i dati importanti
if (!VERIFY_TOKEN) {
  console.warn("[WA] WHATSAPP_VERIFY_TOKEN mancante nelle env");
}
if (!WHATSAPP_TOKEN) {
  console.warn("[WA] WHATSAPP_TOKEN mancante nelle env");
}
if (!WHATSAPP_PHONE_NUMBER_ID) {
  console.warn("[WA] WHATSAPP_PHONE_NUMBER_ID mancante nelle env");
}

/**
 * GET = verifica del webhook da parte di Meta
 * (quando hai messo la URL in “Configurazione Webhook”)
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN && challenge) {
    // Meta si aspetta IL NUMERO "challenge" come testo semplice
    return new NextResponse(challenge, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  }

  return NextResponse.json(
    { ok: false, error: "Verification token mismatch" },
    { status: 403 }
  );
}

/**
 * POST = arriva un evento da WhatsApp (messaggi, ecc.)
 */
export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as any;

  console.log("[WA] Webhook payload:", JSON.stringify(body, null, 2));

  // Estraggo messaggio di testo e numero del mittente
  const msg = extractWhatsappMessage(body);
  if (!msg) {
    console.log("[WA] Nessun messaggio testuale da processare");
    return NextResponse.json({ success: true, skipped: true });
  }

  const { from, text } = msg;
  console.log(`[WA] Messaggio da ${from}: ${text}`);

  // Chiediamo al motore interno (stesso “cervello” del demo barbiere)
  const replyText = await askInternalChat({
    text,
    sector: "barbiere",
  });

  console.log(`[WA] Risposta dal bot: ${replyText}`);

  // Inviamo la risposta via WhatsApp Cloud API
  await sendWhatsappMessage(from, replyText);

  // Rispondiamo a Meta che è andato tutto bene
  return NextResponse.json({ success: true });
}

/**
 * Estrae il primo messaggio di testo dal payload di Meta
 */
function extractWhatsappMessage(body: any):
  | { from: string; text: string }
  | null {
  try {
    const entry = body?.entry?.[0];
    const change = entry?.changes?.[0];
    const value = change?.value;
    const messages = value?.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return null;
    }

    const msg = messages[0];
    if (msg.type !== "text") {
      // per ora gestiamo solo testo
      return null;
    }

    const from = msg.from as string | undefined;
    const text = msg.text?.body as string | undefined;

    if (!from || !text) return null;

    return { from, text };
  } catch (err) {
    console.error("[WA] Errore nell'estrazione del messaggio:", err);
    return null;
  }
}

/**
 * Chiede la risposta al tuo /api/chat interno.
 * Usa il settore "barbiere" così il bot risponde come nel demo barbiere.
 */
async function askInternalChat(input: {
  text: string;
  sector?: string;
}): Promise<string> {
  try {
    // Base URL dell'app (in dev usa localhost, in prod Vercel)
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000");

    const chatRes = await fetch(`${baseUrl}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Adatta questo payload se il tuo /api/chat usa un formato diverso
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: input.text,
          },
        ],
        sector: input.sector ?? "barbiere",
      }),
    });

    const data = (await chatRes.json().catch(() => null)) as
      | { reply?: string }
      | null;

    return (
      data?.reply ||
      "Al momento non riesco a rispondere dal bot. Puoi riprovare tra poco."
    );
  } catch (err) {
    console.error("[WA] Errore chiamando /api/chat:", err);
    return "C'è stato un problema tecnico nel bot. Riprova tra poco.";
  }
}

/**
 * Invia un messaggio di testo via WhatsApp Cloud API
 */
async function sendWhatsappMessage(to: string, body: string) {
  if (!WHATSAPP_TOKEN || !WHATSAPP_PHONE_NUMBER_ID) {
    console.error(
      "[WA] Impossibile inviare messaggio: mancano WHATSAPP_TOKEN o WHATSAPP_PHONE_NUMBER_ID"
    );
    return;
  }

  const url = `https://graph.facebook.com/${WHATSAPP_API_VERSION}/${WHATSAPP_PHONE_NUMBER_ID}/messages`;

  const payload = {
    messaging_product: "whatsapp",
    to,
    type: "text",
    text: {
      body,
    },
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${WHATSAPP_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      console.error("[WA] Errore nell'invio del messaggio:", res.status, data);
    } else {
      console.log("[WA] Messaggio WhatsApp inviato con successo:", data);
    }
  } catch (err) {
    console.error("[WA] Errore di rete inviando il messaggio:", err);
  }
}