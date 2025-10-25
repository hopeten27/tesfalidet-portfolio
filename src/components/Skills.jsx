import { useState, useEffect } from 'react';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Engineering',
      description: 'Crafting exceptional user experiences with modern frameworks and tools',
      skills: [
        { name: 'React/Next.js', level: 95, years: '4+' },
        { name: 'TypeScript', level: 90, years: '3+' },
        { name: 'Tailwind CSS', level: 92, years: '3+' },
        { name: 'Vue.js', level: 85, years: '2+' },
        { name: 'Three.js', level: 75, years: '1+' }
      ]
    },
    backend: {
      title: 'Backend Architecture',
      description: 'Building scalable server-side solutions and robust APIs',
      skills: [
        { name: 'Node.js/Express', level: 93, years: '4+' },
        { name: 'Python/Django', level: 88, years: '3+' },
        { name: 'PostgreSQL', level: 90, years: '3+' },
        { name: 'MongoDB', level: 87, years: '3+' },
        { name: 'GraphQL', level: 82, years: '2+' }
      ]
    },
    devops: {
      title: 'DevOps & Cloud',
      description: 'Automating deployments and managing cloud infrastructure',
      skills: [
        { name: 'AWS/Azure', level: 88, years: '3+' },
        { name: 'Docker/K8s', level: 85, years: '2+' },
        { name: 'CI/CD Pipelines', level: 90, years: '3+' },
        { name: 'Terraform', level: 80, years: '2+' },
        { name: 'Monitoring', level: 83, years: '2+' }
      ]
    }
  };

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
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className={`mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-blue-500"></div>
            <span className="text-mono text-gray-500 uppercase tracking-wider">Expertise</span>
          </div>
          
          <h2 className="text-heading text-black mb-6">
            Technical <span className="text-blue-600">Proficiency</span>
          </h2>
          
          <p className="text-body-large text-gray-600 max-w-2xl">
            A comprehensive skill set spanning modern web technologies, 
            cloud infrastructure, and development best practices.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-4 mb-16">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`relative px-8 py-4 rounded-xl transition-all duration-300 overflow-hidden transform hover:scale-105 ${
                activeCategory === key 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-500'
              }`}
            >
              {activeCategory === key && (
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-blue-300/30 to-transparent rounded-bl-xl"></div>
              )}
              <div className="text-left relative z-10">
                <div className="text-body font-semibold">{category.title}</div>
                <div className="text-sm opacity-75 mt-1">{category.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Skills List */}
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <h4 className="text-body-large font-semibold text-black">{skill.name}</h4>
                      <span className="text-mono text-gray-500 text-sm">{skill.years} years</span>
                    </div>
                    <span className="text-mono text-blue-500 font-medium">{skill.level}%</span>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 150}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Representation */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              
              {/* Skill Radar Chart Simulation */}
              <div className="w-80 h-80 mx-auto relative">
                <svg className="w-full h-full" viewBox="0 0 240 240">
                  {/* Grid Lines */}
                  {[1, 2, 3, 4, 5].map((ring) => (
                    <circle
                      key={ring}
                      cx="120"
                      cy="120"
                      r={ring * 16}
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />
                  ))}
                  
                  {/* Axis Lines */}
                  {skillCategories[activeCategory].skills.map((_, index) => {
                    const angle = (index * 72 - 90) * (Math.PI / 180);
                    const x2 = 120 + Math.cos(angle) * 80;
                    const y2 = 120 + Math.sin(angle) * 80;
                    
                    return (
                      <line
                        key={index}
                        x1="120"
                        y1="120"
                        x2={x2 + 20}
                        y2={y2 + 20}
                        stroke="#e2e8f0"
                        strokeWidth="1"
                      />
                    );
                  })}
                  
                  {/* Skill Points */}
                  {skillCategories[activeCategory].skills.map((skill, index) => {
                    const angle = (index * 72 - 90) * (Math.PI / 180);
                    const radius = (skill.level / 100) * 80;
                    const x = 120 + Math.cos(angle) * radius;
                    const y = 120 + Math.sin(angle) * radius;
                    
                    return (
                      <g key={skill.name}>
                        <circle
                          cx={x}
                          cy={y}
                          r="4"
                          fill="#3b82f6"
                          className="animate-pulse"
                        />
                        <text
                          x={120 + Math.cos(angle) * 85}
                          y={120 + Math.sin(angle) * 85}
                          textAnchor="middle"
                          className="text-xs fill-slate-600 font-mono"
                          dominantBaseline="middle"
                        >
                          {skill.name.split('/')[0]}
                        </text>
                      </g>
                    );
                  })}
                  
                  {/* Connecting Lines */}
                  <path
                    d={skillCategories[activeCategory].skills.map((skill, index) => {
                      const angle = (index * 72 - 90) * (Math.PI / 180);
                      const radius = (skill.level / 100) * 80;
                      const x = 120 + Math.cos(angle) * radius;
                      const y = 120 + Math.sin(angle) * radius;
                      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }).join(' ') + ' Z'}
                    fill="rgba(59, 130, 246, 0.1)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-slate-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">
                    {Math.round(skillCategories[activeCategory].skills.reduce((acc, skill) => acc + skill.level, 0) / skillCategories[activeCategory].skills.length)}%
                  </div>
                  <div className="text-mono text-slate-500 text-sm">Avg Proficiency</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-slate-900/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {skillCategories[activeCategory].skills.length}
                  </div>
                  <div className="text-mono text-slate-300 text-sm">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Years of Experience', 
              value: '4+', 
              description: 'Building production applications' 
            },
            { 
              title: 'Projects Completed', 
              value: '50+', 
              description: 'From concept to deployment' 
            },
            { 
              title: 'Technologies Mastered', 
              value: '25+', 
              description: 'Across the full stack' 
            }
          ].map((stat, index) => (
            <div 
              key={stat.title}
              className={`relative text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-700 overflow-hidden transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {index === 0 && <div className="absolute top-0 left-0 w-16 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-br-xl"></div>}
              {index === 1 && <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-black/20 to-transparent rounded-tl-2xl"></div>}
              {index === 2 && <div className="absolute top-0 right-0 w-3 h-16 bg-gradient-to-b from-blue-500 to-blue-600 rounded-bl-xl"></div>}
              <div className="text-mono text-4xl font-bold text-black mb-2">{stat.value}</div>
              <div className="text-body font-semibold text-black mb-2">{stat.title}</div>
              <div className="text-body text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;