import React from 'react';
import './CTA.css';

const CTA = ({ onContactOpen }) => {
  return (
    <section className="cta" id="contact">
      <div className="container cta__inner">
        <div className="cta__glow" />
        <span className="section-label">Let's get started</span>
        <h2 className="cta__title">Let's Get Hyped!</h2>
        <p className="cta__sub">
          Klaar om jouw merk in beweging te brengen? We horen graag van je.
        </p>
        <div className="cta__actions">
          <a href="mailto:info@gethyped.nl" className="cta__btn cta__btn--ghost">
            Mail ons direct
          </a>
          <button className="cta__btn cta__btn--primary" onClick={onContactOpen}>
            Get Results 🔥
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
