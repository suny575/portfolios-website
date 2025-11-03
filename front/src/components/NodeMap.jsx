import React, { useState, useEffect } from "react";
import { FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaBrain } from "react-icons/fa";
import "../styles/NodeMap.css";

const nodes = [
  { key: "about", icon: <FaUser />, label: "About" },
  { key: "skills", icon: <FaBrain />, label: "Skills" },
  { key: "projects", icon: <FaProjectDiagram />, label: "Projects" },
  { key: "contact", icon: <FaEnvelope />, label: "Contact" }
];

function NodeMap({ setActivePage }) {
  const [positions, setPositions] = useState({});

  useEffect(() => {
    const posArr = [];
    const posObj = {};

    const getRandomPosition = (existingPositions) => {
      let top, left, safe;
      do {
        top = Math.random() * 70 + 10; // 10% - 80%
        left = Math.random() * 70 + 10;
        safe = true;
        existingPositions.forEach((pos) => {
          if (
            Math.abs(pos.top - top) < 10 && // increase min distance to prevent overlap
            Math.abs(pos.left - left) < 10
          ) {
            safe = false;
          }
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
    <div className="node-map">
      {nodes.map((node) => (
        <div
          key={node.key}
          className="node"
          style={positions[node.key] || {}}
          onClick={() => setActivePage(node.key)} // ✅ fixed
        >
          <div className="icon">{node.icon}</div>
          <div className="label">{node.label}</div>
        </div>
      ))}
    </div>
  );
}

export default NodeMap;
