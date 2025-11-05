import React, { useRef, useEffect, useState } from "react";
import "../styles/About.css";
import {
  FaLaptopCode,
  FaLightbulb,
  FaPalette,
  FaReact,
  FaBook,
  FaMusic,
  FaStar,
  FaGraduationCap,
  FaLaptop,
} from "react-icons/fa";
import BackButton from "../components/BackButton";

function About({ setActivePage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && setVisible(true)),
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const moreItems = [
    {
      icon: <FaLaptopCode />,
      title: "Skills & Tools",
      desc: "I’m confident with MERN stack development — MongoDB, Express, React, Node.js, along with core web technologies: HTML, CSS, and JavaScript. I enjoy integrating libraries, crafting responsive interfaces, and ensuring the code is both clean and efficient.",
    },
    {
      icon: <FaBook />,
      title: "Journey",
      desc: "As a 4th-year Computer Science student, I’ve been diving deep into web development, learning advanced topics, experimenting with creative designs, and building projects that solve real problems. I love exploring new technologies and constantly improving my skillset.",
    },
    {
      icon: <FaMusic />,
      title: "Hobbies",
      desc: "I enjoy playing the oud, listening to Arabic music, sketching UI ideas, and creating interactive animations. These hobbies not only relax me but also fuel my creativity and inspire the aesthetics of my projects.",
    },
    {
      icon: <FaStar />,
      title: "Goals & Vision",
      desc: "I aim to create web applications that are smart, user-friendly, and visually attractive. I want to combine my problem-solving abilities, coding skills, and design sense to craft projects that are both functional and delightful for users.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Education",
      desc: "Currently pursuing a BSc in Computer Science at Jimma university,Ethiopia. I have strong foundations in programming, data structures, algorithms, and web development, which I constantly apply in my projects and experiments.",
    },
    {
      icon: <FaLaptop />,
      title: "Cyber Studying Start",
      desc: "I began exploring cybersecurity concepts, ethical hacking basics, and network security practices to expand my skillset and understand the importance of safe and secure application development.",
    },
  ];

  return (
    <div
      className={`about-section ${visible ? "fade-in" : "hidden"}`}
      ref={containerRef}
    >
      <div>
        <h1 className="about-title">About Me 💜</h1>
      </div>
      {/* TOP IMAGE + TEXT */}
      <div className="about-content section-container">
        <div className="about-image-container">
          <img src="/me3.png" alta="my Picture" className="about-image" />
          <FaLaptopCode className="floating-icon icon1" />
          <FaPalette className="floating-icon icon2" />
          <FaLightbulb className="floating-icon icon3" />
          <FaReact className="floating-icon icon4" />
        </div>

        <div className="about-text">
          <h3 className="about-title">Who I'am ?</h3>
          <p>
            Hello! I’m <strong>Tsehayinesh Belete</strong>, a passionate
            4th-year Computer Science student who loves turning ideas into
            reality through <strong>creative MERN stack development</strong>. I
            enjoy designing beautiful, user-friendly experiences that blend
            functionality with personality.
          </p>
          <p>
            I’ve gained strong skills in <strong>front-end and back-end</strong>{" "}
            development, problem solving, and UI/UX design — and I’m always
            excited to learn something new and challenge myself!
          </p>

          <div className="about-skills">
            <div className="skill-item">
              <FaLaptopCode /> MERN Developer
            </div>
            <div className="skill-item">
              <FaLightbulb /> Problem Solver
            </div>
            <div className="skill-item">
              <FaPalette /> Creative Designer
            </div>
            <div className="skill-item">
              <FaLaptopCode /> Web Developer
            </div>
            <div className="skill-item">
              <FaLaptopCode /> Full Stack
            </div>
          </div>

          <div className="skills-cta">
            <p>
              ✨Just me — a girl who loves code, design, and bringing ideas to
              life. Let’s{" "}
              <span onClick={() => setActivePage("contact")}>
                get in touch!
              </span>{" "}
              💌
            </p>
          </div>
        </div>
      </div>

      {/* CENTERED MORE BUTTON */}
      <div className="more-section-container">
        <p className="more-toggle" onClick={() => setShowMore(!showMore)}>
          {showMore ? "− Hide " : "More +"}
        </p>

        {showMore && (
          <>
            <div className="more-content">
              {moreItems.map((item, idx) => (
                <div key={idx} className={`more-item`}>
                  <div className="more-icon">{item.icon}</div>
                  <div className="more-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTONS AT THE BOTTOM */}
            <div className="more-buttons">
              <button
                className="hire-me-btn"
                onClick={() => setActivePage("contact")}
              >
                Hire Me 💌
              </button>
              <button
                className="see-projects-btn"
                onClick={() => setActivePage("projects")}
              >
                See Projects 🚀
              </button>
            </div>
          </>
        )}
      </div>
      <BackButton setActivePage={setActivePage} />
    </div>
  );
}

export default About;
