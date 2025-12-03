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
// Va benissimo per demo e per il tuo bot di test
const sessions = new Map<string, BookingState>();

/**
 * Recupera la sessione per un numero WhatsApp.
 * Se non esiste, ne crea una nuova con step "idle".
 */
export async function getSessionForPhone(
  phone: string
): Promise<BookingState> {
  let session = sessions.get(phone);

  if (!session) {
    session = { step: "idle" };
    sessions.set(phone, session);
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
  sessions.set(phone, state);
}