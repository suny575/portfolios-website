import React, { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer.jsx';

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
      default: return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="App">
      <Navbar onSelect={handleSelectPage} />
       <div className="section-container">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
