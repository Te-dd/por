import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  const projects = [
    {
      title: 'Project Title 1',
      description: 'A brief description of your project. Explain what it does, the problem it solves, and the technologies used to build it.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      image: '/project1.jpg',
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1.example.com',
    },
    {
      title: 'Project Title 2',
      description: 'Another project description highlighting your skills and the impact of the project. Include key features and achievements.',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      image: '/project2.jpg',
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2.example.com',
    },
    {
      title: 'Project Title 3',
      description: 'Describe this project in detail. What was the goal? What challenges did you face? What did you learn from building it?',
      technologies: ['JavaScript', 'Node.js', 'MongoDB'],
      image: '/project3.jpg',
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3.example.com',
    },
    {
      title: 'Project Title 4',
      description: 'Share details about this project. Focus on your contribution, the technical stack, and any interesting implementation details.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image: '/project4.jpg',
      github: 'https://github.com/yourusername/project4',
      live: 'https://project4.example.com',
    },
    {
      title: 'Project Title 5',
      description: 'Explain what makes this project unique. Did it win any awards? Was it used by real users? What feedback did you receive?',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      image: '/project5.jpg',
      github: 'https://github.com/yourusername/project5',
      live: 'https://project5.example.com',
    },
    {
      title: 'Project Title 6',
      description: 'Describe your latest or most impressive project. Highlight the complexity, scale, or innovative approach you took.',
      technologies: ['Vue.js', 'Express', 'Docker'],
      image: '/project6.jpg',
      github: 'https://github.com/yourusername/project6',
      live: 'https://project6.example.com',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each one represents a learning experience and a step forward in my development journey.
            </p>
          </div>

          
            <p className="text-gray-400 max-w-2xl mx-auto">
              NO LIVE PROJECTS AT THE MOMENT 
            </p>
          

          <div className="text-center mt-12">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-800/50 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
            >
              <Github size={20} />
              View More on GitHub
            </a>
          </div>
        </div>
    </section>
  );
};

export default Projects;