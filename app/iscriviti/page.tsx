// app/iscriviti/page.tsx

import React from "react";

export const metadata = {
  title: "Iscrizione GalaxBot AI",
  description:
    "Attiva GalaxBot AI per il tuo negozio o studio: compila il modulo, scegli il demo e attiva l’abbonamento.",
};

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdovcqFp8fcpmeq5ukeY7Qw4u4Xy7IGzzaYyyHmHQduJCj5Ew/viewform?embedded=true";

const recensioniUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdKA4gx4djL3YUH1rNXjHIqP_MpjSX-m_0jXC8vMRxIWR4sWw/viewform";

// 🔗 Link Stripe per i 4 piani
const STRIPE_APP_CHAT =
  "https://buy.stripe.com/4gM3cvfafavSg3pf0Gb3q03"; // Piano App + Chat
const STRIPE_BASE =
  "https://buy.stripe.com/fZu4gz5zF47u7wT5q6b3q04"; // Piano Base
const STRIPE_WHATSAPP =
  "https://buy.stripe.com/cNi3cve6b33q8AX6uab3q05"; // Piano WhatsApp Business
const STRIPE_INSTAGRAM =
  "https://buy.stripe.com/9B6aEX9PV9rO6sPcSyb3q06"; // Piano Instagram Direct

const demoSettori: { label: string; href: string }[] = [
  { label: "Barbiere / Parrucchiere", href: "/demos/barbiere" },
  { label: "Bar / Caffetteria", href: "/demos/bar" },
  { label: "Pasticceria / Bakery", href: "/demos/pasticceria" },
  { label: "Centro estetico / Beauty", href: "/demos/estetica" },
  { label: "Studio medico / Dentista", href: "/demos/studiomedico" },
  { label: "Veterinario", href: "/demos/veterinario" },
  { label: "Negozi / E-commerce", href: "/demos/ecommerce" },
  { label: "Palestra / Fitness", href: "/demos/palestra" },
  { label: "Pizzeria", href: "/demos/pizzeria" },
  { label: "Ristorante", href: "/demos/ristorante" },
  { label: "Gelateria", href: "/demos/gelateria" },
  { label: "Parrucchiera donna", href: "/demos/parrucchiera" },
  { label: "Hotel / B&B", href: "/demos/hotel" },
  { label: "Immobiliare", href: "/demos/immobiliare" },
  { label: "Abbigliamento / Moda", href: "/demos/abbigliamento" },
  { label: "Altro settore", href: "/demos/app" },
];

