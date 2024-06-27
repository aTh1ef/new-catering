'use client';

import React, { useEffect } from 'react';
import './hero.css';
import HeroBtn from '../components/HeroBtn';

export default function Hero() {
  useEffect(() => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      video.setAttribute('playsinline', '');
      video.setAttribute('muted', '');
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented. Try to load the video again.
          video.muted = true;
          video.play();
        });
      }
    }

    // Adding event listener for user interaction
    const handleUserInteraction = () => {
      if (video && video.paused) {
        video.play().catch(() => {
          video.muted = true;
          video.play();
        });
      }
    };

    document.addEventListener('click', handleUserInteraction);
    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <section id="hero" className="d-flex align-items-center justify-content-center">
      <video id="hero-video" autoPlay muted loop playsInline poster="/assets/images/w.jpg" >
        <source src="/assets/videos/winefinal.mp4" type="video/mp4" />
        <source src="/assets/videos/winefinal.webm" type="video/webm" />
        <source src="/assets/videos/winefinal.ogv" type="video/ogg" />
        Your browser does not support the video tag.
      </video>

      <div className="container text-center" data-aos="zoom-in" data-aos-delay="100">
        <div className="content">
          <h1>
            Welcome to <span>Tellis Caterers</span>
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
