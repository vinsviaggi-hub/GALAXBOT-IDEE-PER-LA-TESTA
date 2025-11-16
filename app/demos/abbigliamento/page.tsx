// app/demos/abbigliamento/page.tsx

export default function AbbigliamentoDemo() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #ff7a3c 0, #101b3f 45%, #020617 100%)",
        color: "#ffffff",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
        padding: "32px 16px 40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 960 }}>
        {/* BADGE */}
        <header style={{ textAlign: "center", marginBottom: 24 }}>
          <div
            style={{
              display: "inline-block",
              padding: "4px 14px",
              borderRadius: 9999,
              background: "rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.14)",
              fontSize: "0.78rem",
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Demo settore abbigliamento · GalaxBot AI
          </div>

          <h1
            style={{
              fontSize: "2.4rem",
              marginBottom: "8px",
              letterSpacing: 0.4,
            }}
          >
            GalaxBot AI × Abbigliamento 👗🧥
          </h1>

          <p
            style={{
              opacity: 0.95,
              lineHeight: 1.6,
              maxWidth: 680,
              margin: "0 auto",
              fontSize: "1rem",
            }}
          >
            Esempio di come GalaxBot AI può lavorare per un negozio di
            abbigliamento: risponde ai clienti, gestisce richieste su taglie,
            disponibilità, ordini e resi in automatico, 24 ore su 24.
          </p>
        </header>

        {/* TRE BOX */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "14px",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #1e293b, rgba(15,23,42,0.4))",
              border: "1px solid rgba(148,163,184,0.7)",
              boxShadow: "0 16px 40px rgba(15,23,42,0.7)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              🛍️ Taglie e disponibilità
            </div>
            <div style={{ opacity: 0.9 }}>
              Il bot dice subito se un capo è disponibile, in quali taglie e
              colori, senza che tu debba controllare ogni volta.
            </div>
          </div>

          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #1e293b, rgba(15,23,42,0.4))",
              border: "1px solid rgba(148,163,184,0.7)",
              boxShadow: "0 16px 40px rgba(15,23,42,0.7)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              📦 Ordini, spedizioni e resi
            </div>
            <div style={{ opacity: 0.9 }}>
              Risponde su tempi di consegna, costi di spedizione, politiche di
              cambio e reso, tracciamento dell&apos;ordine.
            </div>
          </div>

          <div
            style={{
              padding: "14px 16px",
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #1e293b, rgba(15,23,42,0.4))",
              border: "1px solid rgba(148,163,184,0.7)",
              boxShadow: "0 16px 40px rgba(15,23,42,0.7)",
              fontSize: "0.9rem",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>
              📲 WhatsApp, Instagram o sito
            </div>
            <div style={{ opacity: 0.9 }}>
              Risponde ai clienti dove ti scrivono: WhatsApp Business, DM
              Instagram o chat sul sito, anche quando il negozio è chiuso.
            </div>
          </div>
        </section>

        {/* BLOCCHONE TESTO */}
        <section
          style={{
            borderRadius: 22,
            padding: "18px 20px 18px",
            background:
              "linear-gradient(145deg, rgba(15,23,42,0.9), rgba(15,23,42,0.7))",
            border: "1px solid rgba(148,163,184,0.9)",
            boxShadow: "0 18px 50px rgba(15,23,42,0.9)",
            marginBottom: 24,
          }}
        >
          <h2
            style={{
              fontSize: "1.1rem",
              marginBottom: 10,
            }}
          >
            Cosa potrebbe fare nella tua boutique o negozio di abbigliamento?
          </h2>
          <ul
            style={{
              margin: 0,
              paddingLeft: "1.1rem",
              lineHeight: 1.7,
              fontSize: "0.95rem",
            }}
          >
            <li>Gestire richieste su taglie, vestibilità e abbinamenti.</li>
            <li>Dire subito se un articolo è disponibile in negozio o online.</li>
            <li>Prendere dati per ordini, prenotazione capi e ritiro in negozio.</li>
            <li>
              Rispondere a domande su spedizioni, cambi, resi e metodi di
              pagamento.
            </li>
            <li>
              Comunicare promo, nuove collezioni e saldi in modo automatico ai
              tuoi contatti.
            </li>
          </ul>

          <p
            style={{
              fontSize: "0.82rem",
              opacity: 0.75,
              marginTop: 12,
            }}
          >
            Questo è un esempio statico. Nel progetto reale il chatbot viene
            collegato ai tuoi canali (WhatsApp, Instagram, sito e-commerce) e
            personalizzato sul tuo catalogo e le tue regole.
          </p>
        </section>

        {/* CTA FINALE */}
        <section style={{ textAlign: "center", marginTop: 10 }}>
          <p
            style={{
              fontSize: "0.9rem",
              opacity: 0.9,
              marginBottom: 14,
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
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/demos/barbiere"
              style={{
                borderRadius: 9999,
                padding: "11px 22px",
                background:
                  "linear-gradient(135deg, #22c55e, #16a34a)",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 12px 30px rgba(34,197,94,0.5)",
              }}
            >
              Guarda il demo con chat
            </a>

            <a
              href="https://www.instagram.com/galaxbot_ai?igsh=MW9zNmNlcmtuMHE3cA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRadius: 9999,
                padding: "11px 22px",
                border: "1px solid rgba(255,255,255,0.7)",
                color: "#ffffff",
                fontWeight: 500,
                fontSize: "0.95rem",
                textDecoration: "none",
                background: "rgba(15,23,42,0.7)",
                backdropFilter: "blur(8px)",
              }}
            >
              Scrivimi su Instagram
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}