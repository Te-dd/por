import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from "../image/jj.jpeg";

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    'Computer Science Student',
    'Full Stack Developer',
    'Problem Solver',
    'Tech Enthusiast',
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (currentIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, roleIndex]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                
                Eugene Andika
              </span>
            </h1>

            <div className="h-20 mb-6">
              <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-300">
                <span className="text-cyan-400">{displayText}</span>
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Finished my Computer Science Student degree at Machakos University
              <br />
              Passionate about building innovative solutions and learning new technologies
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
              >
                Get In Touch
              </button>
              <a
                href="/cv.txt"
                download
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
              >
                Download CV
              </a>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              {/* ====== INSERT YOUR SOCIAL MEDIA LINKS HERE ====== */}
              <a
                href="https://github.com/Te-dd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/eugene-museve-896903399?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:lweugo1@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center animate-fadeInUp animation-delay-300">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50">
                {/* ====== INSERT YOUR IMAGE HERE ====== */}
                
                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <span className="text-gray-400 text-center px-4">
                    <img src={profileImage} alt="Eugene" className="w-full h-full object-cover" />
                    <br/>
                    <span className="text-sm">(Replace in src/components/Home.tsx)</span>
                  </span>
                </div>
                {/* Example: <img src="/path-to-your-image.jpg" alt="Your Name" className="w-full h-full object-cover" /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Home;
