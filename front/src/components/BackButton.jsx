import React from "react";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import "../styles/BackButton.css";

function BackButton({ setActivePage }) {
  return (
    <div className="back-btn-container">
      <button className="back-btn" onClick={() => setActivePage("home")}>
        <FaArrowLeft className="back-icon" />  Home
        <span className="sparkle"><FaStar /></span>
      </button>
    </div>
  );
}

export default BackButton;
