'use client';

import React from 'react';
import './hero.css';
import HeroBtn from '../components/HeroBtn';

export default function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center">
      <video autoPlay muted loop>
        <source src="/assets/videos/winefinal.mp4" type="video/mp4" />
      </video>

      <div className="container text-center" data-aos="zoom-in" data-aos-delay="100">
        <div className="content">
          <h1>
            Welcome to <span>Tellis Catering</span>
          </h1>
          <h2>Serving Exceptional Cuisine and Unmatched Hospitality Since 1998</h2>
          <div className="btns">
            <HeroBtn name="Our Menu" target="menu" />
            <HeroBtn name="Contact Us" target="book-an-event" />
          </div>
        </div>
      </div>
    </section>
  );
}
