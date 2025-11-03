import React, { useState, useEffect } from 'react';
import '../styles/NodeItem.css';

function NodeItem({ node, position, onClick }) {
  const [floatDir, setFloatDir] = useState(1);

  // simple up/down float animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatDir(prev => prev * -1);
    }, 2000 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="node-item" 
      style={{
        backgroundColor: node.color,
        top: position?.top,
        left: position?.left,
        transform: `translateY(${floatDir * 5}px)`
      }}
      onClick={onClick}
    >
      {node.name}
    </div>
  );
}

export default NodeItem;
