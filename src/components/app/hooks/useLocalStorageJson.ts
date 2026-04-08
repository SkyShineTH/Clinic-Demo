"use client";

import { useEffect, useState } from "react";

/**
 * Hydrates from localStorage after mount (avoids SSR/client mismatch), then persists writes.
 */
export function useLocalStorageJson<T>(key: string, initial: T) {
  const [state, setState] = useState<T>(initial);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        // Hydrate from disk after first paint — avoids SSR/client mismatch on keys that differ from seed.
        // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional rehydration
        setState(JSON.parse(raw) as T);
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, [key]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {
      /* quota / private mode */
    }
  }, [key, state, hydrated]);

  return [state, setState] as const;
}
