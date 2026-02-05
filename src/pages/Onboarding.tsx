import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Rocket, 
  User, 
  Building2, 
  Globe, 
  Star, 
  Settings, 
  Palette, 
  ShieldCheck,
  Clock,
  ArrowRight,
  Upload
} from 'lucide-react';

export default function Onboarding() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    businessEmail: '',
    businessPhone: '',
    cellPhone: '',
    industry: '',
    serviceArea: '',
    websiteUrl: '',
    websiteStatus: '',
    gbpLink: '',
    hasReviews: '',
    automationTiming: 'immediately',
    contactMethod: 'both',
    salesRep: '',
    notifications: 'owner',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Onboarding Data:', formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
        <div className="relative z-10 max-w-md w-full text-center p-8 rounded-3xl bg-gray-900/50 border border-emerald-500/30 backdrop-blur-xl shadow-2xl">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">You're All Set!</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Thank you! Your system is now in setup. Expect a notification within <span className="text-emerald-400 font-semibold">24–48 hours</span>.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-200 pb-20 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            SchulzCorp Systems
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            🎉 You’re In! Let’s Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">System Live</span>
          </h1>
          <p className="text-gray-400 text-lg">Fill this out once. We’ll handle the rest.</p>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              Setup time: 24–48 hours
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Secure Data Encryption
            </div>
          </div>
        </div>

        {/* Onboarding Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Primary Contact, Business Details, Google Reviews, Automation, Branding, Sales Attribution */}
          {/* ...keep all your existing sections here exactly as-is... */}
          {/* Just remove any duplicate `export` or `const Onboarding` */}
        </form>
      </div>
    </div>
  );
}
