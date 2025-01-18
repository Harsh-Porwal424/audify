import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import {
  Menu,
  X,
  ChevronRight,
  GamepadIcon,
  Users,
  Brain,
  Briefcase,
  MessageCircle,
  HelpCircle,
  Music,
  Trophy,
  Bus,
  Target
} from 'lucide-react';
import Apps from './pages/Apps';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Job from './pages/Jobs';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'OUR APPS', icon: GamepadIcon, path: '/apps' },
    { name: 'ABOUT US', icon: Users, path: '/about' },
    { name: 'JOBS', icon: Briefcase, path: '/jobs' },
    { name: 'CONTACT US', icon: MessageCircle, path: '/contact' },
    { name: 'HELP & FAQ', icon: HelpCircle, path: '/help' }
  ];

  const apps = [
    {
      title: "Music Player - Audify Player",
      description: "A simple Offline Music Player with a powerful equalizer packed with all the features better than any other music player available for your Android devices.",
      icon: Music,
      image: "https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2Fm1.webp?alt=media&token=8fe7dd5f-0e3c-4fcc-ae36-0675a838a677"
    },
    {
      title: "Football World - Real People",
      description: "Football World is a fun and addictive game that lets you play against other real players worldwide. Choose from a variety of tiers and stadiums, and customize your players with different skills and abilities.",
      icon: Trophy,
      image: "https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2Fm2.webp?alt=media&token=53eb5a78-bdd1-4848-af4e-3c496bbad37e"
    },
    {
      title: "Bus Jam",
      description: "Welcome to Bus Jam, the ultimate traffic puzzle game where you sort passengers by color, clear traffic jams, and send everyone on their dream vacation!",
      icon: Bus,
      image: "https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2Fm3.webp?alt=media&token=059ef05d-0609-4583-b8f2-d2d672354880"
    },
    {
      title: "Football Star: Soccer",
      description: "Step up to the penalty spot and show off your shooting skills in Football Star! Are you ready to take on the challenge and become the best penalty shooter in the world?",
      icon: Target,
      image: "https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2Fm4.webp?alt=media&token=0f3234f5-0c67-4f00-b451-e17f0094bc77"
    }
  ];

  const Navigation = () => (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2Faudify_tech_private_limited_logo__1_-removebg-preview.png?alt=media&token=ebc5ddc0-094e-46da-8ff5-dffe7c5daddd"
                alt="Audify Tech Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="ml-2 text-xl font-bold text-white">Audify Tech</span>
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center space-x-2 text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon && <item.icon className="h-5 w-5" />}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const Home = () => (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="cube absolute animate-spin-slow"
              style={{
                width: '100px',
                height: '100px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * -1}s`
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-gray-900"></div>
        <div className="relative min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-7">
                <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                  <span className="block">Revolutionizing Gaming</span>
                  <span className="block text-purple-400">with AI-Powered Experiences</span>
                </h1>
                <p className="mt-6 text-xl text-gray-300 max-w-3xl">
                  At Audify Tech, we believe in creating more than just games. We craft immersive experiences that bring joy, spark creativity, and connect people across the globe through the power of Artificial Intelligence.
                </p>
                <div className="mt-10 flex items-center space-x-6">
                  <Link
                    to="/apps"
                    className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-lg font-semibold flex items-center space-x-2 transition-all transform hover:scale-105"
                  >
                    <span>Explore Our Games</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white px-8 py-3 rounded-full text-lg font-semibold border-2 border-gray-700 hover:border-purple-500 transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-5">
                <div className="relative transform hover:scale-105 transition-all duration-300 animate-float">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative flex items-center justify-center">
                    <Brain className="w-64 h-64 text-purple-400 animate-pulse-slow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16">Our Featured Apps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apps.map((app, index) => (
                <Link
                  key={index}
                  to="/apps"
                  className="group relative bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/50 group-hover:from-transparent group-hover:to-purple-900/70 transition-all duration-300"></div>
                  <img src={app.image} alt={app.title} className="w-full h-48 object-cover" />
                  <div className="p-6 relative">
                    <div className="flex items-center space-x-2 mb-2">
                      <app.icon className="w-5 h-5 text-purple-400" />
                      <h3 className="font-bold text-lg">{app.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm line-clamp-2">{app.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <span>&copy; {new Date().getFullYear()} Audify Tech. All rights reserved.</span>
          <div className="flex space-x-4">
            <Link to="/about" className="hover:text-purple-400">About Us</Link>
            <Link to="/contact" className="hover:text-purple-400">Contact</Link>
            <Link to="/help" className="hover:text-purple-400">Help</Link>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Job />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;