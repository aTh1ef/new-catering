'use client';

import React from 'react';
import './heroBtn.css';

interface HeroBtnProps {
  name: string;
  target: string;
}

const HeroBtn: React.FC<HeroBtnProps> = ({ name, target }) => {
  const handleScrollTo = (target: string) => {
    if (typeof window !== 'undefined') {
      const targetElement = document.getElementById(target);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <a
      onClick={() => handleScrollTo(target)}
      className={`btn-hero animated fadeInUp scrollto ${
        name.includes('book') ? 'ms-4' : ''
      }`}
    >
      {name}
    </a>
  );
};

export default HeroBtn;
