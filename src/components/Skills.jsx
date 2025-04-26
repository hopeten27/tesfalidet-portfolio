import { useState, useEffect, useRef } from 'react';

function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  const sectionRef = useRef(null);
  
  const skills = {
    frontend: [
      { name: 'React.js', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Tailwind CSS', level: 85 }
    ],
    backend: [
      { name: 'Django', level: 80 },
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'Database Design', level: 75 }
    ],
    devops: [
      { name: 'Docker', level: 75 },
      { name: 'Kubernetes', level: 70 },
      { name: 'CI/CD', level: 80 },
      { name: 'Server Deployment', level: 85 },
      { name: 'AWS', level: 65 }
    ]
  };
  
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
    <section id="skills" className="py-20 bg-[var(--color-secondary-50)]">
      <div 
        ref={sectionRef} 
        className="container mx-auto px-6 transition-all duration-1000 opacity-0 translate-y-10"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[var(--color-secondary-800)]">
            My Skills
          </h2>
          
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              {Object.keys(skills).map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`px-6 py-2 text-sm font-medium ${
                    activeTab === category
                      ? 'bg-[var(--color-primary)] text-[var(--color-accent)]'
                      : 'bg-[var(--color-accent)] text-[var(--color-secondary-700)] hover:bg-[var(--color-secondary-100)]'
                  } ${
                    category === 'frontend' ? 'rounded-l-lg' : ''
                  } ${
                    category === 'devops' ? 'rounded-r-lg' : ''
                  } border border-[var(--color-secondary-200)]`}
                  onClick={() => setActiveTab(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {skills[activeTab].map((skill, index) => (
              <div key={index} className="bg-[var(--color-accent)] p-6 rounded-lg shadow-md">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-[var(--color-secondary-700)]">{skill.name}</span>
                  <span className="text-[var(--color-primary)]">{skill.level}%</span>
                </div>
                <div className="w-full bg-[var(--color-secondary-200)] rounded-full h-2.5">
                  <div 
                    className="bg-[var(--color-primary)] h-2.5 rounded-full transition-all duration-1000" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;