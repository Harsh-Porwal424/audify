import React from 'react';
import { Linkedin, Users, BookOpen } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Ashish Patel",
      image: "https://www.audifytech.com/static/media/person1.c352111f.png",
      linkedin: "https://www.linkedin.com/in/patelashish010/"
    },
    {
      name: "Sudhanshu Gouda",
      image: "https://www.audifytech.com/static/media/person2.e1fcc103.png",
      linkedin: "https://www.linkedin.com/in/sudhanshu-gouda-b1baa555/"
    },
    {
      name: "Himanshu Gouda",
      image: "https://www.audifytech.com/static/media/person3.c38e6bd0.png",
      linkedin: "https://www.linkedin.com/in/himanshu-gouda-49b9aa61/"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black/75" />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-8">
            About Us
          </h1>
          <p className="mt-6 text-xl text-center text-gray-300 max-w-3xl">
            Learn more about our team, mission, and values.
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
              animationDelay: `${i * 0.5}s`
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

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Information */}
          <div className="space-y-12">
            {/* Who We Are */}
            <div className="relative group bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative">
                <div className="flex items-center space-x-4 mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Who We Are
                  </h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We are a very productive team based out of Bengaluru who want to make our products very easy to use.
                  Our vision is to make daily used apps and games experience seamless and long lasting keeping user centricity in mind at a huge scale.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="relative group bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative">
                <div className="flex items-center space-x-4 mb-4">
                  <BookOpen className="w-8 h-8 text-purple-400" />
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Our Mission
                  </h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To create innovative and user-friendly applications that enhance daily experiences and foster long-term engagement.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="space-y-12">
            {/* Our Team */}
            <div className="relative group bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative">
                <div className="flex items-center space-x-4 mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Our Team
                  </h2>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {team.map((member, index) => (
                    <div key={index} className="relative group">
                      {/* Outer glow effect */}
                      <div
                        className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"
                      />
                      {/* Card container */}
                      <div
                        className="relative bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                      >
                        {/* Image section (top 2/3) */}
                        <div className="flex-2 overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Text & link section (bottom 1/3) */}
                        <div className="p-4 flex-1 flex flex-col justify-center">
                          <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                            {member.name}
                          </h3>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                            <span>Connect on LinkedIn</span>
                          </a>
                        </div>
                        {/* Dark overlay that appears on hover (no pointer events) */}
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity pointer-events-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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

export default About;