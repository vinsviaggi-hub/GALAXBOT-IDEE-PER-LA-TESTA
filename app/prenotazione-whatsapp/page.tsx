"use client";

import { useState, useEffect, FormEvent } from "react";

type FreeSlot = string;

export default function PrenotazioneWhatsAppPage() {
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
    if (!date) {
      setFreeSlots([]);
      setTime("");
      return;
    }
    void loadAvailability(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!name || !service || !date || !time) {
      setErrorMessage("Compila almeno nome, servizio, data e orario.");
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
            "Questo orario è già occupato. Scegli un altro orario libero."
          );
        } else {
          setErrorMessage(data.error || "Errore durante la prenotazione.");
        }
        return;
      }

      setSuccessMessage("Prenotazione registrata correttamente! ✅");

      setName("");
      setPhone("");
      setService("");
      setNotes("");
      setTime("");

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
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        margin: 0,
        padding: "16px",
        background:
          "radial-gradient(circle at top, #020617 0, #020617 55%, #000000 100%)",
        color: "#e5e7eb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
      }}
    >
      {/* CARD PICCOLA E CENTRATA */}
      <div
        style={{
          width: "100%",
          maxWidth: 380, // 👈 piccola anche su telefoni
          borderRadius: 20,
          border: "1px solid rgba(148,163,184,0.4)",
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(15,23,42,1))",
          padding: 16,
          boxShadow: "0 20px 50px rgba(15,23,42,0.9)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 10 }}>
          <h1
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              marginBottom: 4,
              color: "#f9fafb",
            }}
          >
            Prenotazione dal bot WhatsApp ✂️
          </h1>
          <p
            style={{
              fontSize: "0.75rem",
              color: "#e5e7eb",
              opacity: 0.9,
              lineHeight: 1.5,
            }}
          >
            Compila i campi. La prenotazione viene salvata direttamente nel
            pannello del barbiere.
          </p>
        </div>

        {/* MESSAGGI */}
        {errorMessage && (
          <div
            style={{
              marginBottom: 8,
              borderRadius: 8,
              border: "1px solid rgba(248,113,113,0.7)",
              backgroundColor: "rgba(248,113,113,0.08)",
              padding: "6px 8px",
              fontSize: "0.75rem",
              color: "#fecaca",
            }}
          >
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div
            style={{
              marginBottom: 8,
              borderRadius: 8,
              border: "1px solid rgba(52,211,153,0.7)",
              backgroundColor: "rgba(16,185,129,0.08)",
              padding: "6px 8px",
              fontSize: "0.75rem",
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
            <label
              style={{
                fontSize: "0.75rem",
                color: "#cbd5f5",
              }}
            >
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
            <label
              style={{
                fontSize: "0.75rem",
                color: "#cbd5f5",
              }}
            >
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
            <label
              style={{
                fontSize: "0.75rem",
                color: "#cbd5f5",
              }}
            >
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
            <label
              style={{
                fontSize: "0.75rem",
                color: "#cbd5f5",
              }}
            >
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
            <label
              style={{
                fontSize: "0.75rem",
                color: "#cbd5f5",
              }}
            >
              Orario *
            </label>

            {loadingSlots ? (
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#9ca3af",
                  marginBottom: 2,
                }}
              >
                Caricamento orari disponibili…
              </div>
            ) : freeSlots.length === 0 && date ? (
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#9ca3af",
                  marginBottom: 2,
                }}
              >
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
            <label
              style={{
                fontSize: "0.75rem",
                color: "#cbd5f5",
              }}
            >
              Note (facoltative)
            </label>
            <textarea
              rows={3}
              placeholder="Es. preferisco la macchinetta…"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{
                ...inputStyle,
                resize: "vertical",
              }}
            />
          </div>

          {/* BOTTONE */}
          <button
            type="submit"
            disabled={submitting}
            style={{
              marginTop: 6,
              width: "100%",
              borderRadius: 9999,
              border: "none",
              padding: "9px 14px",
              fontSize: "0.82rem",
              fontWeight: 600,
              backgroundColor: submitting ? "#16a34a99" : "#16a34a",
              color: "#022c22",
              cursor: submitting ? "default" : "pointer",
            }}
          >
            {submitting ? "Invio prenotazione..." : "Conferma prenotazione ✂️"}
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: 9999,
  border: "1px solid rgba(148,163,184,0.8)",
  padding: "7px 11px",
  fontSize: "0.8rem",
  backgroundColor: "#020617",
  color: "#e5e7eb",
  outline: "none",
};