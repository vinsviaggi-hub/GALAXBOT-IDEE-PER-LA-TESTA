                         // app/api/whatsapp-webhook/route.ts
import { NextRequest, NextResponse } from "next/server";

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const WHATSAPP_PHONE_ID = process.env.WHATSAPP_PHONE_ID;

const FALLBACK_REPLY =
  "Al momento non riesco a rispondere dal bot. Puoi riprovare tra poco.";

// Costruisce una base URL valida sia in locale che su Vercel
function getBaseUrl(req: NextRequest): string {
  const host =
    req.headers.get("host") ||
    process.env.VERCEL_URL ||
    "localhost:3000";

  const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1");
  const protocol = isLocalhost ? "http" : "https";

  return `${protocol}://${host}`;
}

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch (err) {
    console.error("[WA] Body non JSON:", err);
    return NextResponse.json({ status: "invalid_body" }, { status: 200 });
  }

  const entry = body?.entry?.[0];
  const change = entry?.changes?.[0];
  const value = change?.value;

  const messages = value?.messages;
  if (!messages || !messages[0]) {
    console.log("[WA] Nessun messaggio nel payload:", JSON.stringify(body));
    return NextResponse.json({ status: "no_message" }, { status: 200 });
  }

  const message = messages[0];
  const from = message.from?.toString() ?? "";
  const text =
    message.text?.body?.toString().trim() ??
    message.interactive?.text?.body?.toString().trim() ??
    "";

  const waName =
    value?.contacts?.[0]?.profile?.name?.toString().trim() ?? "";

  if (!from || !text) {
    console.log("[WA] Messaggio senza from o text:", { from, text });
    return NextResponse.json({ status: "missing_data" }, { status: 200 });
  }

  const sector = "barbiere"; // per ora demo barbiere

  const baseUrl = getBaseUrl(req);
  let replyText = FALLBACK_REPLY;

  // 1) Chiamo la chat interna
  try {
    const internalRes = await fetch(
      `${baseUrl}/api/whatsapp-internal-chat`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: text,
          sector,
          from,
          waName,
        }),
      }
    );

    const data = await internalRes
      .json()
      .catch(() => ({ reply: FALLBACK_REPLY }));

    if (!internalRes.ok || !data?.reply) {
      console.error(
        "[WA] Errore chiamando internal-chat:",
        internalRes.status,
        data
      );
    } else {
      replyText = data.reply.toString().trim() || FALLBACK_REPLY;
    }
  } catch (err) {
    console.error("[WA] Errore fetch internal-chat:", err);
  }

  // 2) Invio il messaggio di risposta a WhatsApp
  if (!WHATSAPP_TOKEN || !WHATSAPP_PHONE_ID) {
    console.error(
      "[WA] WHATSAPP_TOKEN o WHATSAPP_PHONE_ID mancanti nell'env."
    );
    // comunque ritorno 200 per non far fallire il webhook verso Meta
    return NextResponse.json({ status: "missing_token" }, { status: 200 });
  }

  try {
    const waRes = await fetch(
      `https://graph.facebook.com/v19.0/${WHATSAPP_PHONE_ID}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${WHATSAPP_TOKEN}`,
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: from,
          text: { body: replyText },
        }),
      }
    );

    if (!waRes.ok) {
      const errData = await waRes.json().catch(() => ({}));
      console.error("[WA] Errore inviando risposta:", waRes.status, errData);
    }
  } catch (err) {
    console.error("[WA] Errore di rete verso WhatsApp API:", err);
  }

  return NextResponse.json({ status: "ok" }, { status: 200 });
}