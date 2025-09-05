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
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      subtitle: 'Full-Stack Shopping Application',
      description: 'Developed a full-stack E-Commerce platform using React 18 with Redux Toolkit, React Query, and Tailwind CSS for a responsive frontend, integrated with PayPal for secure payments. Features JWT authentication, media handling with Cloudinary, and data visualization using React Google Charts.',
      category: 'fullstack',
      year: '2024',
      status: 'Live',
      image: '🛒',
      frontend: ['React 18', 'Redux Toolkit', 'React Query', 'Tailwind CSS', 'Bootstrap', 'Headless UI', 'PayPal', 'React Google Charts'],
      backend: ['Node.js', 'Express 5', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs', 'Cloudinary', 'Multer', 'Nodemailer'],
      features: ['PayPal Integration', 'Shopping Cart', 'Order Management', 'Email Notifications', 'Data Analytics', 'Media Upload'],
      demoLink: 'https://e-commerce-woad-five-26.vercel.app/',
      codeLink: 'https://github.com/tesfa27/e-commerce'
    },
    {
      id: 3,
      title: 'Admin Dashboard',
      subtitle: 'Interactive Management Interface',
      description: 'Developed an interactive admin dashboard using React 18 and Material UI with Emotion for modern UI components and theming. Implemented data visualization with Nivo charts and scheduling features using FullCalendar. Integrated responsive navigation with React Pro Sidebar, advanced tables with MUI Data Grid, and form management with Formik + Yup validation.',
      category: 'frontend',
      year: '2024',
      status: 'Live',
      image: '📊',
      frontend: ['React 18', 'Material UI', 'Emotion', 'Nivo Charts', 'FullCalendar', 'React Pro Sidebar', 'Formik', 'Yup'],
      backend: ['Frontend Only'],
      features: ['Data Visualization', 'Calendar Scheduling', 'Advanced Tables', 'Form Validation', 'Responsive Design', 'Performance Monitoring'],
      demoLink: 'https://tesfa-admin.netlify.app/',
      codeLink: 'https://github.com/tesfa27'
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