import { useCallback, useState } from 'react';

const STORAGE_KEY = 'oldayclass_bookings';

function readBookings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeBookings(bookings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}

/**
 * useBookings 훅
 *
 * localStorage에 저장된 예약 내역을 읽고, 추가·취소할 수 있는 훅입니다.
 *
 * Example usage:
 * const { bookings, addBooking, cancelBooking } = useBookings();
 */
export function useBookings() {
  const [bookings, setBookings] = useState(readBookings);

  const addBooking = useCallback((booking) => {
    setBookings((prev) => {
      const next = [
        ...prev,
        { id: crypto.randomUUID(), bookedAt: new Date().toISOString(), ...booking },
      ];
      writeBookings(next);
      return next;
    });
  }, []);

  const cancelBooking = useCallback((id) => {
    setBookings((prev) => {
      const next = prev.filter((booking) => booking.id !== id);
      writeBookings(next);
      return next;
    });
  }, []);

  return { bookings, addBooking, cancelBooking };
}
