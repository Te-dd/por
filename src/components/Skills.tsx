import { Code2, Award, TrendingUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const languages = [
    { name: 'HTML', level: 90, color: 'from-orange-500 to-orange-600' },
    { name: 'CSS', level: 85, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', level: 80, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Python', level: 75, color: 'from-green-500 to-green-600' },
    { name: 'Django', level: 70, color: 'from-red-500 to-red-600' },
    { name: 'React', level: 75, color: 'from-cyan-500 to-cyan-600' },
  ];

  const certificates = [
    {
      title: 'Web Development Certification',
      issuer: 'Certification Authority',
      date: '2024',
    },
    {
      title: 'Python Programming',
      issuer: 'Certification Authority',
      date: '2023',
    },
    {
      title: 'Data Structures & Algorithms',
      issuer: 'Certification Authority',
      date: '2023',
    },
    {
      title: 'Cloud Computing Basics',
      issuer: 'Certification Authority',
      date: '2024',
    },
  ];

  const skills = [
    'Git & GitHub',
    'RESTful APIs',
    'Database Management',
    'Responsive Design',
    'Problem Solving',
    'Team Collaboration',
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-16">
          <div className="animate-fadeInUp">
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="text-cyan-400" size={32} />
              <h3 className="text-3xl font-bold text-white">Programming Languages</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* ====== MODIFY YOUR SKILLS AND LEVELS HERE ====== */}
              {languages.map((lang, index) => (
                <div
                  key={lang.name}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-semibold text-lg">{lang.name}</span>
                    <span className="text-cyan-400 font-bold">{lang.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${lang.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: isVisible ? `${lang.level}%` : '0%',
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fadeInUp animation-delay-300">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="text-cyan-400" size={32} />
              <h3 className="text-3xl font-bold text-white">Additional Skills</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* ====== ADD OR MODIFY YOUR ADDITIONAL SKILLS HERE ====== */}
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700 text-center hover:border-cyan-400 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fadeInUp animation-delay-600">
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-cyan-400" size={32} />
              <h3 className="text-3xl font-bold text-white">Certificates & Achievements</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* ====== ADD YOUR CERTIFICATES HERE ====== */}
              {certificates.map((cert, index) => (
                <div
                  key={cert.title}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Award className="text-white" size={24} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{cert.title}</h4>
                  <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-cyan-400 text-sm font-medium">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
