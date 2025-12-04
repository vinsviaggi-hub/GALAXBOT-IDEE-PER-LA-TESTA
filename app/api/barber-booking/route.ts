// app/api/barber-booking/route.ts
import { NextRequest, NextResponse } from "next/server";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz0W7HTl3FYsaY0q7di83Ujx1boiqNM577DasWSmGm711tRoZ86hTYaczMeQuMNUKg/exec";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => null)) as any;

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Richiesta non valida." },
        { status: 400 }
      );
    }

    const action = String(body.action || "");

    if (action !== "get_availability" && action !== "create_booking") {
      return NextResponse.json(
        { success: false, error: "Azione non supportata." },
        { status: 400 }
      );
    }

    // preparo payload per Apps Script
    let payload: any = { action };

    if (action === "get_availability") {
      const date = String(body.date || "").trim();
      if (!date) {
        return NextResponse.json(
          { success: false, error: "Data mancante." },
          { status: 400 }
        );
      }
      payload.date = date;
    } else if (action === "create_booking") {
      const { name, phone, service, date, time, notes } = body;

      if (!name || !service || !date || !time) {
        return NextResponse.json(
          {
            success: false,
            error: "Servono almeno nome, servizio, data e ora.",
          },
          { status: 400 }
        );
      }

      payload = {
        action: "create_booking",
        name: String(name).trim(),
        phone: phone ? String(phone).trim() : "",
        service: String(service).trim(),
        date: String(date).trim(),
        time: String(time).trim(),
        notes: notes ? String(notes).trim() : "",
      };
    }

    const gsRes = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await gsRes.text();
    let data: any;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("[BARBER-BOOKING] Risposta NON JSON da Apps Script:", text);
      return NextResponse.json(
        {
          success: false,
          error: "Errore nel collegamento al foglio prenotazioni.",
        },
        { status: 502 }
      );
    }

    if (!data.success) {
      const statusCode = data.conflict ? 409 : 400;
      return NextResponse.json(
        {
          success: false,
          conflict: Boolean(data.conflict),
          error:
            data.error ||
            (data.conflict
              ? "Per questa data e ora c'è già una prenotazione."
              : "Errore nella prenotazione."),
        },
        { status: statusCode }
      );
    }

    // success = true
    if (action === "get_availability") {
      return NextResponse.json(
        {
          success: true,
          freeSlots: data.freeSlots || [],
        },
        { status: 200 }
      );
    }

    // create_booking
    return NextResponse.json(
      {
        success: true,
        message: data.message || "Prenotazione salvata correttamente.",
        rowCount: data.rowCount ?? null,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[BARBER-BOOKING] Errore API:", err);
    return NextResponse.json(
      { success: false, error: "Errore interno del server." },
      { status: 500 }
    );
  }
}