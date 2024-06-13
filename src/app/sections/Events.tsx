'use client';

import React, { useState, useEffect } from 'react';

// Import Swiper React Components 
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import SectionTitle from '../components/SectionTitle';
import EventsItem from '../components/EventsItem';

import './events.css';

// Embedded events data
const events = [
  {
    id: 1,
    image: '/assets/images/events/events-wedding.jpg',
    width: 800,
    height: 600,
    title: 'Wedding Events',
    content: `We organize all types of wedding events from Mehendi, Haldi to the actual wedding. We offer a wide variety of delicious food and beautiful decorations.`,
    details: [
      'Professional event planning and coordination.',
      'Customized menu with gourmet catering options.',
      'Elegant and personalized decorations.',
      'Experienced staff to ensure everything goes smoothly.',
    ],
    summary: 'Your special day, made unforgettable with our expertise.',
  },
  {
    id: 2,
    image: '/assets/images/events/event-birthday.jpg',
    width: 800,
    height: 600,
    title: 'Birthday Parties',
    content: `We organize birthday parties, from decorations to baking delicious cakes. We handle everything to make your celebration special.`,
    details: [
      'Creative and fun-themed decorations.',
      'Custom cakes and desserts.',
      'Fun activities and entertainment for all ages.',
      'Personalized party favors and gifts.',
    ],
    summary: 'A fun-filled celebration for all ages.',
  },
  {
    id: 3,
    image: '/assets/images/events/event-private.jpg',
    width: 800,
    height: 600,
    title: 'Private Events',
    content: `We organize private events like church events and similar gatherings. We provide comprehensive services to make your event memorable.`,
    details: [
      'Event planning tailored to your needs.',
      'High-quality audio and visual equipment.',
      'Catering services with a variety of menu options.',
      'Professional and friendly staff.',
    ],
    summary: 'Memorable events tailored to your needs.',
  },
  {
    id: 4,
    image: '/assets/images/events/event-custom.jpg',
    width: 800,
    height: 600,
    title: 'Custom Parties',
    content: `We organize custom parties like DJ events and DJ nights. We provide the DJ, the whole setup, and decorations to make your party unforgettable.`,
    details: [
      'Top-notch DJ services and equipment.',
      'Vibrant lighting and sound systems.',
      'Themed decorations for a great party atmosphere.',
      'Professional event hosts and entertainers.',
    ],
    summary: 'Unforgettable DJ nights with top-notch entertainment.',
  },
];

export default function Events() {
    const [slides, setSlides] = useState<any[]>(events);

    return (
        <section id="events" className="events">
            <div className="container" data-aos="fade-up">
                <SectionTitle
                    title="Events"
                    subtitle="We organize any events you want"
                />

                <div data-aos="fade-up" data-aos-delay="100">
                    <Swiper
                        spaceBetween={0}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: 'swiper-pagination',
                            type: 'bullets',
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        loop={true}
                        className="events-slider swiper-container"
                    >
                        {slides && slides.length > 0 && slides.map(slide => (
                            <SwiperSlide key={slide.id}>
                                <EventsItem item={slide} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
}
