'use client';
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import GalleryItem from '../components/GalleryItem';

// Embedded gallery data
const galleryData = [
  {
    id: 1,
    image: '/assets/images/gallery/gallery1.jpg',
  },
  {
    id: 2,
    image: '/assets/images/gallery/gallery2.jpg',
  },
  {
    id: 3,
    image: '/assets/images/gallery/gallery3.jpg',
  },
  {
    id: 4,
    image: '/assets/images/gallery/gallery4.jpg',
  },
  {
    id: 5,
    image: '/assets/images/gallery/gallery5.jpg',
  },
  {
    id: 6,
    image: '/assets/images/gallery/gallery6.jpg',
  },
  {
    id: 7,
    image: '/assets/images/gallery/gallery7.jpg',
  },
  {
    id: 8,
    image: '/assets/images/gallery/gallery8.jpg',
  },
];

export default function Gallery() {
  const [images, setImages] = useState(galleryData);

  return (
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Gallery" subtitle="Some photos of Our Events" />
      </div>
      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          {images.map((image) => <GalleryItem key={image.id} item={image} />)}
        </div>
      </div>
    </section>
  );
}
