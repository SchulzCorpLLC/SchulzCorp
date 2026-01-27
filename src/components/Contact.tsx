import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Zap } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  business_type: string;
  projectNeeds: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    business_type: '',
    projectNeeds: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone required';
    } else if (!/^[\d\s\-\(\)\+]+$/.test(formData.phone)) {
      newErrors.phone = 'Valid phone required';
    }

    if (formData.projectNeeds.length > 300) {
      newErrors.projectNeeds = 'Keep under 300 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mzzvrzld", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', business_type: '', projectNeeds: '' });
        }, 4000);
      } else {
        setErrors({ projectNeeds: "Submission failed. Try again." });
      }
    } catch (error) {
      setErrors({ projectNeeds: "Network error. Check connection." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="relative overflow-hidden py-32 bg-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl p-12 shadow-2xl">
              <div className="text-emerald-400 mb-4 flex justify-center">
                <CheckCircle2 className="w-16 h-16" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                We Got Your Message!
              </h3>
              <p className="text-gray-300 text-lg mb-2">
                Thanks for reaching out. I'm reviewing your info right now.
              </p>
              <p className="text-emerald-400 font-medium">
                You'll get a custom quote and strategy within 24 hours.
              </p>
              <p className="text-gray-500 text-sm mt-6">
                Check your email for confirmation from Brandon.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32 bg-black">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-4 block">
              Ready to Win Online?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Your Free Website Strategy
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Tell me about your business. I'll send a custom quote and strategy within 24 hours.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-2xl border border-gray-800 p-8 md:p-12 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-900/50 border ${
                    errors.name ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200`}
                  placeholder="Brandon"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-900/50 border ${
                    errors.email ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200`}
                  placeholder="you@company.com"
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-900/50 border ${
                    errors.phone ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200`}
                  placeholder="(239) 555-1234"
                  autoComplete="tel"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Project Goals */}
              <div>
                <label htmlFor="projectNeeds" className="block text-sm font-medium text-gray-300 mb-2">
                  What are your main goals? (Optional)
                </label>
                <textarea
                  id="projectNeeds"
                  name="projectNeeds"
                  value={formData.projectNeeds}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={300}
                  className={`w-full px-4 py-3 bg-gray-900/50 border ${
                    errors.projectNeeds ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200 resize-none`}
                  placeholder="E.g., Generate leads, sell online, showcase portfolio..."
                />
                <div className="flex justify-between items-center mt-1">
                  <div>
                    {errors.projectNeeds && (
                      <p className="text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.projectNeeds}
                      </p>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">
                    {formData.projectNeeds.length}/300
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 border border-emerald-500/50 shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      Get My Free Quote
                    </>
                  )}
                </button>
              </div>

              {/* Trust Statement */}
              <div className="border-t border-gray-800 pt-6 text-center">
                <p className="text-xs text-gray-500">
                  No spam. No sales pressure. Your info is 100% secure.
                </p>
              </div>
            </form>
          </div>

          {/* Alternative Contact */}
          <div className="mt-12 pt-12 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm mb-4">Prefer to talk now?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:brandon@schulzcorp.com" 
                className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors text-sm"
              >
                brandon@schulzcorp.com
              </a>
              <span className="hidden sm:block text-gray-600">•</span>
              <a 
                href="tel:+12395551234" 
                className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors text-sm"
              >
                (407) 613-0582
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
