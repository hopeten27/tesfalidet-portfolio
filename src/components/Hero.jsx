import { useState, useEffect } from 'react';
import profileImg from '../assets/profile-photo.jpg';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Geometric Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-slate-200/30 rounded-full animate-pulse" 
           style={{ transform: `translateY(${scrollY * 0.1}px)` }} />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-amber-500/10 rounded-lg rotate-45"
           style={{ transform: `translateY(${scrollY * -0.15}px) rotate(45deg)` }} />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 text-center sm:text-left ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-3 sm:px-4 py-2 bg-slate-900/5 backdrop-blur-sm rounded-full border border-slate-200/50">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-mono text-slate-600 text-sm sm:text-base">Full Stack Developer</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-display text-black leading-tight">
                Hi, I'm <span className="text-blue-600">Tesfalidet</span>
              </h1>
              <h2 className="text-heading text-gray-700">Full Stack Developer</h2>
              <p className="text-body-large text-gray-600 max-w-lg">
                Computer Engineer passionate about creating innovative solutions with modern technologies. 
                Specialized in React, Node.js, and cloud technologies.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <p className="text-mono text-slate-500 uppercase tracking-wider text-sm">Core Technologies</p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'].map((tech, index) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-lg text-mono text-slate-700 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-black text-white rounded-xl hover:bg-blue-600 transition-all duration-300 text-center transform hover:scale-105"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-black text-black rounded-xl hover:bg-black hover:text-white transition-all duration-300 text-center transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              {/* Image Container */}
              <div className="relative w-[500px] h-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl rotate-3"></div>
                <img 
                  src={profileImg} 
                  alt="Tesfalidet Markos"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-mono text-slate-500 text-sm">Scroll to explore</span>
          <div className="w-px h-16 bg-gradient-to-b from-slate-400 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;