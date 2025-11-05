import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaInstagram, FaTelegram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icon">
        <a className="social-icon" href="https://github.com/suny575" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a className="social-icon" href="#https/instagram/dagm203" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a className="social-icon" href="https://t.me/dagmit21" target="_blank" rel="noreferrer"><FaTelegram /></a>
        <a className="social-icon" href="mailto:merocala869@gmail.com"><FaEnvelope /></a>
      </div>
      <p>© 2025 Tsehay• Crafted with 💜 and React</p>
    </footer>
  );
}

export default Footer;
