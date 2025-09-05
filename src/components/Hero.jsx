import { useState, useEffect } from 'react';
import profilePhoto from '../assets/profile-photo.png';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <p className="text-caption text-gray-600 mb-3">Hello, I'm</p>
              <h1 className="text-display text-black mb-4">
                Tesfalidet
                <span className="block text-gray-700">Markos</span>
              </h1>
            </div>
            
            <p className="text-body-large text-gray-600 mb-8 max-w-2xl">
              Computer Engineer & Full Stack Developer passionate about creating 
              innovative solutions and beautiful user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-black text-white hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/25"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white rounded-full transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Photo Section */}
          <div className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Photo container with modern styling */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full blur-sm opacity-75"></div>
                
                <img 
                  src={profilePhoto}
                  alt="Tesfalidet Markos"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
                />
                
                {/* Fallback placeholder */}
                <div className="hidden absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full items-center justify-center text-white text-6xl font-bold">
                  TM
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-black rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-600 rounded-full animate-bounce delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-black/60 hover:text-black transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Hero;