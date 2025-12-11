// app/fast-booking/page.tsx
"use client";

import React, { useState, FormEvent } from "react";

type Status = "idle" | "success" | "error";

// Slot orari disponibili per il centro estetico
const TIME_SLOTS: string[] = [
  "09:00", "09:30",
  "10:00", "10:30",
  "11:00", "11:30",
  "12:00", "12:30",
  "15:00", "15:30",
  "16:00", "16:30",
  "17:00", "17:30",
  "18:00", "18:30",
];

export default function FastBookingPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function resetMessages() {
    setStatus("idle");
    setMessage("");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    resetMessages();

    if (!name || !phone || !treatment || !date || !time) {
      setStatus("error");
      setMessage("Compila tutti i campi obbligatori contrassegnati con *.");
      return;
    }

    if (!TIME_SLOTS.includes(time)) {
      setStatus("error");
      setMessage("Seleziona un orario valido dalla lista.");
      return;
    }

    // Qui potresti inviare i dati a un'API o a Google Sheets.
    // Per ora simuliamo solo l'invio andato a buon fine.
    setStatus("success");
    setMessage(
      "Prenotazione inviata con successo! 💅"
    );

    setName("");
    setPhone("");
    setTreatment("");
    setDate("");
    setTime("");
    setNotes("");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#fce7f3",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "40px 16px",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 460,
          backgroundColor: "white",
          borderRadius: 16,
          padding: "20px 24px",
          boxShadow: "0 4px 30px rgba(255,192,203,0.4)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#9d174d",
            fontSize: "1.3rem",
            fontWeight: 700,
            marginBottom: 4,
          }}
        >
          Prenotazione veloce ✨
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            fontSize: "0.85rem",
            marginBottom: 14,
          }}
        >
          Compila il modulo per richiedere un appuntamento al centro estetico.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          <label style={labelStyle}>
            Nome *
            <input
              type="text"
              placeholder="Es. Aurora"
              value={name}
              onChange={(e) => {
                resetMessages();
                setName(e.target.value);
              }}
              style={inputStyle}
            />
          </label>

          <label style={labelStyle}>
            Telefono *
            <input
              type="tel"
              placeholder="Es. 389 561 7880"
              value={phone}
              onChange={(e) => {
                resetMessages();
                setPhone(e.target.value);
              }}
              style={inputStyle}
            />
          </label>

          <label style={labelStyle}>
            Trattamento desiderato *
            <input
              type="text"
              placeholder="Es. trattamento viso, manicure, ceretta..."
              value={treatment}
              onChange={(e) => {
                resetMessages();
                setTreatment(e.target.value);
              }}
              style={inputStyle}
            />
          </label>

          {/* Data + Ora sulla stessa riga */}
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "flex-end",
            }}
          >
            <label style={{ ...labelStyle, flex: 1, minWidth: 140 }}>
              Data *
              <input
                type="date"
                value={date}
                onChange={(e) => {
                  resetMessages();
                  setDate(e.target.value);
                }}
                style={inputStyle}
              />
            </label>

            <label style={{ ...labelStyle, flex: 1, minWidth: 140 }}>
              Ora *
              <select
                value={time}
                onChange={(e) => {
                  resetMessages();
                  setTime(e.target.value);
                }}
                style={inputStyle}
              >
                <option value="">Seleziona un orario</option>
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label style={labelStyle}>
            Note (facoltative)
            <textarea
              rows={3}
              placeholder="Es. preferisco al mattino, trattamento rilassante..."
              value={notes}
              onChange={(e) => {
                resetMessages();
                setNotes(e.target.value);
              }}
              style={{ ...inputStyle, borderRadius: 12, resize: "vertical" }}
            />
          </label>

          <button
            type="submit"
            style={{
              marginTop: 10,
              borderRadius: 9999,
              border: "none",
              padding: "10px 16px",
              fontSize: "0.95rem",
              fontWeight: 600,
              backgroundColor: "#db2777",
              color: "white",
              cursor: "pointer",
            }}
          >
            Prenota 💖
          </button>

          {message && (
            <p
              style={{
                marginTop: 12,
                fontSize: "0.9rem",
                textAlign: "center",
                color: status === "success" ? "#16a34a" : "#b91c1c",
              }}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: "0.85rem",
  color: "#9d174d",
  fontWeight: 600,
  display: "flex",
  flexDirection: "column",
  gap: 4,
};

const inputStyle: React.CSSProperties = {
  border: "1px solid #f9a8d4",
  borderRadius: 9999,
  padding: "8px 12px",
  fontSize: "0.9rem",
  color: "#374151",
  outline: "none",
};