import React, { useEffect, useState } from 'react'; 
import { Container, Row, Col, Button } from 'react-bootstrap';
import NodeMap from './NodeMap';
import { FaLaptopCode, FaStar, FaLightbulb, FaPalette } from 'react-icons/fa';
import Particles from "react-tsparticles";
import '../styles/Home.css';

function Home({ setActivePage }) {
  const roles = ['MERN Developer', 'Problem Solver', 'Creative Coder'];
  const [currentText, setCurrentText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showNodes, setShowNodes] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentText(roles[roleIndex].slice(0, charIndex + 1));
      if (charIndex + 1 === roles[roleIndex].length) {
        setTimeout(() => {
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
          setCurrentText('');
        }, 1500);
      } else {
        setCharIndex(charIndex + 1);
      }
    }, 150);
    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  const handleHireMe = () => {
    setActivePage('contact'); // Go to contact page
  };

const handleExplore = () => {
  setShowNodes(prev => !prev);
  if (!showNodes) {
    setTimeout(() => {
      document.getElementById('nodes').scrollIntoView({
        behavior: 'smooth',
        block: 'start' // makes it align to top of viewport
      });
    }, 100);
  }
};


  return (
    <div className="section-container"> 
    <div className="home-container">
      {/* Particle Background */}
      <Particles
        className="particles-bg"
        options={{
          fpsLimit: 60,
          background: { color: "transparent" },
          particles: {
            number: { value: 40, density: { enable: true, area: 800 } },
            color: { value: ["#ab47bc","#ce93d8","#7e57c2"] },
            shape: { type: "circle" },
            opacity: { value: 0.7, random: true },
            size: { value: { min: 2, max: 5 }, random: true },
            move: { enable: true, speed: 1.5, direction: "none", random: true, outModes: "bounce" },
            links: { enable: true, distance: 120, color: "#ab47bc", opacity: 0.2, width: 1 }
          },
          detectRetina: true,
        }}
      />

      <Container className="hero-section">
        <Row className="justify-content-center align-items-center">
          {/* Name */}
          <Col xs={12} className="hero-name text-center mb-3">
            <h1 className="hero-title">
              Hi, I’m <span className="name-highlight">Tsehayinesh Belete</span> 💜
            </h1>
          </Col>

          {/* Image */}
          <Col xs={12} md={6} className="hero-img-col text-center">
            <div className="hero-image-container">
              <img src="/me.png" alt="Me" className="hero-image" />
              <FaLaptopCode className="floating-icon icon1" />
              <FaPalette className="floating-icon icon2" />
              <FaLightbulb className="floating-icon icon3" />
              <FaStar className="floating-icon icon4" />
            </div>
          </Col>

          {/* Texts & Buttons */}
          <Col xs={12} md={6} className="hero-text-col text-center text-md-left mt-3 mt-md-0">
            <p className="hero-subtitle">
              And I’m a <span className="highlight">{currentText}</span>
            </p>
            <p className="hero-tagline">
              Crafting professional, interactive, and delightful web experiences with a touch of creativity ✨
            </p>
            <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-md-start mt-3">
              <Button variant="primary" onClick={handleHireMe}>
                Hire Me
              </Button>
              <Button variant="outline-primary" onClick={handleExplore}>
                Explore My Portfolio
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* NodeMap */}
      {showNodes && (
        <div id="nodes" className="mt-5">
          <NodeMap setActivePage={setActivePage} />
        </div>
      )}
      </div>
    </div>
  );
}

export default Home;
