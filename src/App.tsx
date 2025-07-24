import React, { useState } from 'react';
import { 
  Code2, 
  BarChart3, 
  Repeat, 
  Mail, 
  Twitter, 
  Linkedin, 
  Github,
  Check,
  Star,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="text-center max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 mb-8 leading-tight">
            Future-Proof <br />
            <span className="text-blue-600">Digital Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            SchulzCorp crafts high-tech websites, custom dashboards, and subscription SaaS tools 
            for forward-thinking businesses.
          </p>
          <button className="group bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Tell Me About Your Project
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </section>

      {/* SECTION 2: SERVICES SNAPSHOT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-serif font-bold text-center text-slate-900 mb-20">
            What I Do
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-50 transition-colors">
                <Code2 className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">High-Tech Websites</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Modern, fast, mobile-first design built to convert visitors into customers.
              </p>
            </div>
            
            <div className="group text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-50 transition-colors">
                <BarChart3 className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Custom Dashboards</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Analytics & operations portals built for your exact workflow and business needs.
              </p>
            </div>
            
            <div className="group text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-50 transition-colors">
                <Repeat className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">SaaS Subscriptions</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Recurring revenue engines that scale with your business and customer base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PORTFOLIO PREVIEW */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-serif font-bold text-center text-slate-900 mb-20">
            Selected Work
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <ExternalLink size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Local Roofing Co.</h3>
                  <p className="text-slate-600 text-lg">+87% lead conversion in 30 days</p>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 bg-gradient-to-br from-green-500 to-teal-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <ExternalLink size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Tech Startup Dashboard</h3>
                  <p className="text-slate-600 text-lg">Custom analytics platform for growth</p>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 bg-gradient-to-br from-orange-500 to-red-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <ExternalLink size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">E-commerce Platform</h3>
                  <p className="text-slate-600 text-lg">300% increase in online revenue</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg">
              See Full Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROJECT INTAKE */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-slate-900 mb-6">
              Let's Discover What You Need
            </h2>
            <p className="text-xl text-slate-600">
              Tell me about your vision, and I'll craft a solution that exceeds expectations.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full px-6 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:border-blue-600 focus:outline-none transition-colors"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full px-6 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:border-blue-600 focus:outline-none transition-colors"
                required
              />
            </div>
            
            <div>
              <textarea
                name="project"
                placeholder="Tell me about your project..."
                value={formData.project}
                onChange={handleFormChange}
                rows={6}
                className="w-full px-6 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:border-blue-600 focus:outline-none transition-colors resize-none"
                required
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Submit Project Brief
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-serif font-bold text-center text-slate-900 mb-20">
            Client Words
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <blockquote className="text-2xl font-serif italic text-slate-800 mb-6 leading-relaxed">
                "Brandon understood our business better than we did. Our site went from 1999 to 2099 in a week."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mr-4"></div>
                <div>
                  <p className="font-bold text-slate-900">Sarah G.</p>
                  <p className="text-slate-600">CEO of Local Spa</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <blockquote className="text-2xl font-serif italic text-slate-800 mb-6 leading-relaxed">
                "The custom dashboard transformed how we operate. Data-driven decisions are now effortless."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mr-4"></div>
                <div>
                  <p className="font-bold text-slate-900">Michael R.</p>
                  <p className="text-slate-600">CTO of TechFlow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SAAS PRICING */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-serif font-bold text-center text-slate-900 mb-20">
            Monthly Plans
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">$99</span>
                <span className="text-slate-600">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <Check className="text-green-500 mr-3" size={20} />
                  1 Web Page
                </li>
                <li className="flex items-center text-slate-700">
                  <Check className="text-green-500 mr-3" size={20} />
                  Hosting Included
                </li>
                <li className="flex items-center text-slate-700">
                  <Check className="text-green-500 mr-3" size={20} />
                  Email Support
                </li>
              </ul>
              <button className="w-full bg-slate-200 hover:bg-slate-300 text-slate-900 py-3 rounded-full font-semibold transition-colors">
                Request Setup
              </button>
            </div>
            
            <div className="bg-blue-600 p-8 rounded-2xl relative overflow-hidden transform scale-105">
              <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$299</span>
                <span className="text-blue-200">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <Check className="text-green-400 mr-3" size={20} />
                  5 Web Pages
                </li>
                <li className="flex items-center text-white">
                  <Check className="text-green-400 mr-3" size={20} />
                  Custom Dashboard
                </li>
                <li className="flex items-center text-white">
                  <Check className="text-green-400 mr-3" size={20} />
                  Priority Support
                </li>
                <li className="flex items-center text-white">
                  <Check className="text-green-400 mr-3" size={20} />
                  Analytics Integration
                </li>
              </ul>
              <button className="w-full bg-white hover:bg-slate-100 text-blue-600 py-3 rounded-full font-semibold transition-colors">
                Request Setup
              </button>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">$599</span>
                <span className="text-slate-600">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <Check className="text-green-500 mr-3" size={20} />
                  Unlimited Pages
                </li>
                <li className="flex items-center text-slate-700">
                  <Check className="text-green-500 mr-3" size={20} />
                  Full SaaS Platform
                </li>
                <li className="flex items-center text-slate-700">
                  <Check className="text-green-500 mr-3" size={20} />
                  24/7 Support
                </li>
                <li className="flex items-center text-slate-700">
                  <Check className="text-green-500 mr-3" size={20} />
                  Custom Integrations
                </li>
              </ul>
              <button className="w-full bg-slate-200 hover:bg-slate-300 text-slate-900 py-3 rounded-full font-semibold transition-colors">
                Request Setup
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: ABOUT */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-80 h-80 bg-gradient-to-br from-slate-300 to-slate-500 rounded-3xl mx-auto"></div>
            </div>
            <div>
              <h2 className="text-5xl font-serif font-bold text-slate-900 mb-8">
                About SchulzCorp
              </h2>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                Hi, I'm Brandon. SchulzCorp is my boutique studio where I create high-tech, 
                high-performance web systems for businesses ready to scale. I believe local 
                companies deserve Silicon Valley power with Main Street care.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                If you're serious about growth, I can help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CONTACT + FOOTER */}
      <footer className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">Let's Connect</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-4" size={24} />
                  <span className="text-xl">Brandon@schulzcorp.com</span>
                </div>
                <div className="flex items-center space-x-6 mt-6">
                  <Twitter className="hover:text-blue-400 cursor-pointer transition-colors" size={24} />
                  <Linkedin className="hover:text-blue-400 cursor-pointer transition-colors" size={24} />
                  <Github className="hover:text-blue-400 cursor-pointer transition-colors" size={24} />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Portfolio</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Services</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Pricing</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400">© 2025 SchulzCorp. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;