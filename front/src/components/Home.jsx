import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NodeMap from './NodeMap';
import { FaLaptopCode, FaStar, FaLightbulb, FaPalette } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import '../styles/Home.css';

function Home({ setActivePage }) {
  const roles = ['MERN Developer', 'Problem Solver', 'Creative Coder'];
  const [currentText, setCurrentText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showNodes, setShowNodes] = useState(false);

  // typing effect
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

  // buttons
  const handleContactMe = () => setActivePage('contact');
  const handleExplore = () => setShowNodes(prev => !prev);

  return (
    <div className="section-container">
      <div className="home-container">
        {/* Particles Background */}
        <Particles
          className="particles-bg"
          options={{
            fpsLimit: 60,
            background: { color: 'transparent' },
            particles: {
              number: { value: 50, density: { enable: true, area: 800 } },
              color: { value: ['#a86adb', '#e1b5ff', '#b47cff'] },
              shape: { type: 'circle' },
              opacity: { value: 0.5 },
              size: { value: { min: 2, max: 5 }, random: true },
              move: { enable: true, speed: 1, random: true, outModes: 'bounce' },
              links: { enable: true, distance: 120, color: '#b47cff', opacity: 0.3, width: 1 },
            },
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
              <div className="hero-image-wrapper">
                <div className="hero-glow"></div>
                <img src="/me2.png" alt="Me" className="hero-image profile-img" />
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
               Driven to craft <span className="highlight">innovative, elegant </span> and{' '}
                <span className="highlight">immersive</span> web experiences that bring bold ideas to life ✨
              </p>
              <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-md-start mt-3">
                <Button className="btn btn1" onClick={handleContactMe}>
                  Contact Me
                </Button>
                <Button className="btn btn2" onClick={handleExplore}>
                  {showNodes ? 'Hide Portfolio' : 'Explore My Portfolio'}
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
