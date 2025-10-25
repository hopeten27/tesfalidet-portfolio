import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import './index.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="fixed inset-0 pointer-events-none" style={{zIndex: -1}}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50"></div>
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
                linear-gradient(135deg, transparent 40%, rgba(15, 23, 42, 0.02) 50%, transparent 60%)
              `
            }}
          />
          <div 
            className="absolute inset-0 opacity-[0.008]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(15, 23, 42, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(15, 23, 42, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
      </div>
      

      
      <div className="relative z-10">
        <Header />
        <Hero />

        <main className="flex-1">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <footer className="relative bg-black text-white py-16 overflow-hidden">
          {/* Creative Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-600/20 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full"></div>
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-mono text-3xl font-bold text-white">
                    T<span className="text-blue-400">M</span>
                  </span>
                  <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
                </div>
                <p className="text-body-large text-gray-300 mb-6 max-w-md leading-relaxed">
                  Computer Engineer & Full Stack Developer passionate about creating innovative solutions with modern technologies.
                </p>
                <div className="flex space-x-4">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="mailto:tesfalidet@example.com" 
                     className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="text-body-large font-semibold text-white mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  <li><a href="#about" className="text-body text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About
                  </a></li>
                  <li><a href="#skills" className="text-body text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Skills
                  </a></li>
                  <li><a href="#projects" className="text-body text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Projects
                  </a></li>
                  <li><a href="#contact" className="text-body text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact
                  </a></li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div>
                <h4 className="text-body-large font-semibold text-white mb-6">Get In Touch</h4>
                <div className="space-y-3">
                  <p className="text-body text-gray-300">tesfalidet@example.com</p>
                  <p className="text-body text-gray-300">+251 912 345 678</p>
                  <p className="text-body text-gray-300">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-body text-gray-400">
                  © 2025 <span className="text-white font-medium">Tesfalidet Markos</span>. All rights reserved.
                </p>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;