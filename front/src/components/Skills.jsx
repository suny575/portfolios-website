import React, { useRef, useEffect, useState } from 'react';
import '../styles/Skills.css';
import { FaReact, FaNodeJs, FaDatabase, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const skills = [
  { key: 'html', icon: <FaHtml5 />, label: 'HTML5', highlight: '📄 Semantic Markup' },
  { key: 'react', icon: <FaReact />, label: 'React', highlight: '💙 Interactive UI' },
  { key: 'css', icon: <FaCss3Alt />, label: 'CSS3', highlight: '🎨 Stylish Layouts' },
  { key: 'mongo', icon: <FaDatabase />, label: 'MongoDB', highlight: '🗄️ Data Wizard' },
  { key: 'js', icon: <FaJs />, label: 'JavaScript', highlight: '✨ Clean Code' },
  { key: 'express', icon: <FaNodeJs />, label: 'Express', highlight: '🚀 Lightweight Server' },
  { key: 'node', icon: <FaNodeJs />, label: 'Node.js', highlight: '⚡ Fast Backend' }
  
];

function Skills({setActivePage}) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setVisible(true)),
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div> 
   <div className="skills-section fade-in">
  <h2 className="skills-title">My Skills 💜</h2>
  <p className="skills-intro">
    Over the years, I’ve gained hands-on experience in these technologies.  
    I enjoy building smart, interactive web applications and solving complex problems creatively.
  </p>

      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.key} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-label">{skill.label}</div>
            <div className="skill-highlight">{skill.highlight}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="skills-cta">
  <p>✨ Liked what you see? Let’s <span onClick={() => setActivePage('contact')}>get in touch!</span> 💌</p>
</div>
</div>
    
  );
}

export default Skills;
