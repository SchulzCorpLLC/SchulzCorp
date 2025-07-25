import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* The container width is now set to max-w-screen-2xl for a consistent, wider layout. */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2025 SchulzCorp. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="mailto:brandon@schulzcorp.com"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">brandon@schulzcorp.com</span>
            </a>
            
            <a
              href="https://x.com/SchulzCorpLLC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
