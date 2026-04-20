import React from 'react';
import './Brands.css';

// Importing your local assets
import brand3 from '../assets/image/3.png';
import brand4 from '../assets/image/4.png';
import brand5 from '../assets/image/5.png';
import brand6 from '../assets/image/6.png';
import brand7 from '../assets/image/7.png';
import brand8 from '../assets/image/8.png';

const brands = [
  { name: 'Brand 3', logo: brand3 },
  { name: 'Brand 4', logo: brand4 },
  { name: 'Brand 5', logo: brand5 },
  { name: 'Brand 6', logo: brand6 },
  { name: 'Brand 7', logo: brand7 },
  { name: 'Brand 8', logo: brand8 },
];

const Brands = () => {
  return (
    <section className="brands">
      <div className="container brands__header-wrap">
        <h2 className="brands__title">These brands <br/>got hyped.</h2>
      </div>

      <div className="brands__ticker-wrap">
        <div className="brands__ticker">
          {/* Double the list for a seamless loop */}
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="brands__card">
              <img src={brand.logo} alt={brand.name} className="brands__img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;