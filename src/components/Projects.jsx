import { useState, useEffect } from 'react';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const projects = [
    {
      id: 1,
      title: 'Reservation System',
      subtitle: 'Full-Stack Web Application',
      description: 'A comprehensive booking platform with real-time availability, secure payments, and media management.',
      category: 'fullstack',
      year: '2024',
      status: 'Live',
      image: '🏨',
      frontend: ['React 19', 'Redux Toolkit', 'React Query', 'Tailwind CSS', 'React Hook Form', 'Zod', 'Stripe'],
      backend: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs', 'Cloudinary', 'Jest'],
      features: ['Payment Processing', 'Real-time Booking', 'Media Management', 'Authentication', 'PDF Reports', 'Testing Suite'],
      demoLink: 'https://reservation-system-cyan-zeta.vercel.app/',
      codeLink: 'https://github.com/tesfa27/reservation-system'
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('projects');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-heading text-black mb-4">Featured Work</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-4"></div>
          <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
            Showcasing technical expertise through real-world applications
          </p>
        </div>

        {/* Project Showcase */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Project Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-gray-100 p-2 rounded-xl">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(index)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    selectedProject === index
                      ? 'bg-black text-white shadow-lg'
                      : 'text-gray-600 hover:text-black hover:bg-white'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1">{project.image}</div>
                    <div className="text-caption">{project.title}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left: Project Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{projects[selectedProject].image}</span>
                  <div>
                    <h3 className="text-heading text-black">{projects[selectedProject].title}</h3>
                    <p className="text-body-large text-gray-600">{projects[selectedProject].subtitle}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-black text-white text-caption rounded-full">
                    {projects[selectedProject].year}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-caption rounded-full">
                    {projects[selectedProject].status}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-caption rounded-full">
                    {projects[selectedProject].category}
                  </span>
                </div>
                
                <p className="text-body-large text-gray-700 leading-relaxed">
                  {projects[selectedProject].description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-subheading text-black mb-4">Key Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  {projects[selectedProject].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span className="text-body text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a 
                  href={projects[selectedProject].demoLink} 
                  className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a 
                  href={projects[selectedProject].codeLink} 
                  className="px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors font-medium"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>

            {/* Right: Tech Stack */}
            <div className="space-y-6">
              
              {/* Frontend Stack */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <h5 className="text-caption text-black font-semibold">Frontend Stack</h5>
                </div>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].frontend.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-white text-gray-700 text-caption rounded-lg shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Stack */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <h5 className="text-caption text-black font-semibold">Backend Stack</h5>
                </div>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].backend.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-white text-gray-700 text-caption rounded-lg shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Diagram */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h5 className="text-caption text-black font-semibold mb-4">Architecture</h5>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-body text-gray-700">Frontend</span>
                    <span className="text-caption text-blue-600">React 19 + Redux</span>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-4 bg-gray-300"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-body text-gray-700">API Layer</span>
                    <span className="text-caption text-green-600">Express.js</span>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-4 bg-gray-300"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-body text-gray-700">Database</span>
                    <span className="text-caption text-gray-600">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;