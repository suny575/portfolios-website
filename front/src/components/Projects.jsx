import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import { FaGithub, FaArrowDown } from "react-icons/fa";
import BackButton from "../components/BackButton";

const projectsData = [
  {
    name: "Portfolio Website",
    description:
      "My personal portfolio with interactive nodes, skills showcase, and projects.",
    tools: "React, CSS, Bootstrap",
    duration: "4 weeks",
    link: "https://github.com/suny575/portfolios-website",
  },
  {
    name: "Background Remover",
    description:
      "A smart tool that removes image backgrounds automatically using AI techniques.",
    tools: "HTML, CSS, Javascript,AI API",
    duration: "2 weeks",
    link: "https://github.com/suny575/image-background-remover",
  },
  {
    name: "Drag & Drop App",
    description:
      "Interactive drag and drop interface to organize items visually.",
    tools: "HTML, CSS, JavaScript",
    duration: "5 Days",
    link: "https://github.com/suny575/Drag_Drop",
  },
  {
    name: "Movie Site",
    description:
      "A fun movie browsing site showing trending movies with trailers and ratings.",
    tools: "HTML TMDB API, Javascript,CSS",
    duration: "5 weeks",
    link: "https://github.com/suny575/Movie-Site",
  },
  {
    name: "Task Manager App",
    description:
      "A full-stack MERN app to manage daily tasks efficiently with user-friendly interface.",
    tools: "MongoDB, Express, React, Node.js",
    duration: "1 month",
    link: "https://github.com/suny575/task-manager",
  },

  {
    name: "Chat App",
    description:
      "A real-time chat application using websockets for seamless instant messaging.",
    tools: "React,Bootstrap, Node.js, Socket.IO",
    duration: "3 weeks",
    link: "https://github.com/suny575/chatt-app.git",
  },
];

function Projects({ setActivePage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expanded, setExpanded] = useState(null);

  const toggleDetails = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleContactMe = () => setActivePage("contact");
  return (
    <div className="section-container">
      <div className="projects-section">
        <h2 className="projects-title">My Projects 💜</h2>
        <p className="projects-intro">
          Throughout my journey as a 4th-year Computer Science student, I’ve
          explored, learned, and built amazing things. Here are some of the
          projects that reflect my growth, creativity, and problem-solving
          skills.
        </p>
        <div className="floating-arrow">⬇️</div>
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div className="project-card" key={idx}>
              <h3 className="project-name">{project.name}</h3>
              <div className="project-short" onClick={() => toggleDetails(idx)}>
                <FaArrowDown className="pointerD" /> Explore
              </div>

              {expanded === idx && (
                <div className="project-details">
                  <p>📝 {project.description}</p>
                  <p>🛠️ Tools: {project.tools}</p>
                  <p>⏳ Duration: {project.duration}</p>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <FaGithub /> View Project
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="d-flex flex-column flex-sm-row gap-4 justify-content-center mt-3">
          <BackButton setActivePage={setActivePage} />
          <button className="c-btn" onClick={handleContactMe}>
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
