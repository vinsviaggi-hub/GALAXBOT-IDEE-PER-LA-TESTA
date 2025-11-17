// app/iscriviti/page.tsx
"use client";

import React from "react";

export default function IscrivitiPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #dde7ff 0%, #eef2ff 35%, #e0f2fe 100%)",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
        color: "#0f172a",
        padding: "32px 16px 40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1100 }}>
        {/* BADGE */}
        <div
          style={{
            display: "inline-block",
            padding: "4px 14px",
            borderRadius: 9999,
            background: "rgba(15,23,42,0.06)",
            border: "1px solid rgba(15,23,42,0.12)",
            fontSize: "0.72rem",
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          Iscrizione servizio · GalaxBot AI
        </div>

        {/* TITOLO + TESTO INTRO */}
        <header style={{ marginBottom: 20 }}>
          <h1
            style={{
              fontSize: "2rem",
              lineHeight: 1.1,
              marginBottom: 8,
              background:
                "linear-gradient(120deg, #1e293b, #0f172a 40%, #1d4ed8 80%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Attiva GalaxBot AI per la tua attività 🚀
          </h1>

          <p
            style={{
              maxWidth: 720,
              fontSize: "0.96rem",
              lineHeight: 1.6,
              opacity: 0.9,
            }}
          >
            Da questa pagina fai tutto: ci dai i dati del tuo negozio, guardi un
            demo del tuo settore e attivi l&apos;abbonamento mensile.
            <br />
            Noi configuriamo il chatbot su WhatsApp, Instagram o sito e ti
            inviamo i link pronti da usare.
          </p>

          <p
            style={{
              marginTop: 8,
              fontSize: "0.9rem",
            }}
          >
            Vuoi vedere cosa dicono altre attività?{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdKA4gx4djL3YUH1rNXjHIqP_MpjSX-m_0jXC8vMRxIWR4sWw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "underline",
                color: "#1d4ed8",
                fontWeight: 500,
              }}
            >
              Guarda le recensioni →
            </a>
          </p>
        </header>

        {/* STEP BAR */}
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 24,
          }}
        >
          {[
            {
              n: 1,
              title: "Compila il modulo",
              sub: "Nome attività, contatti e orari.",
            },
            {
              n: 2,
              title: "Scegli il tuo demo",
              sub: "Barbiere, pizzeria, studio, ecc.",
            },
            {
              n: 3,
              title: "Attiva l’abbonamento",
              sub: "Pagamento Stripe, disdetta autonoma.",
            },
          ].map((step) => (
            <div
              key={step.n}
              style={{
                flex: "1 1 180px",
                minWidth: 0,
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 14px",
                borderRadius: 9999,
                background: "#0f172a",
                boxShadow: "0 12px 25px rgba(15,23,42,0.45)",
              }}
            >
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: "#facc15",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {step.n}
              </div>
              <div style={{ color: "#e5e7eb" }}>
                <div
                  style={{
                    fontSize: "0.86rem",
                    fontWeight: 600,
                    marginBottom: 2,
                  }}
                >
                  {step.title}
                </div>
                <div style={{ fontSize: "0.78rem", opacity: 0.85 }}>
                  {step.sub}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* GRID 3 COLONNE (STACK SU MOBILE) */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(0, 1fr) minmax(0, 1.15fr)",
            gap: 18,
          }}
        >
          {/* COLONNA 1 – MODULO GOOGLE */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: 22,
              padding: "16px 16px 18px",
              boxShadow:
                "0 18px 45px rgba(15,23,42,0.22), 0 0 0 1px rgba(148,163,184,0.35)",
            }}
          >
            <h2
              style={{
                fontSize: "1.02rem",
                marginBottom: 6,
              }}
            >
              1. Compila il modulo per il tuo negozio
            </h2>
            <p
              style={{
                fontSize: "0.86rem",
                lineHeight: 1.5,
                marginBottom: 10,
                color: "#475569",
              }}
            >
              Inserisci i dati principali: nome attività, contatti, settore,
              orari e cosa vuoi che faccia il bot. Usiamo queste informazioni per
              preparare GalaxBot AI su misura per te.
            </p>

            <div
              style={{
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid rgba(148,163,184,0.8)",
                boxShadow:
                  "0 10px 30px rgba(15,23,42,0.20), inset 0 0 0 1px rgba(255,255,255,0.4)",
                background: "#f8fafc",
              }}
            >
              <iframe
                title="Modulo iscrizione GalaxBot AI"
                src="https://docs.google.com/forms/d/e/1FAIpQLScaXQvokbWoOWdBtvbj4PZFt10saZ3k_GNi4qF13T41777fIg/viewform?embedded=true"
                style={{
                  width: "100%",
                  height: 520,
                  border: "none",
                }}
              />
            </div>

            <p
              style={{
                marginTop: 6,
                fontSize: "0.78rem",
                color: "#64748b",
              }}
            >
              Dopo l&apos;invio del modulo ti contattiamo via email o WhatsApp
              per confermare i dettagli e mostrarti la demo personalizzata.
            </p>
          </div>

          {/* COLONNA 2 – SETTORI / DEMO */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: 22,
              padding: "16px 16px 18px",
              boxShadow:
                "0 18px 45px rgba(15,23,42,0.18), 0 0 0 1px rgba(148,163,184,0.35)",
            }}
          >
            <h2
              style={{
                fontSize: "1.02rem",
                marginBottom: 4,
              }}
            >
              2. Guarda il demo del tuo settore
            </h2>
            <p
              style={{
                fontSize: "0.84rem",
                lineHeight: 1.5,
                marginBottom: 10,
                color: "#475569",
              }}
            >
              Apri il demo più vicino alla tua attività per vedere come
              GalaxBot AI potrebbe lavorare per te. Nel modulo di iscrizione
              potrai descrivere il bot su misura per il tuo locale.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 8,
                fontSize: "0.82rem",
              }}
            >
              {[
                ["Barbiere / Parrucchiere", "/demos/barbiere"],
                ["Pizzeria", "/demos/pizzeria"],
                ["Bar / Caffetteria", "/demos/bar"],
                ["Ristorante", "/demos/ristorante"],
                ["Pasticceria / Bakery", "/demos/pasticceria"],
                ["Gelateria", "/demos/gelateria"],
                ["Centro estetico / Beauty", "/demos/estetica"],
                ["Parrucchiera donna", "/demos/parrucchiera"],
                ["Studio medico / Professionisti", "/demos/studiomedico"],
                ["Dentista", "/demos/dentista"],
                ["Veterinario", "/demos/veterinario"],
                ["Hotel / B&B", "/demos/hotel"],
                ["Negozi / E-commerce", "/demos/ecommerce"],
                ["Palestra / Fitness", "/demos/palestra"],
                ["Abbigliamento / Moda", "/demos/abbigliamento"],
                ["Altro settore", "/demos/abbigliamento"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "7px 9px",
                    borderRadius: 9999,
                    border: "1px solid rgba(148,163,184,0.9)",
                    background:
                      "radial-gradient(circle at top, #f9fafb 0, #e5e7eb 70%)",
                    textDecoration: "none",
                    color: "#0f172a",
                    fontWeight: 500,
                    boxShadow: "0 4px 10px rgba(15,23,42,0.12)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>

            <p
              style={{
                marginTop: 8,
                fontSize: "0.78rem",
                color: "#64748b",
              }}
            >
              Hai un&apos;attività diversa? Nel modulo puoi descrivere il bot
              che ti serve: lo adatteremo noi ai tuoi servizi, prezzi e regole.
            </p>
          </div>

          {/* COLONNA 3 – ABBONAMENTO */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                background: "#fefce8",
                borderRadius: 22,
                padding: "14px 14px 16px",
                boxShadow:
                  "0 18px 45px rgba(161,98,7,0.25), 0 0 0 1px rgba(234,179,8,0.55)",
              }}
            >
              <h2
                style={{
                  fontSize: "1.02rem",
                  marginBottom: 6,
                }}
              >
                3. Attiva l&apos;abbonamento GalaxBot AI
              </h2>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginBottom: 6,
                  color: "#78350f",
                }}
              >
                Prezzo standard: <strong>29€/mese</strong>. Nessun vincolo
                annuale: puoi gestire carta, fatture e disdetta dal portale
                clienti Stripe che riceverai dopo l&apos;attivazione.
              </p>
              <p
                style={{
                  fontSize: "0.84rem",
                  marginBottom: 8,
                  color: "#854d0e",
                  padding: "6px 8px",
                  borderRadius: 10,
                  background: "rgba(250,204,21,0.3)",
                  border: "1px dashed rgba(217,119,6,0.7)",
                }}
              >
                <strong>PROMO LANCIO:</strong> codice{" "}
                <strong>PROMO10</strong> = <strong>10€ il primo mese</strong>,
                poi 29€/mese.
              </p>

              <a
                href="https://buy.stripe.com/5kQ4gzbY30Vi6sP6uab3q02"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px 16px",
                  borderRadius: 9999,
                  border: "none",
                  background:
                    "linear-gradient(120deg, #facc15, #eab308, #f97316)",
                  color: "#0f172a",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  boxShadow:
                    "0 14px 30px rgba(161,98,7,0.55), 0 0 0 1px rgba(250,250,250,0.6)",
                  marginBottom: 6,
                }}
              >
                Attiva ora il tuo abbonamento
              </a>

              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#854d0e",
                }}
              >
                Nel checkout Stripe inserisci il codice{" "}
                <strong>PROMO10</strong> nel campo{" "}
                <strong>&quot;Codice promozionale&quot;</strong> per pagare solo{" "}
                <strong>10€ il primo mese</strong>.
              </p>

              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#78350f",
                  marginTop: 6,
                }}
              >
                L&apos;abbonamento è unico per tutti i settori: dopo il pagamento
                configuriamo GalaxBot AI sulla tua attività specifica (bar,
                pizzeria, barbiere, studio medico, negozio, ecc.).
              </p>
            </div>

            <div
              style={{
                background: "#0f172a",
                color: "#e5e7eb",
                borderRadius: 20,
                padding: "12px 14px 14px",
                boxShadow: "0 16px 40px rgba(15,23,42,0.6)",
              }}
            >
              <h3
                style={{
                  fontSize: "0.96rem",
                  marginBottom: 4,
                }}
              >
                Cosa include l&apos;abbonamento
              </h3>
              <ul
                style={{
                  paddingLeft: 18,
                  margin: 0,
                  fontSize: "0.8rem",
                  lineHeight: 1.6,
                }}
              >
                <li>
                  Configurazione iniziale del bot sulla tua attività (settore,
                  servizi, prezzi, regole, orari).
                </li>
                <li>
                  Collegamento a WhatsApp Business, Instagram o sito (dove
                  possibile).
                </li>
                <li>Gestione messaggi, richieste info e appuntamenti 24/7.</li>
                <li>
                  Accesso al foglio con le richieste / prenotazioni per tenere
                  tutto sotto controllo.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FOOTER LEGALE */}
        <p
          style={{
            marginTop: 20,
            fontSize: "0.78rem",
            color: "#64748b",
            textAlign: "right",
          }}
        >
          Proseguendo accetti le condizioni del servizio GalaxBot AI.
          {"  "}
          Leggi{" "}
          <a
            href="/termini"
            style={{ color: "#1d4ed8", textDecoration: "underline" }}
          >
            Termini d&apos;uso
          </a>{" "}
          e{" "}
          <a
            href="/privacy"
            style={{ color: "#1d4ed8", textDecoration: "underline" }}
          >
            Informativa privacy
          </a>
          .
        </p>
      </div>

      {/* RESPONSIVE: STACK SU MOBILE */}
      <style jsx global>{`
        @media (max-width: 900px) {
          main div[style*='max-width: 1100'] section[style*='grid-template-columns'] {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>
    </main>
  );
}