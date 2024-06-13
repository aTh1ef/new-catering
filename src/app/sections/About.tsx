'use client';

import React, { useEffect, useState } from 'react';
import aboutImage from '../../../public/assets/images/about.jpg';
import './about.css';
import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';

export default function About() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    let timer1 = setInterval(() => {
      setCount1((prevCount) => Math.min(prevCount + 1, 20)); // Limit to 20
    }, 100);

    let timer2 = setInterval(() => {
      setCount2((prevCount) => Math.min(prevCount + 5, 4000)); // Limit to 4000
    }, 10);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="about-img">
              <Image src={aboutImage} alt="About Us" />
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <div className="about-title">
              <SectionTitle title="About Us" subtitle="Learn more about us" />
            </div>
            <p>
              Embark on a culinary journey with Tellis Caterers, where excellence meets taste since 1998! Founded by Marcel Tellis, we take pride in being one of the premier catering and event organizing services in and around Mangalore. With over two decades of experience under our belt, we&apos;ve mastered the art of crafting unforgettable experiences for any occasion.
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle"></i> From wedding celebrations to grand custom parties, we&apos;ve successfully conducted and catered to over 5000 events, earning us a reputation for impeccable service and delectable cuisine.
              </li>
              <li>
                <i className="bi bi-check-circle"></i> At Tellis Caterers, we don&apos;t just create events; we curate moments that last a lifetime, where every detail is meticulously planned and executed with passion and precision.
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Join us on a journey of culinary and event planning excellence, where every occasion is transformed into an unforgettable experience.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
