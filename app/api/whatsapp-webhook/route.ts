import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// === Helpers ===

async function askInternalChat(text: string, sector: string) {
  // URL dell’API chat interna (la stessa che usa il demo barbiere)
  const url =
    process.env.INTERNAL_CHAT_URL || "http://localhost:3000/api/chat";

  try {
    const chatRes = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        sector,
        source: "whatsapp",
      }),
    });

    if (!chatRes.ok) {
      console.error(
        "[WA] Errore chiamando la chat interna:",
        chatRes.status,
        await chatRes.text()
      );
      return "Al momento non riesco a rispondere dal bot. Puoi riprovare tra poco.";
    }

    const data = (await chatRes.json().catch(() => null)) as
      | { reply?: string }
      | null;

    return (
      data?.reply ||
      "Al momento non riesco a rispondere dal bot. Puoi riprovare tra poco."
    );
  } catch (err) {
    console.error("[WA] Errore di rete chiamando la chat interna:", err);
    return "Al momento non riesco a rispondere dal bot. Puoi riprovare tra poco.";
  }
}

async function sendWhatsAppMessage(to: string, body: string) {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const apiVersion = process.env.WHATSAPP_API_VERSION || "v21.0";

  if (!token || !phoneNumberId) {
    console.error(
      "[WA] Mancano WHATSAPP_TOKEN o WHATSAPP_PHONE_NUMBER_ID nelle env"
    );
    return { ok: false };
  }

  const url = `https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        text: {
          body,
        },
      }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      console.error("[WA] Errore nell'invio del messaggio:", res.status, data);
      return { ok: false, data };
    }

    console.log("[WA] Messaggio WhatsApp inviato con successo:", data);
    return { ok: true, data };
  } catch (err) {
    console.error("[WA] Errore di rete inviando il messaggio:", err);
    return { ok: false };
  }
}

// === GET: verifica webhook ===

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");

  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN;

  if (mode === "subscribe" && token === verifyToken) {
    console.log("[WA] Webhook verificato correttamente");
    return new Response(challenge ?? "", { status: 200 });
  }

  console.warn("[WA] Verification token mismatch", {
    mode,
    token,
    expected: verifyToken,
  });

  return new Response("Verification token mismatch", { status: 403 });
}

// === POST: riceve i messaggi ===

export async function POST(req: NextRequest) {
  const payload = (await req.json().catch(() => null)) as any;

  if (!payload) {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 }
    );
  }

  // ---- Modalità TEST (curl) ----
  if (typeof payload.text === "string" && payload.sector) {
    const text = (payload.text as string).trim();
    const sector = String(payload.sector || "barbiere");

    const reply = await askInternalChat(text, sector);

    // In test NON mando niente a WhatsApp, rispondo solo in JSON
    return NextResponse.json(
      {
        success: true,
        mode: "test",
        input: text,
        sector,
        reply,
      },
      { status: 200 }
    );
  }

  // ---- Payload reale di WhatsApp Cloud API ----
  const entry = Array.isArray(payload.entry) ? payload.entry[0] : undefined;
  const changes = entry?.changes && entry.changes[0];
  const value = changes?.value;
  const messages = Array.isArray(value?.messages) ? value.messages : [];
  const msg = messages[0];

  if (!msg) {
    // Nessun messaggio (magari solo status); rispondi 200 per evitare retry
    console.log("[WA] Nessun messaggio da processare", payload);
    return NextResponse.json({ success: true, ignored: true }, { status: 200 });
  }

  const from = msg.from as string | undefined; // numero dell’utente
  const textBody: string | undefined = msg.text?.body;

  if (!from || !textBody) {
    console.log("[WA] Messaggio senza from o text, ignorato");
    return NextResponse.json({ success: true, ignored: true }, { status: 200 });
  }

  const userText = textBody.trim();
  // Per ora fissiamo il settore a "barbiere" (come il demo)
  const sector = "barbiere";

  const reply = await askInternalChat(userText, sector);

  // Mando la risposta su WhatsApp
  await sendWhatsAppMessage(from, reply);

  // Rispondo a Meta con 200
  return NextResponse.json(
    {
      success: true,
      from,
      input: userText,
      sector,
      reply,
    },
    { status: 200 }
  );
}