// app/demos/barbiere/page.tsx
"use client";

import { useState, useEffect, type FormEvent } from "react";
import Link from "next/link";

type ChatMessage = {
  sender: "user" | "bot";
  text: string;
};

type BookingFormState = {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
};

export default function DemoBarbierePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text:
        "Ciao! 👋 Sono il bot del barber shop. Puoi farmi domande sui servizi oppure usare il box «Prenotazione veloce dal bot» qui sotto per registrare un appuntamento di prova.",
    },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  const [form, setForm] = useState<BookingFormState>({
    name: "",
    phone: "",
    service: "Taglio uomo",
    date: "",
    time: "",
    notes: "",
  });
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingMessage, setBookingMessage] = useState<string | null>(null);
  const [bookingError, setBookingError] = useState<string | null>(null);

  // Responsive layout (desktop 2 colonne, mobile 1 colonna)
  useEffect(() => {
    const check = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 960);
      }
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Chat “finta” ma coerente – non chiama l’AI (così non consumi crediti).
  // Se poi vuoi ricollegarla alla vera /api/chat la cambiamo.
  const handleSend = async () => {
    if (!input.trim() || sending) return;
    const userText = input.trim();
    setInput("");
    setSending(true);

    setMessages((prev) => [...prev, { sender: "user", text: userText }]);

    // Risposta di esempio del bot
    const reply =
      "Questo è un esempio di risposta del bot. Nel progetto reale colleghiamo GalaxBot AI al tuo WhatsApp Business, Instagram o sito e il bot risponde da solo ai clienti 24/7. ✂️";

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setSending(false);
    }, 500);
  };

  const handleBookingSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setBookingError(null);
    setBookingMessage(null);

    if (!form.name || !form.phone || !form.service || !form.date || !form.time) {
      setBookingError("Compila tutti i campi obbligatori.");
      return;
    }

    try {
      setBookingLoading(true);
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Errore durante il salvataggio.");
      }

      setBookingMessage("✅ Prenotazione inviata al foglio di prova del barbiere.");
      setForm((prev) => ({
        ...prev,
        name: "",
        phone: "",
        service: "Taglio uomo",
        date: "",
        time: "",
        notes: "",
      }));

      // Messaggio riassuntivo nella chat
      const summary =
        `Ho registrato la tua richiesta di prenotazione ✅\n\n` +
        `Nome: ${form.name}\n` +
        `Servizio: ${form.service}\n` +
        `Data: ${form.date}\n` +
        `Ora: ${form.time}\n` +
        `Telefono: ${form.phone}`;

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: summary },
      ]);
    } catch (err) {
      setBookingError("Si è verificato un problema. Riprova tra poco.");
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0f172a 0, #020617 55%, #020617 100%)",
        color: "#e5e7eb",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
        padding: "32px 16px 48px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1120 }}>
        {/* HEADER */}
        <header
          style={{
            marginBottom: 22,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "4px 14px",
              borderRadius: 9999,
              background: "rgba(15,23,42,0.9)",
              border: "1px solid rgba(148,163,184,0.85)",
              fontSize: "0.74rem",
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "#e5e7eb",
              width: "fit-content",
            }}
          >
            Demo bot avanzato per barber shop 💈
          </div>

          <h1
            style={{
              fontSize: "2rem",
              lineHeight: 1.2,
            }}
          >
            Prenotazioni Barbiere BOT AVANZATO
          </h1>

          <p
            style={{
              maxWidth: 640,
              fontSize: "0.95rem",
              opacity: 0.9,
              lineHeight: 1.7,
            }}
          >
            Prova il chatbot in tempo reale. Puoi fare domande sui servizi oppure
            prenotare direttamente con il box “Prenotazione veloce dal bot” sotto
            la chat. Le prenotazioni di prova finiscono in un foglio Google, come
            succederebbe per il barbiere reale.
          </p>
        </header>

        {/* LAYOUT PRINCIPALE */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 20,
            alignItems: "flex-start",
          }}
        >
          {/* COLONNA SINISTRA: ISTRUZIONI + CHAT + MODULO */}
          <section
            style={{
              flex: 1.4,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Box istruzioni */}
            <div
              style={{
                borderRadius: 20,
                padding: "14px 18px",
                border: "1px solid rgba(55,65,81,0.9)",
                background:
                  "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.94))",
                fontSize: "0.84rem",
                lineHeight: 1.7,
              }}
            >
              <h2
                style={{
                  fontSize: "0.95rem",
                  marginBottom: 6,
                  color: "#f9fafb",
                }}
              >
                Come provare questa demo di prenotazione
              </h2>
              <ul
                style={{
                  paddingLeft: "1.1rem",
                  margin: 0,
                }}
              >
                <li>Fai una domanda al bot nella chat in alto (orari, servizi, prezzi).</li>
                <li>
                  Per registrare una prenotazione di prova usa il box “Prenotazione
                  veloce dal bot” sotto la chat.
                </li>
                <li>
                  Se scegli una data passata o un orario già occupato, il sistema ti
                  avvisa e non salva la prenotazione.
                </li>
              </ul>
            </div>

            {/* Box chat + modulo */}
            <div
              style={{
                borderRadius: 24,
                padding: isMobile ? "12px 10px 14px" : "16px 18px 18px",
                border: "1px solid rgba(15,23,42,0.95)",
                background:
                  "radial-gradient(circle at top, #020617 0, #020617 55%, #020617 100%)",
                boxShadow: "0 22px 55px rgba(15,23,42,0.9)",
              }}
            >
              {/* Chat */}
              <div
                style={{
                  borderRadius: 20,
                  padding: isMobile ? "10px 10px 12px" : "12px 14px",
                  border: "1px solid rgba(31,41,55,0.9)",
                  background:
                    "linear-gradient(145deg, rgba(15,23,42,0.98), rgba(15,23,42,0.96))",
                  marginBottom: 12,
                }}
              >
                <h3
                  style={{
                    fontSize: "0.9rem",
                    marginBottom: 6,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Prova il chatbot in tempo reale 💬
                </h3>

                <div
                  style={{
                    borderRadius: 18,
                    padding: "10px 10px 8px",
                    background:
                      "radial-gradient(circle at top, #020617 0, #020617 60%, #020617 100%)",
                    border: "1px solid rgba(31,41,55,0.9)",
                    maxHeight: 260,
                    overflowY: "auto",
                    marginBottom: 10,
                  }}
                >
                  {messages.map((m, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        justifyContent:
                          m.sender === "user" ? "flex-end" : "flex-start",
                        marginBottom: 6,
                      }}
                    >
                      <div
                        style={{
                          maxWidth: "80%",
                          borderRadius:
                            m.sender === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                          padding: "8px 10px",
                          fontSize: "0.84rem",
                          lineHeight: 1.5,
                          background:
                            m.sender === "user"
                              ? "linear-gradient(135deg, #0ea5e9, #38bdf8)"
                              : "rgba(15,23,42,0.98)",
                          color: m.sender === "user" ? "#0f172a" : "#e5e7eb",
                        }}
                      >
                        {m.text.split("\n").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < m.text.split("\n").length - 1 && <br />}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                  }}
                >
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    placeholder="Scrivi qui il tuo messaggio..."
                    style={{
                      flex: 1,
                      borderRadius: 9999,
                      border: "1px solid rgba(51,65,85,0.9)",
                      padding: "8px 14px",
                      fontSize: "0.86rem",
                      outline: "none",
                      background: "#020617",
                      color: "#e5e7eb",
                    }}
                  />
                  <button
                    onClick={handleSend}
                    disabled={sending || !input.trim()}
                    style={{
                      borderRadius: 9999,
                      border: "none",
                      padding: "8px 18px",
                      fontSize: "0.86rem",
                      fontWeight: 600,
                      cursor: sending || !input.trim() ? "not-allowed" : "pointer",
                      opacity: sending || !input.trim() ? 0.6 : 1,
                      background:
                        "linear-gradient(135deg, #0ea5e9, #38bdf8)",
                      color: "#0f172a",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Invia
                  </button>
                </div>
              </div>

              {/* Modulo prenotazione veloce */}
              <div
                style={{
                  borderRadius: 20,
                  padding: isMobile ? "10px 10px 12px" : "12px 14px 14px",
                  border: "1px solid rgba(31,41,55,0.9)",
                  background:
                    "linear-gradient(145deg, rgba(15,23,42,0.98), rgba(15,23,42,0.96))",
                  marginTop: 8,
                }}
              >
                <h3
                  style={{
                    fontSize: "0.9rem",
                    marginBottom: 6,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Prenotazione veloce dal bot 📅
                </h3>
                <p
                  style={{
                    fontSize: "0.8rem",
                    opacity: 0.9,
                    marginBottom: 8,
                  }}
                >
                  Compila questi campi e il sistema salva la prenotazione
                  direttamente nel pannello del barbiere (foglio Google di test).
                  I messaggi scritti nella chat <strong>non</strong> creano
                  prenotazioni.
                </p>

                <form
                  onSubmit={handleBookingSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
                      gap: 6,
                    }}
                  >
                    <input
                      placeholder="Nome"
                      value={form.name}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, name: e.target.value }))
                      }
                      style={inputStyle}
                    />
                    <input
                      placeholder="Telefono"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      style={inputStyle}
                    />
                  </div>

                  <input
                    placeholder="Servizio (es. Taglio uomo)"
                    value={form.service}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, service: e.target.value }))
                    }
                    style={inputStyle}
                  />

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                      gap: 6,
                    }}
                  >
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, date: e.target.value }))
                      }
                      style={inputStyle}
                    />
                    <input
                      type="time"
                      value={form.time}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, time: e.target.value }))
                      }
                      style={inputStyle}
                    />
                  </div>

                  <input
                    placeholder="Note (opzionale)"
                    value={form.notes}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, notes: e.target.value }))
                    }
                    style={inputStyle}
                  />

                  {bookingError && (
                    <p
                      style={{
                        fontSize: "0.78rem",
                        color: "#fca5a5",
                        marginTop: 2,
                      }}
                    >
                      {bookingError}
                    </p>
                  )}
                  {bookingMessage && (
                    <p
                      style={{
                        fontSize: "0.78rem",
                        color: "#bbf7d0",
                        marginTop: 2,
                      }}
                    >
                      {bookingMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={bookingLoading}
                    style={{
                      marginTop: 6,
                      width: "100%",
                      borderRadius: 9999,
                      border: "none",
                      padding: "9px 16px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      background: "#22c55e",
                      color: "#052e16",
                      cursor: bookingLoading ? "wait" : "pointer",
                    }}
                  >
                    {bookingLoading ? "Invio in corso..." : "Invia prenotazione"}
                  </button>
                </form>
              </div>

              <p
                style={{
                  marginTop: 8,
                  fontSize: "0.75rem",
                  opacity: 0.8,
                }}
              >
                Questo è solo un esempio. Nel progetto reale colleghiamo GalaxBot AI
                al tuo WhatsApp Business, Instagram o sito web e lo adattiamo al tuo
                settore (barbiere, pizzeria, studio medico, negozio, ecc.), così il
                bot si occupa di messaggi e prenotazioni al posto tuo.
              </p>
            </div>
          </section>

          {/* COLONNA DESTRA: SPIEGAZIONE + BOTTONI */}
          <aside
            style={{
              flex: 1,
            }}
          >
            <div
              style={{
                borderRadius: 24,
                padding: "16px 16px 18px",
                border: "1px solid rgba(22,163,74,0.9)",
                background:
                  "linear-gradient(145deg, rgba(22,163,74,0.96), rgba(34,197,94,0.96))",
                color: "#052e16",
                boxShadow: "0 22px 55px rgba(15,23,42,0.65)",
              }}
            >
              <h2
                style={{
                  fontSize: "1rem",
                  marginBottom: 6,
                }}
              >
                Come puoi usare questo bot nel tuo negozio
              </h2>
              <ul
                style={{
                  paddingLeft: "1.1rem",
                  fontSize: "0.86rem",
                  lineHeight: 1.7,
                  marginBottom: 10,
                }}
              >
                <li>
                  I clienti ti scrivono su WhatsApp, Instagram o dal sito e il bot
                  risponde subito al posto tuo.
                </li>
                <li>
                  Le richieste di appuntamento finiscono in un foglio Google che puoi
                  controllare quando vuoi.
                </li>
                <li>
                  Possiamo adattare lo stesso sistema a pizzerie, bar, pasticcerie,
                  hotel, studi medici, negozi di abbigliamento e altri settori.
                </li>
              </ul>

              <p
                style={{
                  fontSize: "0.82rem",
                  lineHeight: 1.6,
                  marginBottom: 12,
                }}
              >
                Compilando il modulo di iscrizione ti preparo una versione
                personalizzata del bot per la tua attività. Se ti piace, puoi poi
                attivare l&apos;abbonamento e collegarlo a WhatsApp Business, sito o
                solo come app con link + QR code.
              </p>

              <p
                style={{
                  fontSize: "0.78rem",
                  lineHeight: 1.5,
                  marginBottom: 10,
                }}
              >
                Quando clicchi sui pulsanti qui sotto, si apre la pagina iscrizione
                GalaxBot AI. Da lì puoi compilare il modulo ufficiale su Google,
                scegliere il piano che preferisci e attivare l&apos;abbonamento via
                Stripe. In ogni momento puoi chiudere la scheda e tornare al sito.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <Link href="/iscriviti">
                  <button
                    style={{
                      width: "100%",
                      borderRadius: 9999,
                      border: "none",
                      padding: "9px 16px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      background: "#22c55e",
                      color: "#052e16",
                      cursor: "pointer",
                    }}
                  >
                    Compila il modulo per il tuo bot
                  </button>
                </Link>

                <Link href="/iscriviti#piani">
                  <button
                    style={{
                      width: "100%",
                      borderRadius: 9999,
                      border: "none",
                      padding: "9px 16px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      background:
                        "linear-gradient(135deg, #f97316, #ea580c)",
                      color: "#111827",
                      cursor: "pointer",
                    }}
                  >
                    Vedi prezzi e attiva l&apos;abbonamento
                  </button>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  borderRadius: 9999,
  border: "1px solid rgba(51,65,85,0.9)",
  padding: "6px 10px",
  fontSize: "0.82rem",
  outline: "none",
  background: "#020617",
  color: "#e5e7eb",
};