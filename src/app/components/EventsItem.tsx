import React from 'react';
import './eventsItem.css';
import Image from 'next/image';

export default function EventsItem({
    item,
}: {
    item: {
    id: number;
    image: string;
    width: number;
    height: number;
    title: string;
    content: string;
    details: string[];
    summary: string;
};
}) {
  return (
    <div className="row event-item">
        <div className="col-lg-6">
            <Image src={item.image} width={item.width} height={item.height} className="img-fluid" alt="" />
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 content">
            <h3>{item.title}</h3>
            <p className="fst-italic">{item.content}</p>
            <ul>
                {item.details.length > 0 &&
                item.details.map((detail, index) => (
                    <li key={index}>
                        <i className="bi bi-check2-circle"></i> {detail}
                    </li>
                ))}
            </ul>
            <p>{item.summary}</p>
        </div>
    </div>
  ); 
}
