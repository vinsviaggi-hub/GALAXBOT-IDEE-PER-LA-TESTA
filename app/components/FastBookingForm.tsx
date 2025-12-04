"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "conflict" | "error";

export default function FastBookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Taglio uomo");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !service || !date || !time) {
      setStatus("error");
      setMessage("Compila almeno nome, servizio, data e ora.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          service,
          date,
          time,
          notes,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        // conflitto: orario occupato
        if (res.status === 409 || data?.conflict) {
          setStatus("conflict");
          setMessage(
            data?.error ||
              "Per questa data e ora c'è già una prenotazione. Scegli un altro orario."
          );
          return;
        }

        setStatus("error");
        setMessage(
          data?.error ||
            "Errore nel collegamento al foglio prenotazioni. Riprova tra poco."
        );
        return;
      }

      // ✅ tutto ok
      setStatus("success");
      setMessage(
        data?.message || "Prenotazione salvata correttamente nel pannello."
      );

      // se vuoi, pulisci i campi (lasciando telefono)
      setService("Taglio uomo");
      setDate("");
      setTime("");
      setNotes("");
    } catch (err) {
      console.error("[FAST BOOKING] Errore:", err);
      setStatus("error");
      setMessage(
        "Errore nel collegamento al foglio prenotazioni. Riprova tra poco."
      );
    }
  }

  // Piccolo helper per colore messaggio
  const messageColor =
    status === "success" ? "text-green-400" : "text-red-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Nome + Telefono */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm mb-1">Nome</label>
          <input
            className="w-full rounded-xl px-3 py-2 bg-slate-900/60 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Es. Luca"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Telefono</label>
          <input
            className="w-full rounded-xl px-3 py-2 bg-slate-900/60 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Es. 393..."
          />
        </div>
      </div>

      {/* Servizio */}
      <div>
        <label className="block text-sm mb-1">Servizio</label>
        <input
          className="w-full rounded-xl px-3 py-2 bg-slate-900/60 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          value={service}
          onChange={(e) => setService(e.target.value)}
          placeholder="Es. taglio uomo"
        />
        {/* se preferisci, qui puoi rimettere una <select> con le opzioni */}
      </div>

      {/* Data + Ora */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm mb-1">Data</label>
          <input
            type="date"
            className="w-full rounded-xl px-3 py-2 bg-slate-900/60 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Ora</label>
          <input
            type="time"
            className="w-full rounded-xl px-3 py-2 bg-slate-900/60 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>

      {/* Note */}
      <div>
        <label className="block text-sm mb-1">Note (opzionale)</label>
        <input
          className="w-full rounded-xl px-3 py-2 bg-slate-900/60 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Es. preferisco la macchinetta"
        />
      </div>

      {/* Bottone */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold py-3 transition disabled:opacity-60"
      >
        {status === "loading" ? "Invio in corso..." : "Invia prenotazione"}
      </button>

      {/* Messaggio dinamico (verde o rosso) */}
      {message && (
        <p className={`mt-2 text-sm ${messageColor}`}>
          {message}
        </p>
      )}

      {/* Testo esplicativo fisso del demo – questo puoi lasciarlo com'è sotto */}
      <p className="mt-2 text-xs text-slate-400">
        Questo è solo un esempio. Nel progetto reale colleghiamo GalaxBot AI al
        foglio del barbiere e il bot lavora sulle richieste vere dei clienti.
      </p>
    </form>
  );
}