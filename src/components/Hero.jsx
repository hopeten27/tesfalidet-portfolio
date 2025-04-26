import { useEffect, useRef, useState } from 'react';

function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const buttons = buttonsRef.current;
    
    if (title && subtitle && buttons) {
      setTimeout(() => {
        title.classList.add('opacity-100', 'translate-y-0');
      }, 300);
      
      setTimeout(() => {
        subtitle.classList.add('opacity-100', 'translate-y-0');
      }, 800);
      
      setTimeout(() => {
        buttons.classList.add('opacity-100', 'translate-y-0');
      }, 1300);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary-900)] via-[var(--color-primary-900)] to-[var(--color-gradient-purple)]">
        <div className={`absolute inset-0 opacity-20 transition-opacity duration-1000 ${isLoaded ? 'opacity-30' : 'opacity-0'}`}>
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--color-primary-500)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--color-gradient-purple)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-20 w-72 h-72 bg-[var(--color-primary-700)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[url('/src/assets/grid.svg')] bg-center opacity-20"></div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-2 h-2 bg-[var(--color-accent)] rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="container mx-auto max-w-7xl px-6 z-10 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 
            ref={titleRef} 
            className="text-5xl md:text-7xl font-bold text-[var(--color-accent)] mb-6 opacity-0 -translate-y-10 transition-all duration-1000 ease-out"
          >
            <span className="inline-block">Tesfalidet</span>
            <span className="inline-block ml-4 relative">
              Markos
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--color-primary-400)] transform scale-x-0 transition-transform duration-1000 ease-out group-hover:scale-x-100 origin-left"></span>
            </span>
          </h1>
          
          <div 
            ref={subtitleRef}
            className="relative opacity-0 -translate-y-10 transition-all duration-1000 ease-out mb-12"
          >
            <p className="text-xl md:text-2xl text-[var(--color-primary-200)] relative inline-flex flex-col md:flex-row items-center justify-center">
              <span className="md:mr-3 mb-2 md:mb-0">Computer Engineer</span>
              <span className="hidden md:inline-block w-2 h-2 bg-[var(--color-primary-400)] rounded-full mx-2"></span>
              <span className="md:mr-3 mb-2 md:mb-0">Full Stack Developer</span>
              <span className="hidden md:inline-block w-2 h-2 bg-[var(--color-primary-400)] rounded-full mx-2"></span>
              <span>DevOps Enthusiast</span>
            </p>
          </div>
          
          <div 
            ref={buttonsRef}
            className="flex flex-col md:flex-row justify-center gap-4 opacity-0 -translate-y-10 transition-all duration-1000 ease-out"
          >
            <a 
              href="#projects" 
              className="group relative px-8 py-3 bg-[var(--color-primary)] text-[var(--color-accent)] rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary-500)]/30"
            >
              <span className="relative z-10 font-medium">View My Work</span>
              <span className="absolute inset-0 bg-[var(--color-primary-700)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            
            <a 
              href="#contact" 
              className="group relative px-8 py-3 bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-accent)]/20"
            >
              <span className="relative z-10 font-medium">Contact Me</span>
              <span className="absolute inset-0 bg-[var(--color-accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="absolute inset-0 bg-[var(--color-accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left group-hover:text-[var(--color-primary-900)]"></span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-[var(--color-accent)] opacity-70 hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
      
      {/* Add this to your global CSS or index.css */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        @keyframes blob {
          0% {
            transform: scale(1) translate(0px, 0px);
          }
          33% {
            transform: scale(1.1) translate(30px, -50px);
          }
          66% {
            transform: scale(0.9) translate(-20px, 20px);
          }
          100% {
            transform: scale(1) translate(0px, 0px);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default Hero;