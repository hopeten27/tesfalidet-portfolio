import { useState, useEffect } from 'react';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  
  const skills = [
    { name: 'React.js', category: 'Frontend', icon: '⚛️' },
    { name: 'JavaScript', category: 'Frontend', icon: '🟨' },
    { name: 'HTML/CSS', category: 'Frontend', icon: '🎨' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: '💨' },
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'Express.js', category: 'Backend', icon: '⚡' },
    { name: 'Django', category: 'Backend', icon: '🎯' },
    { name: 'MongoDB', category: 'Backend', icon: '🍃' },
    { name: 'PostgreSQL', category: 'Backend', icon: '🐘' },
    { name: 'Docker', category: 'DevOps', icon: '🐳' },
    { name: 'Git', category: 'Tools', icon: '📝' }
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
    
    const section = document.getElementById('skills');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-heading text-black mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-4"></div>
          <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`group p-6 bg-gray-50 rounded-xl hover:bg-black hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="text-caption text-black group-hover:text-white mb-1">{skill.name}</h3>
                <p className="text-body text-gray-500 group-hover:text-gray-300">{skill.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="text-caption text-black mb-2">Frontend Focus</h4>
              <p className="text-body text-gray-600">Creating responsive, interactive user interfaces with modern frameworks</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="text-caption text-black mb-2">Backend Development</h4>
              <p className="text-body text-gray-600">Building robust APIs and server-side applications with scalable architecture</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="text-caption text-black mb-2">DevOps & Deployment</h4>
              <p className="text-body text-gray-600">Containerization, cloud deployment, and CI/CD pipeline management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;