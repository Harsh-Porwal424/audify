import React, { useState } from 'react';
import { HelpCircle, Search, Music, Trophy, ChevronDown, ChevronUp, Mail } from 'lucide-react';

const Help = () => {
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const apps = [
    {
      name: 'Music Player',
      icon: Music,
      faqs: [
        {
          question: 'How do I create a playlist?',
          answer: 'To create a playlist, go to the Library tab, tap on "Playlists", then tap the "+" button. Give your playlist a name and start adding songs.'
        },
        {
          question: 'How do I use the equalizer?',
          answer: 'Open the app settings, tap on "Equalizer", and choose from preset options or customize the 5-band equalizer to your preference.'
        },
        {
          question: 'Can I use the app offline?',
          answer: 'Yes! Our Music Player is designed to work completely offline. All your local music files can be played without an internet connection.'
        }
      ]
    },
    {
      name: 'Football World',
      icon: Trophy,
      faqs: [
        {
          question: 'How do I perform a curved shot?',
          answer: 'To perform a curved shot, swipe your finger in an arc motion when shooting. The more curved your swipe, the more the ball will curve.'
        },
        {
          question: 'How does the ranking system work?',
          answer: 'Players are ranked based on their performance in matches. Win matches to earn points and climb the global leaderboard.'
        },
        {
          question: 'How can I customize my player?',
          answer: 'Go to the Player menu, select "Customize", and you can modify various attributes including skills, appearance, and equipment.'
        }
      ]
    }
  ];

  const filteredFaqs = apps.flatMap(app => 
    app.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ).map(faq => ({ ...faq, appName: app.name }))
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        {/* 3D Animated Background */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="cube absolute"
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2FScreenshot_2025-01-18_at_6.45.43_PM-removebg-preview.png?alt=media&token=7ae7cb55-862c-408e-9cf4-f278d44fb767"
                alt="FAQ Hero"
                className="w-48 h-48 object-contain animate-float"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-8">
              Help & FAQ
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              If you have reached this page we assume that you need help from us. Choose the app for which you need help and search for any query or simply browse the list of frequently asked questions (FAQs) for the answers you are looking for.
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
          <div className="relative flex items-center bg-gray-800 rounded-full overflow-hidden">
            <Search className="w-6 h-6 text-gray-400 ml-4" />
            <input
              type="text"
              placeholder="Search your question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {searchQuery ? (
          // Search Results
          <div className="space-y-6">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-gray-800 p-6 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-sm text-purple-400">{faq.appName}</span>
                      <h3 className="text-lg font-semibold mt-1">{faq.question}</h3>
                      <p className="text-gray-300 mt-2">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // App Categories
          <div className="space-y-6">
            {apps.map((app, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-gray-800 rounded-lg">
                  <button
                    onClick={() => setSelectedApp(selectedApp === app.name ? null : app.name)}
                    className="w-full p-6 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4">
                      <app.icon className="w-8 h-8 text-purple-400" />
                      <h2 className="text-xl font-bold">{app.name}</h2>
                    </div>
                    {selectedApp === app.name ? (
                      <ChevronUp className="w-6 h-6 text-purple-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-purple-400" />
                    )}
                  </button>
                  
                  {selectedApp === app.name && (
                    <div className="px-6 pb-6 space-y-4">
                      {app.faqs.map((faq, faqIndex) => (
                        <div key={faqIndex} className="border-t border-gray-700 pt-4">
                          <h3 className="text-lg font-semibold">{faq.question}</h3>
                          <p className="text-gray-300 mt-2">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <a
              href="mailto:help@audify.com"
              className="relative flex items-center space-x-2 bg-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Support</span>
            </a>
          </div>
          <p className="mt-4 text-gray-300">
            Can't find what you're looking for? Email us at{' '}
            <a href="mailto:help@audify.com" className="text-purple-400 hover:text-purple-300">
              help@audify.com
            </a>
          </p>
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

export default Help;