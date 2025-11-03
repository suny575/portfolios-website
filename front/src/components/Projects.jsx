import React, { useEffect, useState } from 'react';
import '../styles/Projects.css';
import { FaGithub } from 'react-icons/fa';
import API from '../utils/api';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get('/projects');
        setProjects(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.length > 0 ? projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.link && <a href={project.link} target="_blank" rel="noreferrer">
              <FaGithub size={25} /> View
            </a>}
          </div>
        )) : <p>Loading projects...</p>}
      </div>
    </div>
  );
}

export default Projects;
