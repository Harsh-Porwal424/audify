import React from 'react';
import { ArrowRight } from 'lucide-react';

const Job = () => {
  const jobs = [
    {
      title: 'RECRUITMENT MANAGER',
      experience: '3+ years',
      link: 'https://www.audifytech.com/Jobs'
    },
    {
      title: 'Principal UX Designer (Android/iOS)',
      experience: '5+ years',
      link: 'https://www.audifytech.com/Jobs'
    },
    {
      title: 'Manual Tester - API/Mobile App Testing',
      experience: '2-4 years',
      link: 'https://www.audifytech.com/Jobs'
    },
    {
      title: 'Lead Android Developer',
      experience: '5+ years',
      link: 'https://www.audifytech.com/Jobs'
    },
    {
      title: 'IOS DEVELOPER',
      experience: '2-4 years',
      link: 'https://www.audifytech.com/Jobs'
    },
    {
      title: 'UX RESEARCHER',
      experience: '2-4 years',
      link: 'https://www.audifytech.com/Jobs'
    },
    {
      title: 'BACKEND DEVELOPER',
      experience: '2-4 years',
      link: 'https://www.audifytech.com/Jobs'
    },
    {
      title: 'ANDROID DEVELOPER',
      experience: '2-4 years',
      link: 'https://www.audifytech.com/Jobs'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        {/* <img
          src="https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2Fimages__1_-removebg-preview.png?alt=media&token=7f26b5fa-8e67-42bd-95d7-e38952417711"
          alt="Job Hero Image"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black/75" />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-8">
        Jobs
          </h1>
          <p className="mt-6 text-xl text-center text-gray-300 max-w-3xl">
            If you have reached this page we assume that you have liked us. We have best minds on our team and want to hire more like you. Apply now.
          </p>
        </div>
        {/* 3D Animated Cubes */}
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

      {/* Job Listings Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Current Openings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="relative group bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                {job.title}
              </h3>
              <p className="text-gray-400 mb-6">{job.experience}</p>
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          ))}
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

export default Job;