import { NextRequest, NextResponse } from "next/server";

const BOOKING_WEBAPP_URL = process.env.BOOKING_WEBAPP_URL;

/**
 * API per gestire prenotazioni via Apps Script.
 * Supporta:
 *  - action: "create_booking"
 *  - action: "get_availability"
 */
export async function POST(req: NextRequest) {
  if (!BOOKING_WEBAPP_URL) {
    console.error("[BOOKING] BOOKING_WEBAPP_URL non configurata");
    return NextResponse.json(
      {
        success: false,
        error:
          "BOOKING_WEBAPP_URL non configurata. Controlla .env.local o Vercel.",
      },
      { status: 500 }
    );
  }

  let payload: any;
  try {
    payload = await req.json();
  } catch (err) {
    console.error("[BOOKING] Body JSON non valido:", err);
    return NextResponse.json(
      { success: false, error: "Body JSON non valido" },
      { status: 400 }
    );
  }

  const action = payload?.action;

  if (action !== "create_booking" && action !== "get_availability") {
    return NextResponse.json(
      { success: false, error: "Azione non valida" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(BOOKING_WEBAPP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    let data: any;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    if (!res.ok) {
      console.error("[BOOKING] Errore Apps Script:", res.status, data);
      return NextResponse.json(
        { success: false, error: "Errore dal server prenotazioni", details: data },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error("[BOOKING] Errore di rete verso Apps Script:", err);
    return NextResponse.json(
      { success: false, error: "Errore di rete verso Apps Script" },
      { status: 500 }
    );
  }
}