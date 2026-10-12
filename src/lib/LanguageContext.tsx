'use client';

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { translations, Lang } from './translations';

// Use a loose type so both EN and ID shape can be assigned
type AnyTranslation = (typeof translations)[Lang];

interface LanguageContextValue {
  lang: Lang;
  t: AnyTranslation;
  setLang: (lang: Lang) => void;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'id',
  t: translations.id,
  setLang: () => {},
  isTransitioning: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start with 'id' on BOTH server and initial client render
  // to prevent SSR/client mismatch. We then read localStorage in useEffect
  // after mount, which is client-only.
  const [lang, setLangState] = useState<Lang>('id');
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // After mount: read persisted language from localStorage
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('rh-lang') as Lang | null;
    if (stored === 'en' || stored === 'id') {
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback(
    (newLang: Lang) => {
      if (newLang === lang) return;
      setIsTransitioning(true);
      // Phase 1: fade-in overlay (blur)
      if (overlayRef.current) {
        overlayRef.current.style.opacity = '1';
        overlayRef.current.style.pointerEvents = 'all';
      }
      setTimeout(() => {
        setLangState(newLang);
        localStorage.setItem('rh-lang', newLang);
        // Phase 2: fade overlay back out
        setTimeout(() => {
          if (overlayRef.current) {
            overlayRef.current.style.opacity = '0';
            overlayRef.current.style.pointerEvents = 'none';
          }
          setTimeout(() => setIsTransitioning(false), 300);
        }, 120);
      }, 250);
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang, isTransitioning }}>
      {/* Full-page transition overlay — blurs & dims during language switch */}
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly, Bitdefender)
          inject extra attributes (bis_skin_checked, etc.) on the client only */}
      <div
        ref={overlayRef}
        suppressHydrationWarning
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(122, 28, 28, 0.06)',
          backdropFilter: 'blur(3px)',
          opacity: 0,
          pointerEvents: 'none',
          transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        aria-hidden="true"
      />
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
