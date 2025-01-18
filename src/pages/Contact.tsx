import React from 'react';
import { Mail, MapPin, FileText, ExternalLink } from 'lucide-react';

const Contact = () => {
  const policies = [
    {
      name: "Terms and Conditions",
      url: "https://www.audifytech.com/TermsConditions"
    },
    {
      name: "Game Privacy Policy",
      url: "https://www.audifytech.com/GamePrivacyPolicy"
    },
    {
      name: "Game Terms and Conditions",
      url: "https://www.audifytech.com/GameTermsConditions"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black/75" />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-8">
            Contact Us
          </h1>
          <p className="mt-6 text-xl text-center text-gray-300 max-w-3xl">
            We'd love to hear from you! Reach out to us via email, visit us, or explore our legal policies.
          </p>
        </div>
        {/* 3D Animated Cubes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="cube absolute animate-cube"
            style={{
              width: '60px',
              height: '60px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * -2}s`
            }}
          >
            <div className="cube-face face-front"></div>
            <div className="cube-face face-back"></div>
            <div className="cube-face face-right"></div>
            <div className="cube-face face-left"></div>
            <div className="cube-face face-top"></div>
            <div className="cube-face face-bottom"></div>
          </div>
        ))}
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-12">
            {/* Email Us */}
            <div className="relative group bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative">
                <div className="flex items-center space-x-4 mb-4">
                  <Mail className="w-8 h-8 text-purple-400" />
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Email Us
                  </h2>
                </div>
                <a 
                  href="mailto:hello@audifytech.com"
                  className="text-xl text-purple-400 hover:text-purple-300 transition-colors"
                >
                  hello@audifytech.com
                </a>
              </div>
            </div>

            {/* Visit Us */}
            <div className="relative group bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative">
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="w-8 h-8 text-purple-400" />
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Visit Us
                  </h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Audify, Level 8, Building 3,<br />
                  The Executive Center, Prestige Technostar,<br />
                  Whitefield Main Road,<br />
                  Bangalore - 560066, India
                </p>
              </div>
            </div>

            {/* Legal */}
            <div className="relative group bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative">
                <div className="flex items-center space-x-4 mb-4">
                  <FileText className="w-8 h-8 text-purple-400" />
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Legal
                  </h2>
                </div>
                <div className="space-y-4">
                  {policies.map((policy, index) => (
                    <a
                      key={index}
                      href={policy.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>{policy.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative group h-[600px] bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5891783928527!2d77.7086497!3d12.9740837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1176c6c25ff5%3A0x2461cd938b4f5c0!2sAudify!5e0!3m2!1sen!2sin!4v1646644949693!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(75%) brightness(75%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '7s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;