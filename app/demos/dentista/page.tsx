// app/demos/dentista/page.tsx

export default function DentistaDemo() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "32px 16px 40px",
        display: "flex",
        justifyContent: "center",
        background:
          "radial-gradient(circle at top, #7ad5ff 0, #132847 45%, #050816 100%)",
        color: "#ffffff",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: 980 }}>
        {/* BADGE IN ALTO */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "0.78rem",
            letterSpacing: 1.4,
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: 999,
              background: "rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.22)",
              textTransform: "uppercase",
              opacity: 0.9,
            }}
          >
            Demo studio dentistico · GalaxBot AI
          </span>
        </div>

        {/* TITOLO + SOTTOTITOLO */}
        <header style={{ textAlign: "center", marginBottom: "26px" }}>
          <h1
            style={{
              fontSize: "2.1rem",
              marginBottom: "6px",
              letterSpacing: 0.4,
            }}
          >
            GalaxBot AI × Studio Dentistico 🦷
          </h1>
          <p
            style={{
              opacity: 0.9,
              lineHeight: 1.6,
              maxWidth: 650,
              margin: "0 auto",
              fontSize: "0.95rem",
            }}
          >
            Esempio di come GalaxBot AI può aiutare uno studio dentistico:
            filtra le richieste, spiega i servizi, gestisce appuntamenti e
            informazioni di base. Il tutto in modo professionale, chiaro e senza
            fare diagnosi mediche.
          </p>
        </header>

        {/* 3 CARDS SERVIZI */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "14px",
            marginBottom: "20px",
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(145deg, rgba(121, 216, 255, 0.22), rgba(6, 20, 48, 0.95))",
              border: "1px solid rgba(178, 232, 255, 0.8)",
              boxShadow: "0 14px 38px rgba(0,0,0,0.6)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              📅 Gestione appuntamenti
            </div>
            <div style={{ opacity: 0.95 }}>
              Il bot raccoglie richieste di visita, propone fasce orarie, invia
              promemoria e riduce le telefonate perse alla reception.
            </div>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(145deg, rgba(190, 255, 208, 0.22), rgba(3, 39, 29, 0.96))",
              border: "1px solid rgba(196, 255, 214, 0.85)",
              boxShadow: "0 14px 38px rgba(0,0,0,0.6)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              ℹ️ Info su trattamenti
            </div>
            <div style={{ opacity: 0.95 }}>
              Spiega in modo semplice la differenza tra igiene, otturazioni,
              protesi, implantologia, allineatori, visite di controllo e molto
              altro (senza sostituire il medico).
            </div>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(145deg, rgba(255, 214, 142, 0.22), rgba(46, 30, 7, 0.96))",
              border: "1px solid rgba(255, 225, 186, 0.85)",
              boxShadow: "0 14px 38px rgba(0,0,0,0.6)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              📲 WhatsApp, Instagram o sito
            </div>
            <div style={{ opacity: 0.95 }}>
              I pazienti possono scrivere su WhatsApp Business, Instagram o
              dalla chat del sito: il bot risponde subito alle domande più
              comuni.
            </div>
          </div>
        </section>

        {/* BLOCCO TESTO LUNGO */}
        <section
          style={{
            marginBottom: "22px",
          }}
        >
          <div
            style={{
              borderRadius: 22,
              padding: "18px 20px 18px",
              background:
                "linear-gradient(145deg, rgba(5, 21, 52, 0.96), rgba(4, 10, 28, 0.98))",
              border: "1px solid rgba(188, 212, 255, 0.35)",
              boxShadow: "0 18px 50px rgba(0,0,0,0.65)",
              fontSize: "0.9rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.02rem",
                marginBottom: "10px",
              }}
            >
              Come può aiutare concretamente il tuo studio?
            </h2>
            <ul
              style={{
                margin: 0,
                paddingLeft: "20px",
                lineHeight: 1.7,
              }}
            >
              <li>
                Risponde a domande su orari, indirizzo, parcheggio, convenzioni
                e modalità di pagamento.
              </li>
              <li>
                Raccoglie richieste di prima visita, igiene o controllo e
                organizza le informazioni per la segreteria.
              </li>
              <li>
                Spiega in modo semplice cosa aspettarsi da alcuni trattamenti
                (tempi, step principali, preparazione).
              </li>
              <li>
                Riduce il carico di telefonate ripetitive, lasciando più tempo
                al personale per gestire i pazienti in studio.
              </li>
              <li>
                Può inviare link a moduli online, documenti informativi o
                pagine del tuo sito.
              </li>
            </ul>

            <p
              style={{
                marginTop: "10px",
                fontSize: "0.84rem",
                opacity: 0.8,
              }}
            >
              Questo è un demo statico. Nel progetto reale il bot viene
              personalizzato con le regole del tuo studio e integrato con i tuoi
              canali (WhatsApp, sito, gestionale).
            </p>
          </div>
        </section>

        {/* CTA FINALE */}
        <section
          style={{
            textAlign: "center",
            marginTop: "4px",
          }}
        >
          <p
            style={{
              fontSize: "0.86rem",
              opacity: 0.85,
              marginBottom: "14px",
            }}
          >
            Vuoi vedere una chat che risponde davvero in tempo reale? Guarda il
            demo con chatbot integrato oppure scrivimi su Instagram per un
            esempio dedicato al tuo studio.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <a
              href="/demos/barbiere"
              style={{
                borderRadius: 9999,
                padding: "10px 20px",
                background:
                  "radial-gradient(circle at top, #27b3ff 0, #007bff 40%, #0052cc 100%)",
                color: "#ffffff",
                fontSize: "0.92rem",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 14px 32px rgba(0,123,255,0.7)",
                border: "1px solid rgba(255,255,255,0.5)",
              }}
            >
              💬 Guarda il demo con chat
            </a>

            <a
              href="https://www.instagram.com/galaxbot_ai?igsh=MW9zNmNlcmtuMHE3cA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRadius: 9999,
                padding: "10px 20px",
                border: "1px solid rgba(255,255,255,0.7)",
                background: "rgba(5, 15, 40, 0.85)",
                color: "#ffffff",
                fontSize: "0.92rem",
                fontWeight: 500,
                textDecoration: "none",
                boxShadow: "0 10px 28px rgba(0, 0, 0, 0.55)",
              }}
            >
              ✉️ Scrivimi su Instagram
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}