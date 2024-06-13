'use client';
import React, { useState, useEffect } from 'react';
import './header.css';
import AppBtn from './AppBtn';
import Nav from './Nav';
import Image from 'next/image';

// Import the image using the import.meta.glob utility
import logoFinalImage from '/public/assets/images/logofinal.png';

export default function Header() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`fixed-top d-flex align-items-center ${
        scroll > 100 ? 'header-scrolled' : ''
      }`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        {/* Use the imported image and its dimensions */}
        <a href="/" className="logo me-auto me-lg-0">
          <Image
            src={logoFinalImage}
            alt="Tellis Catering"
            className="img-fluid"
            width={logoFinalImage.width}
            height={logoFinalImage.height}
          />
        </a>
        <Nav />
        <AppBtn name="book an event" />
      </div>
    </header>
  );
}