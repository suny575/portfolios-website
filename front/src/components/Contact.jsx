import React, { useState, useRef, useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

function Contact({ setActivePage }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setVisible(true)),
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
        "service_nr140du",
        "template_c8xf9vm",
        formData,
        "AzxZDOwMHXXm_p_Xw"
      )
      .then(() => setStatus("Message sent! Thank You 💌"), () => setStatus("Failed😢 Check Your connection and Try Again! "));
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className={`contact-container ${visible ? "fade-in" : "hidden"}`}
      ref={containerRef}
    >
      <h2 className="contact-title">Get in Touch 💜</h2>

      <div className="contact-content">
        <div className="contact-left">
          <div className="contact-info">
            <p><FaEnvelope /> merocala869@gmail.com</p>
            <p><FaPhone /> +251 900 809040</p>
            <p><FaMapMarkerAlt /> Addis Ababa, Ethiopia</p>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Send 💌</button>
            <p className="status">{status}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