export default function IscrivitiPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #eef2ff 0, #dfe7fd 25%, #cfd9f9 50%, #c7d2fe 75%, #e5e7eb 100%)",
        padding: "32px 12px 56px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
        }}
      >
        {/* BADGE */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "4px 12px",
            borderRadius: 999,
            background: "rgba(15,23,42,0.06)",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: 0.3,
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 30% 0, #22c55e, #16a34a)",
            }}
          />
          <span>Iscrizione servizio · GalaxBot AI</span>
        </div>

        {/* TITOLO + INTRO */}
        <h1
          style={{
            fontSize: "clamp(1.9rem, 3vw, 2.35rem)",
            lineHeight: 1.1,
            fontWeight: 800,
            color: "#0f172a",
            marginBottom: 8,
          }}
        >
          Attiva GalaxBot AI per la tua attività 🚀
        </h1>

        <p
          style={{
            maxWidth: 680,
            fontSize: 15,
            lineHeight: 1.6,
            color: "#1f2937",
            marginBottom: 8,
          }}
        >
          Da questa pagina fai tutto: ci dai i dati del tuo negozio, guardi un
          demo del tuo settore e attivi l&apos;abbonamento mensile.
          <br />
          Noi configuriamo il chatbot su WhatsApp, Instagram, sito{" "}
          <strong>oppure solo come app dedicata (link + QR code)</strong> e ti
          inviamo i link pronti da usare.
        </p>

        <a
          href={recensioniUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 14,
            color: "#2563eb",
            textDecoration: "none",
            marginTop: 4,
            marginBottom: 20,
          }}
        >
          Vuoi vedere cosa dicono altre attività?{" "}
          <span
            style={{
              textDecoration: "underline",
            }}
          >
            Guarda le recensioni →
          </span>
        </a>

        {/* STEP 1-2-3 */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 22,
          }}
        >
          <StepPill
            step={1}
            title="Compila il modulo"
            subtitle="Nome attività, contatti, orari."
          />
          <StepPill
            step={2}
            title="Guarda il demo"
            subtitle="Barbiere, pizzeria, studio, ecc."
          />
          <StepPill
            step={3}
            title="Scegli il piano"
            subtitle="Bot base, App+Chat, WhatsApp, Instagram."
          />
        </div>

        {/* LAYOUT 3 SEZIONI - RESPONSIVE */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            alignItems: "stretch",
          }}
        >
          {/* COLONNA 1: MODULO */}
          <section
            style={{
              flex: "1 1 360px",
              minWidth: 0,
              background: "rgba(255,255,255,0.95)",
              borderRadius: 24,
              padding: 18,
              boxShadow:
                "0 18px 45px rgba(15,23,42,0.12), 0 0 0 1px rgba(148,163,184,0.18)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                fontSize: 17,
                fontWeight: 700,
                marginBottom: 6,
                color: "#0f172a",
              }}
            >
              1. Compila il modulo per il tuo negozio
            </h2>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.6,
                color: "#4b5563",
                marginBottom: 10,
              }}
            >
              Inserisci i dati principali: nome attività, contatti, settore,
              orari, link social e dove vuoi usare il bot (WhatsApp, Instagram,
              sito o solo app). Puoi anche caricare il tuo listino o menù (PDF o
              foto): lo usiamo per preparare GalaxBot AI su misura per te.
            </p>

            <div
              style={{
                flex: 1,
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid rgba(148,163,184,0.7)",
                background: "#f9fafb",
              }}
            >
              <iframe
                src={FORM_URL}
                width="100%"
                height="520"
                style={{
                  border: "none",
                  background: "white",
                }}
                loading="lazy"
              >
                Caricamento modulo…
              </iframe>
            </div>

            <p
              style={{
                marginTop: 8,
                fontSize: 11,
                color: "#6b7280",
              }}
            >
              Se ti appare la richiesta di{" "}
              <strong>consenso ai cookie di Moduli Google</strong>, accetta per
              poter compilare il modulo direttamente da questa pagina.
              <br />
              Dopo l&apos;invio ti contattiamo via email o WhatsApp per
              confermare i dettagli e mostrarti una demo personalizzata del tuo
              bot.
            </p>
          </section>

          {/* COLONNA 2: DEMO SETTORI */}
          <section
            style={{
              flex: "1 1 300px",
              minWidth: 0,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(248,250,252,0.96))",
              borderRadius: 24,
              padding: 18,
              boxShadow:
                "0 18px 45px rgba(15,23,42,0.08), 0 0 0 1px rgba(148,163,184,0.16)",
            }}
          >
            <h2
              style={{
                fontSize: 17,
                fontWeight: 700,
                marginBottom: 6,
                color: "#0f172a",
              }}
            >
              2. Guarda il demo del tuo settore
            </h2>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.6,
                color: "#4b5563",
                marginBottom: 12,
              }}
            >
              Apri il demo più vicino alla tua attività per vedere come GalaxBot
              AI potrebbe lavorare per te. Le pagine demo mostrano esempi di
              messaggi e flussi: la chat in tempo reale è attiva come esempio
              completo sul demo barbiere.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 8,
                marginBottom: 8,
              }}
            >
              {demoSettori.map((settore) => (
                <a
                  key={settore.href}
                  href={settore.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "9px 10px",
                    borderRadius: 999,
                    fontSize: 13,
                    lineHeight: 1.2,
                    textDecoration: "none",
                    color: "#0f172a",
                    background:
                      "linear-gradient(135deg, #ffffff, #e5e7eb)",
                    boxShadow:
                      "0 0 0 1px rgba(148,163,184,0.45), 0 12px 24px rgba(15,23,42,0.06)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {settore.label}
                </a>
              ))}
            </div>

            <p
              style={{
                fontSize: 12,
                color: "#6b7280",
                lineHeight: 1.5,
              }}
            >
              Non trovi il tuo settore? Nel modulo puoi descrivere il tuo caso:
              adatteremo il bot ai tuoi servizi e alle tue regole.
            </p>

            {/* CTA mobile: vedi il demo */}
            <div
              style={{
                marginTop: 12,
              }}
            >
              <a
                href="/demos/barbiere"
                style={{
                  display: "inline-flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 999,
                  padding: "10px 14px",
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                  background:
                    "linear-gradient(135deg, #020617, #0f172a)",
                  color: "#f9fafb",
                  boxShadow:
                    "0 16px 32px rgba(15,23,42,0.55)",
                }}
              >
                👀 Prova la chat demo (barbiere)
              </a>
              <p
                style={{
                  marginTop: 6,
                  fontSize: 11,
                  color: "#6b7280",
                  lineHeight: 1.4,
                }}
              >
                La chat in tempo reale è un esempio già pronto per barbieri: il
                bot che riceverai sarà adattato al tuo settore (pizzeria,
                estetica, studio, ecc.) con i tuoi testi, orari e servizi.
              </p>
            </div>
          </section>

          {/* COLONNA 3: PIANI */}
          <section
            style={{
              flex: "1 1 300px",
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <h2
              style={{
                fontSize: 17,
                fontWeight: 700,
                marginBottom: 2,
                color: "#0f172a",
              }}
            >
              3. Scegli il piano GalaxBot AI
            </h2>
            <p
              style={{
                fontSize: 12,
                color: "#4b5563",
                marginBottom: 4,
              }}
            >
              Scegli come vuoi usare il bot: solo per info, con chat +
              prenotazioni dal sito/app, oppure collegato anche a WhatsApp
              Business o ai DM di Instagram.
            </p>

            {/* Piano Base */}
            <PriceCard
              title="Piano Base · Solo bot informazioni"
              price="19€/mese"
              description={
                <>
                  Bot che risponde 24/7 alle domande frequenti dei clienti
                  (orari, servizi, indirizzo, contatti) senza gestire
                  prenotazioni o ordini. Ideale se vuoi iniziare a usare
                  GalaxBot AI per filtrare le richieste e liberare tempo, ma
                  preferisci continuare a gestire appuntamenti e ordini come fai
                  adesso.
                </>
              }
              buttonLabel="Attiva il Piano Base"
              href={STRIPE_BASE}
              gradient="linear-gradient(180deg,#fef9c3,#fde68a)"
              buttonBg="linear-gradient(135deg,#facc15,#eab308)"
              buttonTextColor="#1f2937"
            />

            {/* Piano App + Chat */}
            <PriceCard
              title="Piano App + Chat · Prenotazioni"
              price="29€/mese"
              description={
                <>
                  Include app / pagina dedicata con chat, modulo prenotazioni
                  collegato al foglio Google e demo personalizzata per il tuo
                  settore (barbiere, pizzeria, estetica, studio medico, ecc.).
                  <br />
                  <br />
                  <strong
                    style={{
                      display: "inline-block",
                      padding: "6px 10px",
                      borderRadius: 999,
                      background:
                        "linear-gradient(90deg,#f97316,#facc15)",
                      color: "#1f2937",
                      fontSize: 11,
                    }}
                  >
                    PROMO LANCIO: usa il codice PROMO10 al checkout Stripe e
                    paghi solo 10€ il primo mese, poi 29€/mese.
                  </strong>
                </>
              }
              buttonLabel="Attiva il Piano App + Chat"
              href={STRIPE_APP_CHAT}
              gradient="linear-gradient(180deg,#ffedd5,#fdba74)"
              buttonBg="linear-gradient(135deg,#ea580c,#c2410c)"
              buttonTextColor="#f9fafb"
            />

            {/* Piano WhatsApp */}
            <PriceCard
              title="Piano WhatsApp Business"
              price="69€/mese"
              description={
                <>
                  Come il Piano App + Chat, ma collegato anche a{" "}
                  <strong>WhatsApp Business</strong>: il bot risponde ai
                  messaggi dei clienti 24/7, raccoglie richieste e prenotazioni
                  e le salva in automatico su un foglio Google dedicato.
                  <br />
                  Nel foglio vedi tutte le richieste in ordine di giorno e
                  orario, così puoi richiamare o confermare gli appuntamenti
                  quando vuoi.
                </>
              }
              buttonLabel="Attiva il Piano WhatsApp Business"
              href={STRIPE_WHATSAPP}
              gradient="linear-gradient(180deg,#dcfce7,#bbf7d0)"
              buttonBg="linear-gradient(135deg,#16a34a,#15803d)"
              buttonTextColor="#052e16"
            />

            {/* Piano Instagram */}
            <PriceCard
              title="Piano Instagram Direct"
              price="69€/mese"
              description={
                <>
                  Come il Piano App + Chat, ma collegato ai{" "}
                  <strong>messaggi Direct di Instagram</strong>: il bot risponde
                  alle domande, raccoglie contatti e prenotazioni e scrive tutto
                  nel foglio Google.
                  <br />
                  Ideale se il tuo profilo Instagram riceve molti DM e vuoi
                  automatizzare risposte e richieste appuntamento.
                </>
              }
              buttonLabel="Attiva il Piano Instagram Direct"
              href={STRIPE_INSTAGRAM}
              gradient="linear-gradient(180deg,#fce7f3,#f9a8d4)"
              buttonBg="linear-gradient(135deg,#db2777,#c026d3)"
              buttonTextColor="#fdf2f8"
            />
          </section>
        </div>
      </div>
    </main>
  );
}

/* --- Componenti interni --- */

type StepProps = {
  step: number;
  title: string;
  subtitle: string;
};

function StepPill({ step, title, subtitle }: StepProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 14px",
        background:
          "linear-gradient(135deg, #020617, #0f172a)",
        borderRadius: 999,
        boxShadow:
          "0 16px 30px rgba(15,23,42,0.55)",
        color: "white",
        minWidth: 0,
      }}
    >
      <div
        style={{
          width: 26,
          height: 26,
          borderRadius: "999px",
          background:
            "radial-gradient(circle at 30% 0, #facc15, #f97316)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 13,
          fontWeight: 800,
          flexShrink: 0,
        }}
      >
        {step}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontSize: 11,
            opacity: 0.85,
            lineHeight: 1.25,
            whiteSpace: "nowrap",
          }}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
}

