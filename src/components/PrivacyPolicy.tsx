import React, { useState } from 'react';
import { X, Shield, Eye, Lock, Mail, Calendar } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm">
      <div className="min-h-screen px-4 py-8 flex items-start justify-center">
        <div className="relative w-full max-w-4xl bg-gray-900 border border-gray-700 rounded-lg shadow-2xl my-8">
          <div className="sticky top-0 z-10 bg-gray-900 border-b border-gray-700 px-6 py-4 flex items-center justify-between rounded-t-lg">
            <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close privacy policy"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="px-6 py-8 text-gray-300 space-y-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <p className="text-sm text-gray-400 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-400" />
                Introduction
              </h3>
              <p className="text-gray-300 leading-relaxed">
                SchulzCorp ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website
                and use our services. Based in Estero, Florida, we serve clients throughout Southwest Florida
                including Naples, Fort Myers, and surrounding areas.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Eye className="w-6 h-6 text-blue-400" />
                Information We Collect
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Personal Information</h4>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    When you contact us through our website, we collect:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                    <li>Your name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Business type</li>
                    <li>Project requirements and inquiries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Automatically Collected Information</h4>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    When you visit our website, we may automatically collect:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Click patterns and website navigation paths</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Cookie className="w-6 h-6 text-blue-400" />
                How We Use Cookies
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website.
                You can control cookie preferences at any time.
              </p>
              <div className="mt-4 space-y-3">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Necessary Cookies</h4>
                  <p className="text-sm text-gray-400">
                    Essential for website functionality. These cannot be disabled.
                  </p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-gray-400">
                    Help us understand visitor behavior and improve our website.
                  </p>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Marketing Cookies</h4>
                  <p className="text-sm text-gray-400">
                    Used to deliver relevant advertisements and track campaign effectiveness.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Lock className="w-6 h-6 text-blue-400" />
                How We Use Your Information
              </h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                <li>Respond to your inquiries and provide quotes</li>
                <li>Deliver our web design and development services</li>
                <li>Improve our website and user experience</li>
                <li>Send service-related communications</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Information Sharing</h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                We do not sell, trade, or rent your personal information to third parties. We may share your
                information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                <li>With service providers who assist in our operations (e.g., email services, hosting)</li>
                <li>When required by law or to protect our rights</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Data Security</h3>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. However, no method
                of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Your Rights</h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">California Privacy Rights</h3>
              <p className="text-gray-300 leading-relaxed">
                If you are a California resident, you have additional rights under the California Consumer Privacy
                Act (CCPA), including the right to know what personal information we collect, the right to delete
                your information, and the right to opt-out of the sale of your information. We do not sell personal
                information.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Children's Privacy</h3>
              <p className="text-gray-300 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect
                personal information from children. If you believe we have collected information from a child,
                please contact us immediately.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Changes to This Policy</h3>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Mail className="w-6 h-6 text-blue-400" />
                Contact Us
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 space-y-2">
                <p className="text-white font-medium">SchulzCorp</p>
                <p className="text-gray-400">Estero, Florida</p>
                <p className="text-gray-400">Southwest Florida</p>
                <p className="text-gray-400">Use our contact form on the website</p>
              </div>
            </section>
          </div>

          <div className="sticky bottom-0 bg-gray-900 border-t border-gray-700 px-6 py-4 rounded-b-lg">
            <button
              onClick={onClose}
              className="w-full px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
