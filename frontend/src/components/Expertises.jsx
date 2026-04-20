import React from 'react';
import { motion } from 'framer-motion';
import './Expertises.css';

const expertises = [
  {
    num: '01',
    title: 'Social strategy',
    subtitle: 'Slimme strategie. Sterke start.',
    desc: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.',
    link: '#contact',
    color: '#fdfdfd', // lighter off-white
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600',
  },
  {
    num: '02',
    title: 'Content creation',
    subtitle: 'Content die opvalt en raakt.',
    desc: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
    link: '#contact',
    color: '#ffe6f7', // lighter pink
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600',
  },
  {
    num: '03',
    title: 'Activation',
    subtitle: 'Zichtbaar waar en wanneer het telt.',
    desc: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen.',
    link: '#contact',
    color: '#66f7a1', // lighter green
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600',
  },
  {
    num: '04',
    title: 'Data',
    subtitle: 'Inzichten die impact maken.',
    desc: 'We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.',
    link: '#contact',
    color: '#66b2ff', // lighter blue
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600',
  },
];

const Expertises = () => {
  return (
    <section className="expertises" id="expertises">
      {expertises.map((e, i) => (
        <ExpertiseCard key={e.num} data={e} index={i} />
      ))}
    </section>
  );
};

const ExpertiseCard = ({ data, index }) => {
  return (
    <motion.div 
      className="expertise-slide"
      style={{ 
        backgroundColor: data.color, 
        top: `calc(10% + ${index * 40}px)` 
      }}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ 
        duration: 1, 
        ease: "easeOut", 
        delay: 0.2 * index, 
        type: "spring", 
        stiffness: 80 
      }}
    >
      <div className="container">
        <div className="slide-top">
          <div className="label-tag">Expertise</div>
          <div className="slide-num">{data.num}</div>
        </div>

        <h2 className="slide-main-title">{data.title}</h2>

        <div className="slide-content">
          <div className="content-left">
            <h3>{data.subtitle}</h3>
            <p>{data.desc}</p>
            <a href={data.link} className="slide-btn">
              Meer over {data.title.toLowerCase()} <span className="arrow">→</span>
            </a>
          </div>

          <div className="content-right">
            <div className="img-frame">
              <img src={data.image} alt={data.title} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Expertises;
