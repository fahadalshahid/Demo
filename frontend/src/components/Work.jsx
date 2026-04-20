import React from 'react';
import './Work.css';

// Ensure these local paths are correct for your project
import img1 from '../assets/image/1.jpg';
import img2 from '../assets/image/2.jpg';
import img3 from '../assets/image/3.png';

const projects = [
  { id: 1, client: 'Bullit', title: 'Van nul naar vol, binnen 3 weken', color: '#ff5c35', image: img1 },
  { id: 2, client: 'Roasta', title: 'Zacht in smaak, sterk in beeld', color: '#0084ff', image: img2 },
  { id: 3, client: 'Loco', title: "Content die écht smaakt (en raakt)", color: '#2ecc71', image: img3 },
];

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="container">
        <div className="work__header">
          <h2 className="work__title">Content dat scoort.</h2>
          <p className="work__sub">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep.
          </p>
          <a href="#work" className="work__cta">
            Bekijk al ons werk <span className="work__cta-icon">→</span>
          </a>
        </div>

        <div className="work__grid">
          {projects.map((p) => (
            <div key={p.id} className="work__card" style={{ '--accent': p.color }}>
              <img src={p.image} alt={p.client} className="work__card-img" />
              <div className="work__floating-block">
                <div>
                  <h3 className="work__card-title">{p.title}</h3>
                  <span className="work__client-tag">{p.client}</span>
                </div>
                <div className="work__round-button">
                  <svg className="work__arrow-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;