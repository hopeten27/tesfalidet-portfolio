import { useState, useEffect } from 'react';
import reservationImg from '../assets/reservation-system.png';
import ecommerceImg from '../assets/e-commerce.png';
import adminImg from '../assets/admin-dashboard.png';
import githubActionsImg from '../assets/github_actions.png';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      subtitle: 'Full-Stack Shopping Application',
      description: 'Complete e-commerce solution with PayPal integration, shopping cart, order management, and data analytics.',
      category: 'Full Stack',
      year: '2024',
      image: ecommerceImg,
      video: 'https://res.cloudinary.com/dxmeua2xz/video/upload/v1761394243/ECOMSTORE_n93vex.mp4',
      tech: ['React 18', 'Express 5', 'MongoDB', 'PayPal', 'Redux Toolkit', 'Cloudinary'],
      features: ['PayPal Integration', 'Shopping Cart', 'Order Management', 'Email Notifications'],
      demoLink: 'https://e-commerce-woad-five-26.vercel.app/',
      codeLink: 'https://github.com/tesfa27/e-commerce'
    },
    {
      id: 2,
      title: 'Reservation System',
      subtitle: 'Full-Stack Web Application',
      description: 'A comprehensive booking platform with real-time availability, secure payments, and media management.',
      category: 'Full Stack',
      year: '2024',
      image: reservationImg,
      tech: ['React 19', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'Cloudinary'],
      features: ['Payment Processing', 'Real-time Booking', 'Media Management', 'Authentication'],
      demoLink: 'https://reservation-system-cyan-zeta.vercel.app/',
      codeLink: 'https://github.com/tesfa27/reservation-system'
    },
    {
      id: 3,
      title: 'Admin Dashboard',
      subtitle: 'Interactive Management Interface',
      description: 'Modern admin dashboard with data visualization, calendar scheduling, and advanced table management.',
      category: 'Frontend',
      year: '2024',
      image: adminImg,
      tech: ['React 18', 'Material UI', 'Nivo Charts', 'FullCalendar', 'Formik', 'Yup'],
      features: ['Data Visualization', 'Calendar Scheduling', 'Advanced Tables', 'Form Validation'],
      demoLink: 'https://tesfa-admin.netlify.app/',
      codeLink: 'https://github.com/tesfa27'
    },
    {
      id: 4,
      title: 'AWS CI/CD Pipeline',
      subtitle: 'DevOps & Cloud Infrastructure',
      description: 'Professional Node.js REST API with automated CI/CD pipeline, zero-downtime deployments, and health monitoring.',
      category: 'DevOps',
      year: '2024',
      image: githubActionsImg,
      tech: ['Node.js', 'GitHub Actions', 'AWS Beanstalk', 'Docker', 'Jest', 'OIDC'],
      features: ['Automated Testing', 'Zero-downtime Deployment', 'Health Monitoring', 'CI/CD Workflow'],
      demoLink: 'http://demo-env.eba-7smfn5dj.eu-north-1.elasticbeanstalk.com',
      codeLink: 'https://github.com/tesfa27/aws-ci-cd-sample-app'
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

  // Auto-play video when card comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const projectId = parseInt(entry.target.dataset.projectId);
          const project = projects.find(p => p.id === projectId);
          
          if (entry.isIntersecting && project?.video) {
            setPlayingVideo(projectId);
          } else {
            setPlayingVideo(null);
          }
        });
      },
      { threshold: 0.5 }
    );

    const projectCards = document.querySelectorAll('[data-project-id]');
    projectCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="projects" className="py-24 bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className={`mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-blue-500"></div>
            <span className="text-mono text-gray-500 uppercase tracking-wider">Portfolio</span>
          </div>
          
          <h2 className="text-heading text-black mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          
          <p className="text-body-large text-gray-600 max-w-2xl">
            Showcasing real-world applications built with modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              data-project-id={project.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Creative Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-3xl"></div>
              
              {/* Project Image/Video */}
              <div className="relative h-56 overflow-hidden">
                {playingVideo === project.id && project.video ? (
                  <video 
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                
                {/* Video Play Button */}
                {project.video && playingVideo !== project.id && (
                  <button
                    onClick={() => setPlayingVideo(project.id)}
                    className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </button>
                )}
                
                {/* Video Controls */}
                {playingVideo === project.id && (
                  <button
                    onClick={() => setPlayingVideo(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
                

              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-mono text-xs text-gray-500">{project.year}</span>
                    <div className="w-6 h-px bg-gray-300"></div>
                    <span className="text-mono text-xs text-blue-600 font-medium">Featured</span>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-mono text-xs font-medium">{project.category}</span>
                </div>
                
                <h3 className="text-body-large font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-body text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-mono text-xs">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-body font-medium px-4 py-3 bg-black text-white rounded-xl hover:bg-blue-600 transition-all duration-300 text-center transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-body font-medium px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 text-center transform hover:scale-105"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {fullscreenVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <button
            onClick={() => {
              setFullscreenVideo(null);
              document.body.style.overflow = 'auto';
            }}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <video 
            src={fullscreenVideo}
            autoPlay
            muted
            loop
            controls
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </section>
  );
}

export default Projects;