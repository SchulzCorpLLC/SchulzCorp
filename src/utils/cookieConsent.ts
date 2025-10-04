export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const CONSENT_KEY = 'cookieConsent';

export const getCookieConsent = (): CookiePreferences | null => {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch {
    return null;
  }
};

export const setCookieConsent = (preferences: Omit<CookiePreferences, 'timestamp'>): void => {
  const consent: CookiePreferences = {
    ...preferences,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: consent }));
};

export const hasConsent = (category: keyof Omit<CookiePreferences, 'timestamp'>): boolean => {
  const consent = getCookieConsent();
  if (!consent) return false;
  return consent[category] === true;
};

export const clearCookieConsent = (): void => {
  localStorage.removeItem(CONSENT_KEY);
  window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: null }));
};
