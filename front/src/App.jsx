import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import Navbar from './components/Navbar';
import NodeMap from './components/NodeMap';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer.jsx';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  const [activePage, setActivePage] = useState('home');

  const handleSelectPage = (page) => {
    setActivePage(page);
  };

  const renderPage = () => {
    switch(activePage) {
      case 'about': return <About setActivePage={setActivePage} />;
      case 'skills': return <Skills setActivePage={setActivePage} />;
      case 'projects': return <Projects setActivePage={setActivePage} />;
      case 'contact': return <Contact setActivePage={setActivePage} />;
      default:
        return (
          <div className="home-container">
            <Container className="hero-section text-center">
              <Row className="justify-content-center align-items-center">
                <Col md={8}>
                  <h1 className="display-3 hero-title">Hi, I’m Tsehayinesh Belete 💻</h1>
                  <p className="lead hero-subtitle">
                    I’m a <span className="highlight">MERN Developer</span> and <span className="highlight">Problem Solver</span>,  
                    currently completing my <span className="highlight">4th Year in Computer Science</span>.
                  </p>
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="hero-btn mt-3" 
                    onClick={() => document.getElementById('nodes').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Explore My Portfolio
                  </Button>
                </Col>
              </Row>
            </Container>

            <div id="nodes">
              <NodeMap setActivePage={setActivePage} />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="App {`about-section section-container ${visible ? 'fade-in' : 'hidden'}`} ref={containerRef}">
      <Navbar onSelect={handleSelectPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
