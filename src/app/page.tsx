import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import WhyUs from './sections/WhyUs';
import Menu from './sections/Menu';
import Events from './sections/Events';
import Gallery from './sections/Gallery';
import Booking from './sections/Booking';
import Contact from './sections/Contact';


export default function Home() {
  return (
    <>
    <Hero/>
    <main id="main">
      <About />
      <WhyUs/>
      <Menu />
      <Events />
      <Gallery />
      <Booking />
      <Contact />
    </main>
    </>
  );
}
