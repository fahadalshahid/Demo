import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        {/* Top Section: Full Width Headline */}
        <h2 className="about__headline">
          Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
        </h2>

        {/* Bottom Section: Three Columns */}
        <div className="about__content-row">
          <div className="about__col-left">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=800" 
              alt="Portrait" 
              className="about__portrait" 
            />
          </div>

          <div className="about__col-center">
            <p className="about__body">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. 
              Zo weet je precies wat werkt en wat niet.<br />
              Nooit meer content zonder strategie.<br />
              Nooit meer content zonder resultaat.
            </p>
            <a href="#expertises" className="about__cta-button">
              <span>Leer ons kennen</span>
              <div className="about__cta-icon">→</div>
            </a>
          </div>

          <div className="about__col-right">
            <button className="about__download-btn" aria-label="Download">
              <span className="about__download-arrow">↓</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;