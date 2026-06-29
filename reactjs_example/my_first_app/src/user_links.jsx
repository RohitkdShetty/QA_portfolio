import React, { useState } from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaFilePdf
} from "react-icons/fa";

export const UserLinks = () => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="social-icons">

      <a
        href="https://www.instagram.com/shetty_rohit24/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>

      <a
        href="https://github.com/RohitkdShetty"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/rohit-shetty-451ab728a/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      
      <a
      href="/Resume_Rohit_shetty_.pdf"
      download
      className="resume-icon"
      title="Download Resume"
      >
      <FaFilePdf />
      
    </a>
      {/* Phone Icon */}
      <div className="phone-container">
        <button
          className="phone-icon"
          onClick={() => setShowPhone(!showPhone)}
        >
          <FaPhone />
        </button>

        {showPhone && (
          <div className="phone-number">
            +91 8850512445
          </div>
        )}
      </div>

    </div>
  );
};
