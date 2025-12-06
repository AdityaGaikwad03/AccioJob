import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTrash, faSave, faUpload } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ onReset, onSave, onLoad }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">CodeCraft</span>
      </div>

      <div className="nav-right">
        
        <button className="nav-btn" onClick={onLoad}>
          <FontAwesomeIcon icon={faUpload} /> Load
        </button>

        <button className="nav-btn" onClick={onReset}>
          <FontAwesomeIcon icon={faTrash} /> Reset
        </button>

        <button className="nav-btn" onClick={onSave}>
          <FontAwesomeIcon icon={faSave} /> Save
        </button>
      </div>
    </nav>
  );
}
