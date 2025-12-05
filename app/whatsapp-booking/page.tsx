// app/whatsapp-booking/page.tsx
"use client";

import { useState, useEffect, FormEvent } from "react";

type FreeSlot = string;

export default function WhatsappBookingPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const [freeSlots, setFreeSlots] = useState<FreeSlot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Quando cambia la data, carico gli orari disponibili
  useEffect(() => {
    if (!date) return;
    void loadAvailability(date);
  }, [date]);

  async function loadAvailability(selectedDate: string) {
    try {
      setLoadingSlots(true);
      setErrorMessage("");
      setSuccessMessage("");
      setFreeSlots([]);
      setTime("");

      const res = await fetch("/api/barber-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "get_availability",
          date: selectedDate,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Errore nel recupero degli orari.");
      }

      setFreeSlots(data.freeSlots || []);
    } catch (err: any) {
      console.error("[BOOKING] Errore get_availability:", err);
      setErrorMessage(
        err?.message || "Errore inatteso durante il recupero degli orari."
      );
    } finally {
      setLoadingSlots(false);
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!name || !service || !date || !time) {
      setErrorMessage("Compila almeno nome, servizio, data e ora.");
      return;
    }

    try {
      setSubmitting(true);

      const res = await fetch("/api/barber-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "create_booking",
          name,
          phone,
          service,
          date,
          time,
          notes,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.conflict) {
          setErrorMessage(
            "Questo orario è già occupato. Scegli un altro slot libero."
          );
        } else {
          setErrorMessage(data.error || "Errore durante la prenotazione.");
        }
        return;
      }

      setSuccessMessage("Prenotazione salvata correttamente! ✅");
      setName("");
      setPhone("");
      setService("");
      setNotes("");
      setTime("");

      // Ricarico gli slot liberi per quella data
      if (date) {
        void loadAvailability(date);
      }
    } catch (err: any) {
      console.error("[BOOKING] Errore create_booking:", err);
      setErrorMessage(
        err?.message || "Errore inatteso durante la prenotazione."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #020617 0, #020617 55%, #000000 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
        color: "#e5e7eb",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          borderRadius: 20,
          border: "1px solid rgba(148,163,184,0.4)",
          background: "rgba(15,23,42,0.96)",
          padding: "16px 18px 14px",
          boxShadow: "0 22px 50px rgba(0,0,0,0.85)",
        }}
      >
        <h1
          style={{
            fontSize: "1.1rem",
            marginBottom: 8,
            color: "#f9fafb",
          }}
        >
          Prenotazione veloce 💈
        </h1>
        <p
          style={{
            fontSize: "0.85rem",
            color: "#e5e7eb",
            marginBottom: 12,
          }}
        >
          Compila questi campi e la prenotazione viene salvata nel pannello del
          barbiere. Gli orari occupati non compaiono nella lista.
        </p>

        {/* MESSAGGI */}
        {errorMessage && (
          <div
            style={{
              marginBottom: 10,
              borderRadius: 8,
              border: "1px solid rgba(248,113,113,0.6)",
              backgroundColor: "rgba(254,242,242,0.05)",
              padding: "8px 10px",
              fontSize: "0.78rem",
              color: "#fecaca",
            }}
          >
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div
            style={{
              marginBottom: 10,
              borderRadius: 8,
              border: "1px solid rgba(52,211,153,0.6)",
              backgroundColor: "rgba(6,95,70,0.35)",
              padding: "8px 10px",
              fontSize: "0.78rem",
              color: "#bbf7d0",
            }}
          >
            {successMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          {/* NOME */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <label style={{ fontSize: "0.8rem", fontWeight: 500 }}>
              Nome cliente *
            </label>
            <input
              type="text"
              placeholder="Es. Marco"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* TELEFONO */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <label style={{ fontSize: "0.8rem", fontWeight: 500 }}>
              Telefono
            </label>
            <input
              type="tel"
              placeholder="Es. 3331234567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* SERVIZIO */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <label style={{ fontSize: "0.8rem", fontWeight: 500 }}>
              Servizio *
            </label>
            <input
              type="text"
              placeholder="Es. Taglio uomo, barba..."
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* DATA */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <label style={{ fontSize: "0.8rem", fontWeight: 500 }}>
              Data *
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* ORARIO */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <label style={{ fontSize: "0.8rem", fontWeight: 500 }}>
              Orario *
            </label>

            {loadingSlots ? (
              <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
                Caricamento orari disponibili...
              </div>
            ) : freeSlots.length === 0 && date ? (
              <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
                Nessun orario libero per questa data.
              </div>
            ) : null}

            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              disabled={loadingSlots || freeSlots.length === 0}
              style={inputStyle}
            >
              <option value="">Seleziona un orario</option>
              {freeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          {/* NOTE */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <label style={{ fontSize: "0.8rem", fontWeight: 500 }}>
              Note (facoltative)
            </label>
            <textarea
              rows={3}
              placeholder="Es. Preferenze, indicazioni particolari..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{
                ...inputStyle,
                borderRadius: 14,
                resize: "vertical",
              }}
            />
          </div>

          {/* BOTTONE */}
          <button
            type="submit"
            disabled={submitting}
            style={{
              marginTop: 8,
              width: "100%",
              borderRadius: 9999,
              border: "none",
              padding: "10px 14px",
              fontSize: "0.9rem",
              fontWeight: 600,
              backgroundColor: submitting ? "#4b5563" : "#16a34a",
              color: "#022c22",
              cursor: submitting ? "default" : "pointer",
            }}
          >
            {submitting ? "Invio prenotazione..." : "Conferma prenotazione"}
          </button>
        </form>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: 9999,
  border: "1px solid rgba(148,163,184,0.75)",
  padding: "8px 12px",
  fontSize: "0.85rem",
  backgroundColor: "#020617",
  color: "#e5e7eb",
  outline: "none",
};
