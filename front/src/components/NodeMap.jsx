import React, { useState, useEffect } from "react";
import {
  FaUserAstronaut,
  FaProjectDiagram,
  FaEnvelopeOpenText,
  FaBrain,
} from "react-icons/fa";
import "../styles/NodeMap.css";

const nodes = [
  { key: "about", icon: <FaUserAstronaut />, label: "About" },
  { key: "skills", icon: <FaBrain />, label: "Skills" },
  { key: "projects", icon: <FaProjectDiagram />, label: "Projects" },
  { key: "contact", icon: <FaEnvelopeOpenText />, label: "Contact" },
];

function NodeMap({ setActivePage }) {
  const [positions, setPositions] = useState({});

  useEffect(() => {
    const posArr = [];
    const posObj = {};

    const getRandomPosition = (existingPositions) => {
      let top, left, safe;
      do {
        top = Math.random() * 60 + 20;
        left = Math.random() * 60 + 20;
        safe = true;
        existingPositions.forEach((pos) => {
          if (Math.abs(pos.top - top) < 12 && Math.abs(pos.left - left) < 12)
            safe = false;
        });
      } while (!safe);
      return { top: `${top}%`, left: `${left}%` };
    };

    nodes.forEach((node) => {
      const p = getRandomPosition(posArr);
      posObj[node.key] = p;
      posArr.push({ top: parseFloat(p.top), left: parseFloat(p.left) });
    });

    setPositions(posObj);
  }, []);

  return (
    <div className="node-map-container">
      <svg className="connection-lines">
        {nodes.map((nodeA, i) =>
          nodes.map((nodeB, j) =>
            i < j && positions[nodeA.key] && positions[nodeB.key] ? (
              <line
                key={`${i}-${j}`}
                x1={positions[nodeA.key].left}
                y1={positions[nodeA.key].top}
                x2={positions[nodeB.key].left}
                y2={positions[nodeB.key].top}
                className="line"
              />
            ) : null
          )
        )}
      </svg>

      {nodes.map((node, index) => (
        <div
          key={node.key}
          className="node glow-orb"
          style={{
            ...positions[node.key],
            animationDelay: `${index * 0.2}s`,
          }}

        onClick={() => {
  setActivePage(node.key);
  window.scrollTo({ top: 0, behavior: "smooth" });
}}

        >
          <div className="icon">{node.icon}</div>
          <div className="label">{node.label}</div>
        </div>
      ))}
    </div>
  );
}

export default NodeMap;
