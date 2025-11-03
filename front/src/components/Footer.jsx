import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/suny575" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/suny" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://telegram.com/dagmit21" target="_blank" rel="noreferrer"><FaTelegram /></a>
        <a href="mailto:merocala869@gmail.com"><FaEnvelope /></a>
      </div>
      <p>© 2025 Tsehay• Crafted with 💜 and React</p>
    </footer>
  );
}

export default Footer;
