// app/demos/abbigliamento/page.tsx

export default function AbbigliamentoDemo() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "32px 16px 40px",
        display: "flex",
        justifyContent: "center",
        background:
          "radial-gradient(circle at top, #ff9f7a 0, #1b2a5a 45%, #050816 100%)",
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
            marginBottom: "12px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 14px",
              borderRadius: 999,
              fontSize: "0.76rem",
              letterSpacing: 0.12,
              textTransform: "uppercase",
              background: "rgba(0,0,0,0.45)",
              border: "1px solid rgba(255,255,255,0.22)",
            }}
          >
            Demo settore abbigliamento · GalaxBot AI
          </span>
        </div>

        {/* TITOLO + SOTTOTITOLO */}
        <header
          style={{
            textAlign: "center",
            marginBottom: "26px",
          }}
        >
          <h1
            style={{
              fontSize: "2.1rem",
              marginBottom: "6px",
            }}
          >
            GalaxBot AI × Negozio di Abbigliamento 👗🧥
          </h1>

          <p
            style={{
              maxWidth: 640,
              margin: "0 auto",
              fontSize: "0.96rem",
              lineHeight: 1.6,
              opacity: 0.88,
            }}
          >
            Esempio di come GalaxBot AI può lavorare per un negozio di moda:
            risponde ai clienti, gestisce taglie, disponibilità, prenotazioni
            in camerino e ordini online, 24 ore su 24. Tu pensi solo a vendere.
          </p>
        </header>

        {/* TRE CARD PRINCIPALI */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "14px",
            marginBottom: "22px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, rgba(64, 140, 255, 0.18), rgba(2, 18, 54, 0.9))",
              border: "1px solid rgba(152, 194, 255, 0.7)",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.55)",
              fontSize: "0.88rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4, fontSize: "0.9rem" }}>
              🧾 Taglie & disponibilità
            </div>
            <div style={{ opacity: 0.9 }}>
              Il bot dice se un capo è disponibile, in quali taglie e colori, e
              può leggere i dati da un gestionale o da un semplice foglio
              prodotti.
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, rgba(255, 124, 216, 0.22), rgba(51, 7, 57, 0.95))",
              border: "1px solid rgba(255, 173, 230, 0.8)",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.55)",
              fontSize: "0.88rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4, fontSize: "0.9rem" }}>
              👗 Consigli su outfit & prodotti
            </div>
            <div style={{ opacity: 0.9 }}>
              Suggerisce look in base a occasione, stagione e budget. Propone
              abbinamenti (pantalone + maglia + accessori) e promuove ciò che
              vuoi spingere di più.
            </div>
          </div>

          {/* Card 3 */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, rgba(144, 255, 199, 0.24), rgba(5, 54, 31, 0.96))",
              border: "1px solid rgba(173, 255, 211, 0.85)",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.55)",
              fontSize: "0.88rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4, fontSize: "0.9rem" }}>
              📲 WhatsApp, Instagram o sito
            </div>
            <div style={{ opacity: 0.9 }}>
              I clienti scrivono dove sono abituati: WhatsApp Business,
              Instagram DM o chat sul sito. Il bot risponde in automatico 24/7.
            </div>
          </div>
        </section>

        {/* BLOCCO TESTO CENTRALE */}
        <section
          style={{
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              borderRadius: 22,
              padding: "18px 20px 18px",
              background:
                "linear-gradient(145deg, rgba(4, 16, 52, 0.92), rgba(3, 8, 26, 0.98))",
              border: "1px solid rgba(185, 209, 255, 0.35)",
              boxShadow: "0 18px 50px rgba(0, 0, 0, 0.6)",
              fontSize: "0.9rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.02rem",
                marginBottom: "10px",
              }}
            >
              Cosa potrebbe fare nella tua boutique o nel tuo negozio di
              abbigliamento?
            </h2>
            <ul
              style={{
                margin: 0,
                paddingLeft: "18px",
                lineHeight: 1.7,
              }}
            >
              <li>
                Rispondere a domande su taglie, colori, modelli, vestibilità e
                materiali.
              </li>
              <li>
                Dire se un articolo è disponibile in negozio o solo su ordine /
                online.
              </li>
              <li>
                Gestire prenotazioni in camerino o appuntamenti di shopping
                personalizzato.
              </li>
              <li>
                Inviare link a pagamenti, e-commerce o prodotti specifici in
                pochi secondi.
              </li>
              <li>
                Dare informazioni su resi, cambi, orari, indirizzo e parcheggio
                senza disturbarti.
              </li>
              <li>
                Avvisare i clienti di nuovi arrivi, saldi e promo in modo
                automatico.
              </li>
            </ul>

            <p
              style={{
                marginTop: "10px",
                fontSize: "0.82rem",
                opacity: 0.8,
              }}
            >
              Questo è un esempio statico. Nel progetto reale il chatbot viene
              collegato al tuo gestionale, al tuo sito o a un foglio ordini, così
              lavora davvero sui tuoi dati.
            </p>
          </div>
        </section>

        {/* CTA FINALE */}
        <section
          style={{
            textAlign: "center",
            marginTop: "6px",
          }}
        >
          <p
            style={{
              fontSize: "0.86rem",
              opacity: 0.85,
              marginBottom: "14px",
            }}
          >
            Vuoi vedere una chat che risponde davvero da sola? Guarda il demo
            completo per barbieri (stesso motore, adattato al tuo settore) oppure
            scrivimi su Instagram.
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
                background: "#16a3ff",
                color: "#ffffff",
                fontSize: "0.92rem",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 14px 32px rgba(0, 0, 0, 0.55)",
              }}
            >
              👀 Guarda il demo con chat
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