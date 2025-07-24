import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  businessType: string;
  projectNeeds: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    businessType: '',
    projectNeeds: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const businessTypes = [
    'E-Commerce',
    'Moving Company',
    'SaaS Startup',
    'Creative Studio',
    'Other'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
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
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', businessType: '', projectNeeds: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Thank you for reaching out. I'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something Exceptional
          </h2>
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
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-300 mb-2">
                Business Type
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
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
                {errors.projectNeeds && <p className="text-sm text-red-500">{errors.projectNeeds}</p>}
                <p className="text-sm text-gray-500 ml-auto">
                  {formData.projectNeeds.length}/250
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 disabled:from-gray-900 disabled:to-gray-900 text-white px-8 py-4 rounded-sm transition-all duration-300 border border-gray-700 hover:border-gray-600 disabled:border-gray-800 shadow-2xl hover:shadow-3xl disabled:shadow-xl transform hover:-translate-y-1 disabled:translate-y-0 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;