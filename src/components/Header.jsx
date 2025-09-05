import { useState, useEffect } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-black">TM</a>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#about" className="text-black hover:text-gray-600 transition-colors">About</a>
            <a href="#skills" className="text-black hover:text-gray-600 transition-colors">Skills</a>
            <a href="#projects" className="text-black hover:text-gray-600 transition-colors">Projects</a>
            <a href="#contact" className="text-black hover:text-gray-600 transition-colors">Contact</a>
          </nav>
          
          <button className="md:hidden text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;