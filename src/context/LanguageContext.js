'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import translations, { translate as translateFn } from '@/i18n/translations';

// Context shape:
// { lang: 'id' | 'en', setLanguage: (l) => void, toggleLanguage: () => void, t: (key, vars?) => string }
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('id');

  // Initialize from localStorage or browser language
  useEffect(() => {
    try {
      const saved = typeof window !== 'undefined' ? window.localStorage.getItem('lang') : null;
      if (saved === 'id' || saved === 'en') {
        setLang(saved);
        return;
      }
      const browser = typeof navigator !== 'undefined' ? navigator.language || navigator.userLanguage : 'id';
      setLang(browser?.toLowerCase().startsWith('en') ? 'en' : 'id');
    } catch {
      setLang('id');
    }
  }, []);

  // Persist + set <html lang="..">
  useEffect(() => {
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('lang', lang);
      }
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('lang', lang);
      }
    } catch {
      // ignore
    }
  }, [lang]);

  const setLanguage = (newLang) => {
    if (newLang === 'id' || newLang === 'en') setLang(newLang);
  };
  const toggleLanguage = () => setLang((l) => (l === 'id' ? 'en' : 'id'));

  const t = useMemo(() => {
    return (key, vars) => translateFn(translations, lang, key, vars);
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLanguage, toggleLanguage, t }),
    [lang, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}

export default LanguageContext;