import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import './index.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />

      <main className="flex-1">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2025 Tesfalidet Markos. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;