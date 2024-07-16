import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './FooterBar.css';

const FooterBar = () => {
  return (
    <div className="footer-bar">
      <a href="https://github.com/KatherineHu-2025" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/katherine-hu-888a9422a/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://www.instagram.com/katherine_huuuuu/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
};

export default FooterBar;
