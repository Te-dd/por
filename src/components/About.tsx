import { User, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInLeft">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <User className="text-cyan-400" size={32} />
                  <h3 className="text-2xl font-bold text-white">Who I Am</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {/* ====== INSERT YOUR BIOGRAPHY HERE ====== */}
                  I'm a passionate finished  Computer Science student at Machakos University with a strong
                  foundation in software development and problem-solving. Throughout my academic journey,
                  I've developed a keen interest in full-stack web development and software engineering.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I enjoy transforming complex problems into simple, beautiful, and intuitive solutions.
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                  projects, or learning about the latest trends in tech.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fadeInRight">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Career Goals</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {/* ====== INSERT YOUR CAREER GOALS HERE ====== */}
                To become a skilled software engineer who creates impactful solutions that improve
                people's lives. I aspire to work with cutting-edge technologies and collaborate with
                talented teams on innovative projects that push the boundaries of what's possible.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Interests</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {/* ====== INSERT YOUR INTERESTS HERE ====== */}
                I'm passionate about web development, mobile apps, artificial intelligence, and cloud
                computing. I love participating in hackathons, attending tech meetups, and staying updated
                with the latest industry trends. I also enjoy mentoring junior students and sharing knowledge
                through tech blogs.
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm p-6 rounded-lg border border-cyan-400/30">
              <h3 className="text-xl font-bold text-white mb-4">Quick Facts</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▹</span>
                  <span>Softare full-stack developer good in Django</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▹</span>
                  <span>Computer Science Major</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▹</span>
                  <span>Available for Internships & Projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
