// app/recensioni/page.tsx

export default function RecensioniPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0f172a 0, #020617 55%, #020617 100%)",
        color: "#0f172a",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
        padding: "32px 16px 48px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1120 }}>
        {/* HEADER */}
        <header style={{ marginBottom: 28, textAlign: "center" }}>
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
              marginBottom: 10,
            }}
          >
            Recensioni dei clienti · GalaxBot AI
          </div>

          <h1
            style={{
              fontSize: "2.15rem",
              lineHeight: 1.2,
              marginBottom: 6,
              color: "#f9fafb",
            }}
          >
            Cosa dicono le attività che usano GalaxBot AI
          </h1>

          <p
            style={{
              opacity: 0.9,
              lineHeight: 1.7,
              maxWidth: 720,
              margin: "0 auto",
              fontSize: "0.95rem",
              color: "#e5e7eb",
            }}
          >
            Barbieri, pizzerie, studi professionali, negozi: qui raccogliamo
            le testimonianze reali di chi ha automatizzato messaggi,
            prenotazioni e ordini con il nostro chatbot.
          </p>
        </header>

        {/* LAYOUT DUE COLONNE */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(0, 1fr)",
            gap: 22,
          }}
        >
          {/* COLONNA SINISTRA – RECENSIONI VETRINA */}
          <section>
            <div
              style={{
                borderRadius: 20,
                padding: "18px 20px 16px",
                background: "rgba(15,23,42,0.98)",
                border: "1px solid rgba(51,65,85,0.95)",
                boxShadow: "0 22px 55px rgba(15,23,42,0.9)",
              }}
            >
              {/* Recensione 1 */}
              <article
                style={{
                  paddingBottom: 14,
                  marginBottom: 14,
                  borderBottom: "1px solid rgba(55,65,81,0.8)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "#22c55e",
                    marginBottom: 4,
                  }}
                >
                  ★★★★★ · Barber Shop
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#e5e7eb",
                    lineHeight: 1.6,
                    marginBottom: 6,
                  }}
                >
                  “Prima passavo le pause a rispondere su WhatsApp. Adesso il
                  bot prende appuntamenti da solo e io vedo tutto nel foglio
                  Google. I clienti mi dicono che è comodissimo.”
                </p>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#9ca3af",
                  }}
                >
                  Luca · Barbiere
                </div>
              </article>

              {/* Recensione 2 */}
              <article
                style={{
                  paddingBottom: 14,
                  marginBottom: 14,
                  borderBottom: "1px solid rgba(55,65,81,0.8)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "#22c55e",
                    marginBottom: 4,
                  }}
                >
                  ★★★★★ · Pizzeria d&apos;asporto
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#e5e7eb",
                    lineHeight: 1.6,
                    marginBottom: 6,
                  }}
                >
                  “Il bot prende gli ordini da WhatsApp, chiede indirizzo e
                  orario, e noi riceviamo tutto pulito. Zero chiamate perse
                  quando il locale è pieno.”
                </p>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#9ca3af",
                  }}
                >
                  Martina · Pizzeria
                </div>
              </article>

              {/* Recensione 3 */}
              <article>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "#22c55e",
                    marginBottom: 4,
                  }}
                >
                  ★★★★☆ · Studio medico
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#e5e7eb",
                    lineHeight: 1.6,
                    marginBottom: 6,
                  }}
                >
                  “Usiamo GalaxBot per gestire richieste informazioni e
                  promemoria appuntamenti. I pazienti ricevono risposta subito
                  e il telefono in segreteria squilla molto meno.”
                </p>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#9ca3af",
                  }}
                >
                  Dr.ssa Rossi · Studio medico
                </div>
              </article>
            </div>

            <p
              style={{
                fontSize: "0.78rem",
                opacity: 0.8,
                marginTop: 8,
                color: "#e5e7eb",
              }}
            >
              Quando inizi a usare GalaxBot AI, puoi inviare la tua recensione
              dal modulo qui a fianco. Se autorizzi, la inseriremo in questa
              pagina come testimonianza.
            </p>
          </section>

          {/* COLONNA DESTRA – MODULO RECENSIONE */}
          <section>
            <div
              style={{
                borderRadius: 20,
                padding: "16px 18px 14px",
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                boxShadow: "0 22px 50px rgba(15,23,42,0.8)",
              }}
            >
              <h2
                style={{
                  fontSize: "1.02rem",
                  marginBottom: 6,
                  color: "#0f172a",
                }}
              >
                Lascia la tua recensione
              </h2>
              <p
                style={{
                  fontSize: "0.84rem",
                  color: "#4b5563",
                  marginBottom: 10,
                }}
              >
                Sei già cliente GalaxBot AI? Racconta in breve come ti sta
                aiutando con messaggi, prenotazioni o ordini. La recensione ci
                arriva in privato: se autorizzi, la pubblicheremo sul sito.
              </p>

              <div
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  border: "1px solid #e5e7eb",
                  background: "#ffffff",
                }}
              >
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdKA4gx4djL3YUH1rNXjHIqP_MpjSX-m_0jXC8vMRxIWR4sWw/viewform?embedded=true"
                  width="100%"
                  height="450"
                  style={{ border: "none" }}
                >
                  Caricamento…
                </iframe>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}