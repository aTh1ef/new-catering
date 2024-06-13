import React from 'react';

// Define the type for the item prop
type WhyUsItem = {
  id: number;
  title: string;
  content: string;
};

function WhyUsCard({ item }: { item: WhyUsItem }) {
  return (
    <div className="col-lg-4 mt-4 mt-lg-0">
      <div className="box" data-aos="zoom-in" data-aos-delay="200">
        <span>{item.id}</span>
        <h4>{item.title}</h4>
        <p>{item.content}</p>
      </div>
    </div>
  );
}

export default WhyUsCard;
