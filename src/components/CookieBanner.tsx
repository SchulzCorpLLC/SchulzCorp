import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, BarChart3, Target } from 'lucide-react';
import { getCookieConsent, setCookieConsent, CookiePreferences } from '../utils/cookieConsent';
import { loadBlockedScripts } from '../utils/scriptBlocker';

interface CookieBannerProps {
  onClose?: () => void;
  forceShow?: boolean;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onClose, forceShow = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent || forceShow) {
      setIsVisible(true);
    }
  }, [forceShow]);

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setCookieConsent(newPreferences);
    loadBlockedScripts('analytics');
    loadBlockedScripts('marketing');
    setIsVisible(false);
    onClose?.();
  };

  const handleRejectAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setCookieConsent(newPreferences);
    setIsVisible(false);
    onClose?.();
  };

  const handleSavePreferences = () => {
    setCookieConsent(preferences);
    if (preferences.analytics) {
      loadBlockedScripts('analytics');
    }
    if (preferences.marketing) {
      loadBlockedScripts('marketing');
    }
    setIsVisible(false);
    onClose?.();
  };

  const handlePreferenceChange = (key: keyof Omit<CookiePreferences, 'timestamp'>) => {
    if (key === 'necessary') return;
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div className="w-full max-w-4xl bg-gray-900 border border-gray-700 rounded-lg shadow-2xl pointer-events-auto animate-slide-up">
        {!showPreferences ? (
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Cookie className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  We Value Your Privacy
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  We use cookies to enhance your browsing experience and analyze our traffic.
                  Necessary cookies are always enabled. You can choose to enable analytics and marketing cookies
                  to help us improve our services. By clicking "Accept All", you consent to our use of cookies.
                  Read our{' '}
                  <a href="#privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
                    Privacy Policy
                  </a>
                  {' '}to learn more.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors duration-200"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="px-6 py-2.5 bg-transparent hover:bg-gray-800 text-white border border-gray-600 rounded-lg font-medium transition-colors duration-200"
                  >
                    Customize
                  </button>
                </div>
              </div>
              <button
                onClick={handleRejectAll}
                className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
                aria-label="Close banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Cookie Preferences</h3>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Back to summary"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start justify-between p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    <h4 className="text-white font-medium">Necessary Cookies</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Essential for the website to function properly. These cookies enable core functionality
                    such as security, network management, and accessibility. They cannot be disabled as the
                    website would not work without them.
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end px-1 cursor-not-allowed opacity-50">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-center">Always On</p>
                </div>
              </div>

              <div className="flex items-start justify-between p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    <h4 className="text-white font-medium">Analytics Cookies</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Help us understand how visitors interact with our website by collecting and reporting
                    information anonymously. This helps us improve our website and services. We do not use
                    this information to identify individual users.
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <button
                    onClick={() => handlePreferenceChange('analytics')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.analytics ? 'bg-blue-600 justify-end' : 'bg-gray-600 justify-start'
                    } px-1`}
                    aria-label="Toggle analytics cookies"
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>

              <div className="flex items-start justify-between p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-orange-400" />
                    <h4 className="text-white font-medium">Marketing Cookies</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Used to track visitors across websites. These cookies may be set through our site by
                    advertising partners to build a profile of your interests and show you relevant ads on
                    other sites. If disabled, you may see less relevant advertising.
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <button
                    onClick={() => handlePreferenceChange('marketing')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.marketing ? 'bg-blue-600 justify-end' : 'bg-gray-600 justify-start'
                    } px-1`}
                    aria-label="Toggle marketing cookies"
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-700">
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Save Preferences
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Accept All
              </button>
              <button
                onClick={handleRejectAll}
                className="px-6 py-2.5 bg-transparent hover:bg-gray-800 text-white border border-gray-600 rounded-lg font-medium transition-colors duration-200"
              >
                Reject All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
