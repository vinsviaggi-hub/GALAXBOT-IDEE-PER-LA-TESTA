// app/page.tsx
// Home del sito GalaxBot AI

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #2b6bff 0, #050816 55%, #02010a 100%)",
        color: "#ffffff",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
        padding: "32px 16px 40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 980 }}>
        {/* HERO */}
        <section
          style={{
            textAlign: "center",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.25)",
              fontSize: "0.8rem",
              opacity: 0.9,
              marginBottom: "10px",
            }}
          >
            🤖 GalaxBot AI • Chatbot per negozi e aziende
          </div>

          <h1
            style={{
              fontSize: "2.4rem",
              lineHeight: 1.15,
              marginBottom: "12px",
            }}
          >
            Trasforma messaggi in clienti.
            <span
              style={{
                display: "block",
                fontSize: "2.1rem",
                marginTop: "4px",
              }}
            >
              Il tuo chatbot lavora al posto tuo, 24/7.
            </span>
          </h1>

          <p
            style={{
              maxWidth: 620,
              margin: "0 auto 20px",
              opacity: 0.9,
              fontSize: "0.98rem",
              lineHeight: 1.6,
            }}
          >
            GalaxBot AI risponde ai clienti, gestisce prenotazioni,
            informazioni e richieste in automatico su WhatsApp, Instagram o sito web.
            Tu pensi al lavoro, lui pensa ai messaggi.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
              marginTop: "8px",
            }}
          >
            <a
              href="/demos/barbiere"
              style={{
                borderRadius: 9999,
                padding: "11px 22px",
                background: "#16a3ff",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
              }}
            >
              🔥 Prova il demo barbiere
            </a>

            <a
              href="https://www.instagram.com/galaxbot_ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRadius: 9999,
                padding: "11px 22px",
                border: "1px solid rgba(255,255,255,0.6)",
                color: "#ffffff",
                fontWeight: 500,
                fontSize: "0.95rem",
                textDecoration: "none",
                background: "rgba(0,0,0,0.25)",
                backdropFilter: "blur(6px)",
              }}
            >
              💬 Scrivimi su Instagram
            </a>
          </div>

          <p
            style={{
              marginTop: "10px",
              fontSize: "0.8rem",
              opacity: 0.8,
            }}
          >
            Nessun impegno immediato: prima provi il demo, poi decidiamo insieme come adattarlo al tuo business.
          </p>
        </section>

        {/* PER CHI È */}
        <section
          style={{
            marginBottom: "32px",
          }}
        >
          <h2
            style={{
              fontSize: "1.4rem",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            A chi è utile GalaxBot AI?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "12px",
            }}
          >
            <div
              style={{
                padding: "12px 14px",
                borderRadius: 16,
                background: "rgba(0,0,0,0.35)",
                border: "1px solid rgba(255,255,255,0.18)",
                fontSize: "0.9rem",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 4 }}>
                💈 Barbieri & parrucchieri
              </div>
              <div style={{ opacity: 0.9 }}>
                Prenotazioni, listino, orari e gestione clienti senza dover
                rispondere sempre al telefono.
              </div>
            </div>

            <div
              style={{
                padding: "12px 14px",
                borderRadius: 16,
                background: "rgba(0,0,0,0.35)",
                border: "1px solid rgba(255,255,255,0.18)",
                fontSize: "0.9rem",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 4 }}>
                🍕 Pizzerie & ristoranti
              </div>
              <div style={{ opacity: 0.9 }}>
                Info su menù, ordini, consegne e prenotazioni tavoli, tutto in automatico.
              </div>
            </div>

            <div
              style={{
                padding: "12px 14px",
                borderRadius: 16,
                background: "rgba(0,0,0,0.35)",
                border: "1px solid rgba(255,255,255,0.18)",
                fontSize: "0.9rem",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 4 }}>
                💅 Centri estetici & beauty
              </div>
              <div style={{ opacity: 0.9 }}>
                Trattamenti, disponibilità, pacchetti e promozioni spiegate dal bot, 24/7.
              </div>
            </div>

            <div
              style={{
                padding: "12px 14px",
                borderRadius: 16,
                background: "rgba(0,0,0,0.35)",
                border: "1px solid rgba(255,255,255,0.18)",
                fontSize: "0.9rem",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 4 }}>
                🏥 Studi medici & professionisti
              </div>
              <div style={{ opacity: 0.9 }}>
                Info su orari, visite, regole dello studio e prime richieste dei pazienti.
              </div>
            </div>

            <div
              style={{
                padding: "12px 14px",
                borderRadius: 16,
                background: "rgba(0,0,0,0.35)",
                border: "1px solid rgba(255,255,255,0.18)",
                fontSize: "0.9rem",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 4 }}>
                🛍️ Negozi & e-commerce
              </div>
              <div style={{ opacity: 0.9 }}>
                Domande su prodotti, spedizioni, resi e promozioni gestite dal bot.
              </div>
            </div>

            <div
              style={{
                padding: "12px 14px",
                borderRadius: 16,
                background: "rgba(0,0,0,0.35)",
                border: "1px solid rgba(255,255,255,0.18)",
                fontSize: "0.9rem",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 4 }}>
                🧩 E tante altre attività
              </div>
              <div style={{ opacity: 0.9 }}>
                Se ricevi tanti messaggi ripetuti ogni giorno, GalaxBot AI può aiutarti.
              </div>
            </div>
          </div>
        </section>

        {/* COSA FA IL BOT */}
        <section
          style={{
            marginBottom: "32px",
            padding: "18px 16px",
            borderRadius: 18,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(0,0,0,0.6))",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <h2
            style={{
              fontSize: "1.3rem",
              marginBottom: "10px",
            }}
          >
            Cosa fa il chatbot per te?
          </h2>

          <ul
            style={{
              margin: 0,
              paddingLeft: "1.1rem",
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            <li>Risponde ai clienti 24 ore su 24, anche quando sei occupato o chiuso.</li>
            <li>Gestisce prenotazioni, richieste di info, orari, listino e regole.</li>
            <li>Riduce le chiamate e i messaggi ripetuti, così lavori più tranquillo.</li>
            <li>Parla in modo naturale, semplice e rispettoso, non come un robot rigido.</li>
          </ul>
        </section>

        {/* COME FUNZIONA */}
        <section
          style={{
            marginBottom: "28px",
          }}
        >
          <h2
            style={{
              fontSize: "1.3rem",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Come funziona in pratica?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "12px",
            }}
          >
            <div
              style={{
                padding: "12px 14px",
                borderRadius: 16,
                background: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.2)",
                fontSize: "0.9rem",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 4 }}>1. Mi contatti</div>
              <div style={{ opacity: 0.9 }}>
                Ci scriviamo su Instagram e capisco come lavori e cosa ti serve.
              </div>
            </div>

            <div
              style={{
                padding: "12px 14px",
                borderRadius: 16,
                background: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.2)",
                fontSize: "0.9rem",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 4 }}>
                2. Creo il tuo bot su misura
              </div>
              <div style={{ opacity: 0.9 }}>
                Impostiamo risposte, servizi, orari, regole e stile del tuo brand.
              </div>
            </div>

            <div
              style={{
                padding: "12px 14px",
                borderRadius: 16,
                background: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.2)",
                fontSize: "0.9rem",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 4 }}>
                3. Lo colleghiamo ai tuoi canali
              </div>
              <div style={{ opacity: 0.9 }}>
                WhatsApp Business, Instagram o sito web: il bot inizia a lavorare per te.
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINALE */}
        <section
          style={{
            marginTop: "12px",
            padding: "18px 16px",
            borderRadius: 18,
            background: "rgba(0,0,0,0.55)",
            border: "1px solid rgba(255,255,255,0.18)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              marginBottom: "8px",
            }}
          >
            Pronto a vedere come funziona sul serio?
          </h2>
          <p
            style={{
              opacity: 0.9,
              fontSize: "0.96rem",
              marginBottom: "14px",
            }}
          >
            Inizia dal demo barbiere o scrivimi direttamente.
            Possiamo adattare GalaxBot AI al tuo negozio o alla tua attività.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/demos/barbiere"
              style={{
                borderRadius: 9999,
                padding: "11px 22px",
                background: "#16a3ff",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              👀 Guarda il demo barbiere
            </a>

            <a
              href="https://www.instagram.com/galaxbot_ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRadius: 9999,
                padding: "11px 22px",
                border: "1px solid rgba(255,255,255,0.6)",
                color: "#ffffff",
                fontWeight: 500,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              ✉️ Scrivimi ora su Instagram
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}