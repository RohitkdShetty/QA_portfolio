import React, { useState } from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaFilePdf,
  FaFileAlt
} from "react-icons/fa";

export const UserLinks = () => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="social-icons">

      <a
        href="https://www.instagram.com/shetty_rohit24/"
        target="_blank"
        rel="noreferrer"
        title="Instagram"
      >
        <FaInstagram />
      </a>

      <a
        href="https://github.com/RohitkdShetty"
        target="_blank"
        rel="noreferrer"
        title="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/rohit-shetty-451ab728a/"
        target="_blank"
        rel="noreferrer"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <button
    className="icon-btn"
    onClick={() => window.open('/Resume_Rohit_shetty_.pdf', '_blank')}
    title="View Resume"
>
     <FaFileAlt />
       </button>
      
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
          title="View Phone Number"
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
