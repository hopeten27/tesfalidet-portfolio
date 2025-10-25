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
      id: 2,
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
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-heading text-black mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
            Showcasing real-world applications built with modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              data-project-id={project.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Project Image/Video */}
              <div className="relative h-64 overflow-hidden">
                {playingVideo === project.id && project.video ? (
                  <video 
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                    onLoadStart={() => console.log('Video loading...')}
                    onCanPlay={() => console.log('Video ready to play')}
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
                    className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-all duration-300 group/play"
                  >
                    <div className="w-16 h-16 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover/play:scale-110 group-hover/play:bg-black/90 transition-all duration-300">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </button>
                )}
                
                {/* Video Controls */}
                {playingVideo === project.id && (
                  <>
                    <button
                      onClick={() => setPlayingVideo(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        setFullscreenVideo(project.video);
                        document.body.style.overflow = 'hidden';
                      }}
                      className="absolute top-4 left-4 w-10 h-10 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-subheading text-black font-bold">{project.title}</h3>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-caption rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-body text-gray-600">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-caption text-black font-semibold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-caption rounded-lg">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 bg-gray-200 text-gray-600 text-caption rounded-lg">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-caption text-black font-semibold mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-body text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href={project.demoLink} 
                    className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-center text-caption font-medium"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="px-4 py-2 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors text-center text-caption font-medium"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-body-large text-gray-600 mb-6">Want to see more projects or discuss a collaboration?</p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {fullscreenVideo && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button 
            onClick={() => {
              setFullscreenVideo(null);
              document.body.style.overflow = 'unset';
            }}
            className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <video 
            src={fullscreenVideo}
            autoPlay
            controls
            className="w-full h-full object-contain"
            onEnded={() => {
              setFullscreenVideo(null);
              document.body.style.overflow = 'unset';
            }}
          />
        </div>
      )}
    </section>
  );
}

export default Projects;