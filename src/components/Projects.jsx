import { useState, useEffect, useRef } from 'react';

function Projects() {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Web App',
      description: 'Full MERN stack development for an online store with payment integration, user authentication, and admin dashboard.',
      image: '/src/assets/project1.jpg', // Replace with actual image path
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Blog Platform',
      description: 'Django and React-based blog with user authentication, rich text editing, and comment system.',
      image: '/src/assets/project2.jpg', // Replace with actual image path
      category: 'backend',
      technologies: ['Django', 'React', 'PostgreSQL', 'AWS S3'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Designed and built using WordPress Elementor with custom CSS and JavaScript enhancements.',
      image: '/src/assets/project3.jpg', // Replace with actual image path
      category: 'frontend',
      technologies: ['WordPress', 'Elementor', 'CSS', 'JavaScript'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 4,
      title: 'DevOps Setup',
      description: 'Dockerized Django app deployed with Kubernetes on VPS with automated CI/CD pipeline.',
      image: '/src/assets/project4.jpg', // Replace with actual image path
      category: 'devops',
      technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'Nginx'],
      demoLink: '#',
      codeLink: '#'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-[var(--color-accent)]">
      <div 
        ref={sectionRef} 
        className="container mx-auto px-6 transition-all duration-1000 opacity-0 translate-y-10"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[var(--color-secondary-800)]">
            My Projects
          </h2>
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap justify-center gap-2">
              {['all', 'frontend', 'backend', 'fullstack', 'devops'].map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === category
                      ? 'bg-[var(--color-primary)] text-[var(--color-accent)]'
                      : 'bg-[var(--color-secondary-100)] text-[var(--color-secondary-700)] hover:bg-[var(--color-secondary-200)]'
                  }`}
                  onClick={() => setFilter(category)}
                >
                  {category === 'all' ? 'All Projects' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-[var(--color-accent)] rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
                <div className="h-48 bg-[var(--color-secondary-300)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-gradient-purple)] flex items-center justify-center text-[var(--color-accent)] text-xl font-bold">
                    {project.title}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[var(--color-secondary-800)]">{project.title}</h3>
                  <p className="text-[var(--color-secondary-600)] mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-[var(--color-primary-100)] text-[var(--color-primary-800)] text-xs font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <a 
                      href={project.demoLink} 
                      className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-accent)] rounded-md hover:bg-[var(--color-primary-700)] transition-colors text-sm font-medium"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.codeLink} 
                      className="px-4 py-2 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-md hover:bg-[var(--color-primary-100)] transition-colors text-sm font-medium"
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
        </div>
      </div>
    </section>
  );
}

export default Projects;