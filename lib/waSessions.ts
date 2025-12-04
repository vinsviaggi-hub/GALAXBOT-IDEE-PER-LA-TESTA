// lib/waSessions.ts

// Step possibili della prenotazione
export type BookingStep = "idle" | "collecting" | "completed";

// Stato della prenotazione per un numero WhatsApp
export interface BookingState {
  step: BookingStep;
  service?: string | null;
  date?: string | null;      // yyyy-mm-dd
  time?: string | null;      // HH:mm
  name?: string | null;
  phone?: string | null;
  lastCompletedAt?: number | null;
}

// Memoria in RAM per le sessioni WhatsApp
// Va bene per demo e per il bot di test
const sessions = new Map<string, BookingState>();

/**
 * Recupera la sessione per un numero WhatsApp.
 * Se non esiste, ne crea una nuova con step "idle".
 */
export async function getSessionForPhone(
  phone: string
): Promise<BookingState> {
  const key = phone.trim();
  let session = sessions.get(key);

  if (!session) {
    session = {
      step: "idle",
      phone: key,
      service: null,
      date: null,
      time: null,
      name: null,
      lastCompletedAt: null,
    };
    sessions.set(key, session);
  }

  return session;
}

/**
 * Salva/aggiorna la sessione per un numero WhatsApp.
 */
export async function saveSessionForPhone(
  phone: string,
  state: BookingState
): Promise<void> {
  const key = phone.trim();
  sessions.set(key, { ...state, phone: state.phone ?? key });
}