function PriceCard(props: {
  title: string;
  price: string;
  description: React.ReactNode;
  buttonLabel: string;
  href: string;
  gradient: string;
  buttonBg: string;
  buttonTextColor: string;
}) {
  const { title, price, description, buttonLabel, href, gradient, buttonBg, buttonTextColor } =
    props;

  return (
    <div
      style={{
        borderRadius: 24,
        padding: 18,
        background: gradient,
        boxShadow:
          "0 18px 45px rgba(15,23,42,0.16), 0 0 0 1px rgba(148,163,184,0.4)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: 8,
          marginBottom: 6,
        }}
      >
        <h3
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: "#1f2937",
          }}
        >
          {title}
        </h3>
        <span
          style={{
            fontSize: 14,
            fontWeight: 800,
            color: "#1f2937",
            whiteSpace: "nowrap",
          }}
        >
          {price}
        </span>
      </div>

      <p
        style={{
          fontSize: 12,
          lineHeight: 1.7,
          color: "#374151",
          marginBottom: 10,
        }}
      >
        {description}
      </p>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "10px 14px",
          borderRadius: 999,
          border: "none",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 0.2,
          textTransform: "uppercase",
          cursor: "pointer",
          textDecoration: "none",
          background: buttonBg,
          color: buttonTextColor,
          boxShadow: "0 18px 40px rgba(15,23,42,0.35)",
        }}
      >
        {buttonLabel}
      </a>
    </div>
  );
}