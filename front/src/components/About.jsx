import React, { useRef, useEffect, useState } from 'react';
import '../styles/About.css';
import { FaLaptopCode, FaLightbulb, FaPalette } from 'react-icons/fa';

function About() {
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
    <div 
      className={`about-section ${visible ? 'fade-in' : 'hidden'}`}
      ref={containerRef}
    >
      <h2 className="about-title">About Me 💜</h2>
      <p>
        Hello! I’m <strong>Tsehayinesh Belete</strong>, a 4th-year Computer Science student,
        passionate about building <strong>interactive MERN stack applications</strong> and solving
        complex problems creatively.
      </p>
      <p>
        I love combining <strong>cute, smart, and attractive designs</strong> with clean,
        functional code to make websites that truly stand out!
      </p>
      <div className="about-skills">
        <div className="skill-item"><FaLaptopCode /> MERN Developer</div>
        <div className="skill-item"><FaLightbulb /> Problem Solver</div>
        <div className="skill-item"><FaPalette /> Creative Designs</div>
          <div className="skill-item"><FaLaptopCode /> Web Developer</div>
            <div className="skill-item"><FaLaptopCode /> Full Stack</div>
      </div>
    </div>
  );
}

export default About;
