import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Navigation and Socials Group */}
        <div className="footer__nav-section">
          <div className="footer__pills">
            <a href="#expertises">Expertises</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer__social-row">
            <span className="label">Follow us</span>
            <a href="#" className="footer__social-icon brand-icon">GH</a>
            <a href="#" className="footer__social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="footer__social-icon"><i className="fab fa-tiktok"></i></a>
            <a href="#" className="footer__social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="footer__social-icon"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Contact Group */}
        <div className="footer__contact-info">
          <div className="footer__info-block">
            <h4>Contact</h4>
            <a href="mailto:info@gethyped.nl">info@gethyped.nl</a>
            <a href="tel:+31615337496">+31 6 1533 7496</a>
          </div>
          <div className="footer__info-block">
            <h4>Adres</h4>
            <p>Beltrumsestraat 6,<br />7141 AL Groenlo</p>
          </div>
        </div>

      </div>

      {/* Big outlined background logo */}
      <div className="footer__logo-massive">GET HYPED</div>

      {/* Meta links at the very bottom */}
      <div className="footer__bottom-meta">
        <span>© 2026 Get Hyped</span>
        <span>© Design by Fahad</span>
        <a href="#privacy">Privacyvoorwaarden</a>
      </div>
    </footer>
  );
};

export default Footer;