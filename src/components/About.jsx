import { useState, useEffect } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('about');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-heading text-black mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-black to-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-body-large text-gray-700 mb-6">
              Hi, I'm Tesfalidet Markos, a passionate Computer Engineer and Full Stack Developer 
              with a degree from Hawassa University (2023). I specialize in creating efficient, 
              scalable applications that deliver exceptional user experiences.
            </p>
            
            <p className="text-body-large text-gray-700 mb-8">
              My expertise spans both frontend and backend technologies, allowing me to build 
              complete solutions from concept to deployment. I'm passionate about clean code, 
              modern design, and solving complex problems with elegant solutions.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="relative text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-105">
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-blue-500/30 to-transparent rounded-bl-2xl"></div>
                <div className="text-mono text-3xl font-bold text-black mb-2">2+</div>
                <div className="text-body text-gray-600">Years Experience</div>
              </div>
              <div className="relative text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-105">
                <div className="absolute bottom-0 left-0 w-16 h-3 bg-gradient-to-r from-black to-blue-600 rounded-tr-xl"></div>
                <div className="text-mono text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-body text-gray-600">Projects Completed</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="text-body font-medium px-8 py-4 bg-black text-white rounded-xl hover:bg-blue-600 transition-all duration-300 text-center transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a 
                href="#" 
                className="text-body font-medium px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 text-center transform hover:scale-105"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Skills Grid */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-subheading text-black mb-6">
              What I <span className="text-blue-600">Do</span>
            </h3>
            
            <div className="grid gap-6">
              <div className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-3xl"></div>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-body-large font-semibold text-black mb-2">Frontend Development</h4>
                <p className="text-body text-gray-600">React, JavaScript, HTML/CSS, Tailwind</p>
              </div>
              
              <div className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="absolute bottom-0 left-0 w-20 h-2 bg-gradient-to-r from-black to-blue-600 rounded-tr-lg"></div>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h4 className="text-body-large font-semibold text-black mb-2">Backend Development</h4>
                <p className="text-body text-gray-600">Node.js, Python, Databases, APIs</p>
              </div>
              
              <div className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-20 bg-gradient-to-b from-blue-500 to-blue-600 rounded-br-lg"></div>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-body-large font-semibold text-black mb-2">DevOps & Cloud</h4>
                <p className="text-body text-gray-600">AWS, Docker, CI/CD, Deployment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;