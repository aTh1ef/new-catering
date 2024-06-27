'use client';

import React, { useState } from 'react';
import './whyUs.css';
import WhyUsCard from '../components/WhyUsCard';
import SectionTitle from '../components/SectionTitle';

// Define the type for the data items
type WhyUsItem = {
  id: number;
  title: string;
  content: string;
};

// Move the data directly into the file and use the defined type
const whyUsData: WhyUsItem[] = [
  {
    id: 1,
    title: 'Decades of Experience',
    content: `With over 20 years of experience in catering, serving, and event management, we bring unmatched expertise to every occasion.`,
  },
  {
    id: 2,
    title: 'Excellence in Mangalore',
    content: `Proudly recognized as one of the best in Mangalore, our commitment to quality and service sets us apart.`,
  },
  {
    id: 3,
    title: 'Amazing Food',
    content: `We cook incredible food using only the finest natural ingredients, ensuring every bite is delightful.`,
  },
];

const WhyUs: React.FC = () => {
  // Directly set the initial state with the data
  const [data, setData] = useState<WhyUsItem[]>(whyUsData);

  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <SectionTitle title="why us" subtitle="Why Choose Our Catering" />
        <div className="row" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {data.map((item) => (
            <WhyUsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
