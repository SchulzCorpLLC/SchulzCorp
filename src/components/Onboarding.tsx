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

const Onboarding = () => {
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
    // In a real app, you'd send this to your backend/database
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
            Thank you! Your system is now in setup. Expect a notification within <span className="text-emerald-400 font-semibold">24–48 hours</span> once we are live.
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

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Section 1: Primary Contact */}
          <div className="p-8 rounded-3xl bg-gray-900/40 border border-gray-800 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                <User className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Primary Contact</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                <input required type="text" placeholder="John Doe" className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" 
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Business Name</label>
                <input required type="text" placeholder="Acme Corp" className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" 
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Primary Business Email</label>
                <input required type="email" placeholder="john@business.com" className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" 
                  onChange={(e) => setFormData({...formData, businessEmail: e.target.value})} />
                <p className="text-[10px] text-gray-500 ml-1">Used for system admin & notifications</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Business Phone</label>
                <input required type="tel" placeholder="(555) 000-0000" className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" 
                  onChange={(e) => setFormData({...formData, businessPhone: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Cell Phone (Internal Use)</label>
                <input required type="tel" placeholder="(555) 000-0000" className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" 
                  onChange={(e) => setFormData({...formData, cellPhone: e.target.value})} />
              </div>
            </div>
          </div>

          {/* Section 2: Business Details */}
          <div className="p-8 rounded-3xl bg-gray-900/40 border border-gray-800 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">System Configuration</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Industry Type</label>
                <select className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50" 
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}>
                  <option value="">Select Industry...</option>
                  <option value="Security">Security Company</option>
                  <option value="Moving">Moving Company</option>
                  <option value="Cleaning">Cleaning Services</option>
                  <option value="Landscaping">Landscaping</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Service Area (City/State)</label>
                <input type="text" placeholder="e.g. Naples, FL" className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50" 
                  onChange={(e) => setFormData({...formData, serviceArea: e.target.value})} />
              </div>
              <div className="md:col-span-2 space-y-4 pt-4 border-t border-gray-800">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Current Website URL</label>
                  <input type="url" placeholder="https://..." className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50" 
                    onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})} />
                </div>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="webStatus" className="accent-emerald-500" onChange={() => setFormData({...formData, websiteStatus: 'none'})} />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">I do not have a website</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="webStatus" className="accent-emerald-500" onChange={() => setFormData({...formData, websiteStatus: 'replace'})} />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">My website needs replacement</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Google Reviews */}
          <div className="p-8 rounded-3xl bg-gray-900/40 border border-gray-800 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Google Reviews (Critical)</h3>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Google Business Profile Link</label>
                <input required type="url" placeholder="Direct link to your GBP" className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50" 
                  onChange={(e) => setFormData({...formData, gbpLink: e.target.value})} />
              </div>
              <div className="flex gap-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="hasReviews" className="accent-emerald-500" onChange={() => setFormData({...formData, hasReviews: 'yes'})} />
                  <span className="text-sm text-gray-400">I have existing reviews</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="hasReviews" className="accent-emerald-500" onChange={() => setFormData({...formData, hasReviews: 'no'})} />
                  <span className="text-sm text-gray-400">I need GBP setup help</span>
                </label>
              </div>
            </div>
          </div>

          {/* Section 4: Automation */}
          <div className="p-8 rounded-3xl bg-gray-900/40 border border-gray-800 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Automation Preferences</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-sm font-medium text-gray-400 ml-1">Send Review Requests...</label>
                <div className="space-y-3">
                  {['Immediately after service', 'Same day', 'Next day'].map((opt) => (
                    <label key={opt} className="flex items-center gap-3 p-3 rounded-xl bg-black/30 border border-gray-800 cursor-pointer hover:border-emerald-500/30 transition-all">
                      <input type="radio" name="timing" className="accent-emerald-500" onChange={() => setFormData({...formData, automationTiming: opt})} />
                      <span className="text-sm text-gray-300">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-medium text-gray-400 ml-1">Preferred Contact Method</label>
                <div className="space-y-3">
                  {['SMS', 'Email', 'Both (Recommended)'].map((opt) => (
                    <label key={opt} className="flex items-center gap-3 p-3 rounded-xl bg-black/30 border border-gray-800 cursor-pointer hover:border-emerald-500/30 transition-all">
                      <input type="radio" name="method" className="accent-emerald-500" onChange={() => setFormData({...formData, contactMethod: opt})} />
                      <span className="text-sm text-gray-300">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Branding */}
          <div className="p-8 rounded-3xl bg-gray-900/40 border border-gray-800 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Branding (Optional)</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <div className="border-2 border-dashed border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-emerald-500/40 transition-all cursor-pointer bg-black/20">
                  <Upload className="w-8 h-8 text-gray-600 mb-2" />
                  <p className="text-sm text-gray-400">Upload Business Logo</p>
                  <p className="text-[10px] text-gray-600 mt-1">PNG, JPG or SVG preferred</p>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Primary Brand Color</label>
                <input type="text" placeholder="Hex code or description" className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50" />
              </div>
              <div className="flex items-end pb-3 text-[10px] text-gray-600">
                If skipped, we use our clean SchulzCorp signature theme.
              </div>
            </div>
          </div>

          {/* Section 6: Sales Attribution */}
          <div className="p-8 rounded-3xl bg-gray-900/40 border border-gray-800 backdrop-blur-sm shadow-xl border-l-4 border-l-emerald-500/50">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-xl font-bold text-white">Sales Attribution</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Assigned Sales Representative</label>
                <select className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50" 
                  onChange={(e) => setFormData({...formData, salesRep: e.target.value})}>
                  <option value="">Select Rep...</option>
                  <option value="Admin">Admin Sale (SchulzCorp)</option>
                  <option value="Rep1">Rep 01</option>
                  <option value="Rep2">Rep 02</option>
                  <option value="Rep3">Rep 03</option>
                </select>
              </div>
            </div>
          </div>

          {/* Final Consent & Submit */}
          <div className="p-8 space-y-8">
            <label className="flex items-start gap-4 cursor-pointer group">
              <input required type="checkbox" className="mt-1 w-5 h-5 accent-emerald-500 rounded border-gray-700 bg-black" 
                onChange={(e) => setFormData({...formData, consent: e.target.checked})} />
              <span className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                I confirm all information is accurate and authorize <span className="text-emerald-400 font-semibold">SchulzCorp Systems</span> to deploy my automation and review system.
              </span>
            </label>

            <button 
              type="submit"
              className="w-full group relative flex items-center justify-center gap-3 py-6 bg-emerald-500 hover:bg-emerald-400 text-black text-xl font-black rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] shadow-xl"
            >
              🚀 LAUNCH MY SYSTEM
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

const App = Onboarding;
export default App;