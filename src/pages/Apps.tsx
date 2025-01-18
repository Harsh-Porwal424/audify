import React from 'react';
import {
  Music,
  Trophy,
  Bus,
  Target,
  Star,
  Download,
  Instagram,
  Youtube,
  Share2,
} from 'lucide-react';

const Apps = () => {
  // Features for each app
  const features = {
    musicPlayer: [
      'Browse songs in 6 different ways',
      'Full widget support',
      'Elegant themes available',
      '5-band equalizer with powerful bass',
      'Share songs on social media',
      'Available in 40+ languages',
      'Ringtone Cutter',
      'Audiobooks support',
      'Support all formats (MP3, WAV, FLAC)',
    ],
    footballWorld: [
      'Real-time multiplayer gameplay',
      'Stunning graphics and animations',
      'Customizable player abilities',
      'Various premium stadiums',
      'Daily & weekly leaderboards',
      'Curved shot mechanics',
      'Unique kit bags and rewards',
      'Global player matchmaking',
    ],
    footballStar: [
      'Ultimate Penalty Shootout Experience',
      'Challenging Levels',
      'Daily Challenges and Rewards',
      'Compete with Friends',
      'Stunning Graphics and Realistic Animations',
      'Easy to Play, Hard to Master',
      'More than 40 levels',
    ],
    busJam: [
      'Challenging traffic jam puzzles',
      'Multiple bus designs',
      'Intuitive controls',
      'Engaging city environments',
      'Offline play support',
    ],
  };

  // Images for each app
  const musicPlayerImages = [
    'https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2F1p1.webp?alt=media&token=39141f68-7fd6-4fcf-bdb5-d3ec3b31ffd8',
    'https://firebasestorage.googleapis.com/v0/b/shikshasamvad-7f230.appspot.com/o/file-upload%2F1p2.webp?alt=media&token=ea4c88e8-eaa6-4a7b-b4b7-3f94a0ec362b',
    'https://play-lh.googleusercontent.com/BkjuoT3VrnZHMGo07BConGOA6_4xXKI4mgq6JykL4bnzET-BvzRIxhUZZk3K5Ub67zc=w1052-h592-rw',
    'https://play-lh.googleusercontent.com/oHs1Z056qd3uzp0MA92Hu8O3wmFSpXS_unnTU0Tmq5601VMPboaG2qRIxSp5M0-Hkw=w1052-h592-rw',
  ];

  const footballWorldImages = [
    'https://play-lh.googleusercontent.com/lf9hreQC2f62sGIGdiJToiJIB0vE9gaNkzpLds3IlHaCS4EfgjGOat4r7vY7qz99zQ=w1052-h592-rw',
    'https://play-lh.googleusercontent.com/i56mKq6OgHwyM87sZyOFU-xOziGIBRvcwTIh7DDxTZcfvNdd7eDzLkYemQuzAAtLy1Y=w1052-h592-rw',
    'https://play-lh.googleusercontent.com/taEVaSbabyg9x-wmQgP7yHnccojZLdnB39a5zev8jW5VqWpQiyHjH2m5QOYKSdQYg2I=w1052-h592-rw',
    'https://play-lh.googleusercontent.com/-NTklBRP58deYOi_Zqjj9WbCyffZfjmc2S4gorbiu2QZdfPQ9iM9_VIH3-o9xDq4iw=w1052-h592-rw',
  ];

  const footballStarImages = [
    'https://play-lh.googleusercontent.com/Jqua4spzz-cKt1NmGy5pQMybEBN3d47vgtuG10aJCu7yQj79Cj9fwswhzCNobOBFiA=w1052-h592-rw',
    'https://play-lh.googleusercontent.com/LY3Z9YbDiAf-1Q1j_r9h0dHL1DocnQy6YAl85sQUEpIphBGuSO3CirjEOVfD9eZIMko=w1052-h592-rw',
    'https://play-lh.googleusercontent.com/6GEJ9FweiUVkgyggs3V0ZKlXIWpK2bxNaa4QIJQ-n1M59CE-GVkw71ORj9m9-nHDEhc=w1052-h592-rw',
    'https://play-lh.googleusercontent.com/bj7DsL8csqqbFJKtvZ5DgUh9SRd1d9PiZpvrmQkst36D1cc5FF-4ZZVs7046yx61j-Q=w1052-h592-rw',
  ];

  const busJamImages = [
    'https://play-lh.googleusercontent.com/qXngSt9J2sRlm4zGC9FhtZEap_YpQVSvcor_iEDn00K37Lwoh7byKhaHpjFvQXrDTiA=w1052-h592-rw',
    'https://play-lh.googleusercontent.com/-hZ6CzS66nLF9QzAo1zCGzZ5qvTfVkfZgHrQ_4X7hXnheTbtL-CYqdaj2DhF_yoiUA=w1052-h592-rw',
    'https://play-lh.googleusercontent.com/j_wkaqmut9GI94gFxnFNQ-tpAy4VoStvRg_Ik0ANtfSEgCnszNoUQbrNXLy8RlcxvA=w1052-h592-rw',
    'https://play-lh.googleusercontent.com/fpT5yERvICu6-dJKk4rzL5mYEndXmNKKWe3vljtLAqPQa_uioOO4t71WHC5wv8Mlm6s=w1052-h592-rw',
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black/75" />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-8">
            Our Apps
          </h1>
          <p className="mt-6 text-xl text-center text-gray-300 max-w-3xl">
            Discover our innovative apps designed to enhance your digital experience.
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
              animationDelay: `${i * -2}s`,
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* ======================= Music Player App ======================= */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* App Info */}
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-gray-900 ring-1 ring-gray-800 rounded-lg p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <Music className="w-12 h-12 text-purple-400" />
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      Music Player - Audify Player
                    </h2>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    A powerful offline music player with an advanced equalizer, bringing your
                    music to life with stunning audio quality and features.
                  </p>
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {features.musicPlayer.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.musicplayer.playermusic&hl=en_IN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white font-semibold transition-all transform hover:scale-105"
                    >
                      <Download className="w-5 h-5" />
                      <span>Get it on Google Play</span>
                    </a>
                    <button className="flex items-center space-x-2 border border-purple-500 hover:border-purple-400 px-6 py-3 rounded-full text-purple-400 hover:text-purple-300 font-semibold transition-all">
                      <Share2 className="w-5 h-5" />
                      <span>Share App</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* App Screenshots */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {musicPlayerImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={image}
                      alt={`Music Player Screenshot ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ======================= Football World App ======================= */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* App Info */}
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-gray-900 ring-1 ring-gray-800 rounded-lg p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <Trophy className="w-12 h-12 text-purple-400" />
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      Football World - Real People
                    </h2>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    Experience the thrill of real-time multiplayer football matches against
                    players worldwide. Customize your team, master curved shots, and climb the
                    global leaderboards!
                  </p>
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {features.footballWorld.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.audify.football"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white font-semibold transition-all transform hover:scale-105"
                    >
                      <Download className="w-5 h-5" />
                      <span>Get it on Google Play</span>
                    </a>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.instagram.com/football_world_game_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 border border-purple-500 hover:border-purple-400 px-4 py-3 rounded-full text-purple-400 hover:text-purple-300 font-semibold transition-all"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UCbF5CymoGICl2ZvMs8OK9_g"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 border border-purple-500 hover:border-purple-400 px-4 py-3 rounded-full text-purple-400 hover:text-purple-300 font-semibold transition-all"
                      >
                        <Youtube className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* App Screenshots */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {footballWorldImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={image}
                      alt={`Football World Screenshot ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ======================= Football Star App ======================= */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* App Info */}
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-gray-900 ring-1 ring-gray-800 rounded-lg p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <Target className="w-12 h-12 text-purple-400" />
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      Football Star - Soccer
                    </h2>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    Step up to the penalty spot and show off your shooting skills in Football
                    Star! Are you ready to become the best penalty shooter in the world and
                    cross more than 50 levels?
                  </p>
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {features.footballStar.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {/* CTA Button */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.football.star"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white font-semibold transition-all transform hover:scale-105"
                    >
                      <Download className="w-5 h-5" />
                      <span>Get it on Google Play</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* App Screenshots */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {footballStarImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={image}
                      alt={`Football Star Screenshot ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ======================= Bus Jam App ======================= */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* App Info */}
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-gray-900 ring-1 ring-gray-800 rounded-lg p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <Bus className="w-12 h-12 text-purple-400" />
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      Bus Jam
                    </h2>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    Get behind the wheel and experience the ultimate traffic puzzle challenge!
                    Guide your bus through congested roads and tricky parking scenarios to become
                    the master of Bus Jam.
                  </p>
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {features.busJam.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {/* CTA Button */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.bus.jam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white font-semibold transition-all transform hover:scale-105"
                    >
                      <Download className="w-5 h-5" />
                      <span>Get it on Google Play</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* App Screenshots */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {busJamImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={image}
                      alt={`Bus Jam Screenshot ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                ))}
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
              animationDuration: '7s',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Apps;
