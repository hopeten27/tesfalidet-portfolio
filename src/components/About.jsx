import { useEffect, useRef } from 'react';

function About() {
  const sectionRef = useRef(null);
  
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
    <section id="about" className="py-20 bg-accent">
      <div 
        ref={sectionRef} 
        className="container mx-auto px-6 transition-all duration-1000 opacity-0 translate-y-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-500 mx-auto">
                  {/* Replace with your actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent p-3 rounded-full shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-secondary-800 relative inline-block">
                About Me
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary-500"></span>
              </h2>
              
              <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                Hi, I'm Tesfalidet Markos, a passionate Electrical and Computer Engineering graduate from Hawassa University (2023).
                I specialize in building efficient, user-friendly, and scalable applications.
              </p>
              
              <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                With a strong foundation in both frontend and backend technologies, I enjoy creating seamless user experiences while ensuring robust architecture. My approach combines technical excellence with creative problem-solving.
              </p>
              
              <div className="flex gap-4">
                <a href="#contact" className="px-6 py-2 bg-primary text-accent rounded-md hover:bg-primary-700 transition-colors">
                  Get In Touch
                </a>
                <a href="#" className="px-6 py-2 border border-primary text-primary rounded-md hover:bg-primary-100 transition-colors">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;