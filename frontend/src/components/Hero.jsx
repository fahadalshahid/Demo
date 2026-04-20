import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = ({ onContactOpen }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 200);
  }, []);

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__inner">
          <h1 className="hero__title" ref={titleRef}>
            Get Hyped. Get<br />
            Noticed. Get Results.
          </h1>

          <p className="hero__sub">
            Klaar met gokken op content die niets oplevert?
          </p>

          <div className="hero__tiles">
            {/* Tile 1: Blue Stats */}
            <div className="hero__tile hero__tile--blue">
              <span className="hero__tile-number">10M+</span>
              <div className="hero__tile-footer">
                <span className="hero__tile-label">Organische views</span>
                <span className="hero__tile-desc">Groei door slimme content</span>
              </div>
            </div>

            {/* Tile 2: Image */}
            <div className="hero__tile hero__tile--image">
              <img src="https://picsum.photos/600/800?random=1" alt="Portfolio" />
            </div>

            {/* Tile 3: Green Stats */}
            <div className="hero__tile hero__tile--green">
              <span className="hero__tile-number">30+</span>
              <div className="hero__tile-footer">
                <span className="hero__tile-label">Merken geholpen</span>
                <span className="hero__tile-desc">Van start-up tot multinational</span>
              </div>
            </div>

            {/* Tile 4: Image */}
            <div className="hero__tile hero__tile--image">
              <img src="https://picsum.photos/600/800?random=2" alt="Portfolio" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;