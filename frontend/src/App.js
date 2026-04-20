import React, { useState } from 'react';
import './assets/css/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertises from './components/Expertises';
import Work from './components/Work';
import Brands from './components/Brands';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Navbar onContactOpen={() => setModalOpen(true)} />
      <Hero onContactOpen={() => setModalOpen(true)} />
      <About />
      <Expertises />
      <Work />
      <Brands />
      <CTA onContactOpen={() => setModalOpen(true)} />
      <Footer onContactOpen={() => setModalOpen(true)} />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
