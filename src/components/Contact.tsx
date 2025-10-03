import React, { useState } from 'react';

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

  const businessTypes = [
    'Construction / Trades',
    'E-commerce / Online Store',
    'Education / Coaching / Online Courses',
    'Financial Services / Insurance',
    'Healthcare or Wellness Practice',
    'Logistics / Transportation / Moving Companies',
    'Nonprofit / Community Organization',
    'Other / Not Listed (Please Describe)',
    'Professional Services',
    'Real Estate or Property Management',
    'Restaurant / Food Services',
    'Tech / SaaS Startup'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\(\)\+]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.projectNeeds.length > 250) {
      newErrors.projectNeeds = 'Project needs must be 250 characters or less';
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
        }, 3000);
      } else {
        setErrors({ projectNeeds: "Submission failed. Please try again." });
      }
    } catch (error) {
      setErrors({ projectNeeds: "A network error occurred. Please check your connection." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="relative overflow-hidden py-20 bg-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>
        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-12 shadow-2xl border border-gray-700">
              <div className="text-green-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-400">
                Thank you for reaching out. I'll get back to you within 24 hours with your free quote.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 bg-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>
      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your Free Website Quote Today
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Tell me about your business and I'll provide a custom quote within 24 hours. Serving Estero, Naples, and all of Southwest Florida.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-900 border ${
                  errors.name ? 'border-red-500' : 'border-gray-700'
                } rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors duration-200`}
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

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
                className={`w-full px-4 py-3 bg-gray-900 border ${
                  errors.email ? 'border-red-500' : 'border-gray-700'
                } rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors duration-200`}
                placeholder="your.email@company.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

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
                className={`w-full px-4 py-3 bg-gray-900 border ${
                  errors.phone ? 'border-red-500' : 'border-gray-700'
                } rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors duration-200`}
                placeholder="(239) 555-1234"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="business_type" className="block text-sm font-medium text-gray-300 mb-2">Business Type</label>
              <select
                id="business_type"
                name="business_type"
                value={formData.business_type}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-sm text-white focus:outline-none focus:border-gray-500 transition-colors duration-200"
              >
                <option value="">Select your business type</option>
                {businessTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="projectNeeds" className="block text-sm font-medium text-gray-300 mb-2">
                Project Needs
              </label>
              <textarea
                id="projectNeeds"
                name="projectNeeds"
                value={formData.projectNeeds}
                onChange={handleInputChange}
                rows={4}
                maxLength={250}
                className={`w-full px-4 py-3 bg-gray-900 border ${
                  errors.projectNeeds ? 'border-red-500' : 'border-gray-700'
                } rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors duration-200 resize-vertical`}
                placeholder="Tell me about your project requirements..."
              />
              <div className="flex justify-between items-center mt-1">
                {errors.projectNeeds && <p className="mt-1 text-sm text-red-500">{errors.projectNeeds}</p>}
                <p className="text-sm text-gray-500 ml-auto">
                  {formData.projectNeeds.length}/250
                </p>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-bold px-8 py-4 rounded-sm transition-all duration-300 border border-transparent hover:bg-gray-200 disabled:bg-gray-500 disabled:cursor-not-allowed shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 disabled:translate-y-0"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Get My Free Quote'
                )}
              </button>
              <p className="text-xs text-gray-500 mt-4">
                No spam. Your information is 100% confidential and secured.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
