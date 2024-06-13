// AppBtn.tsx

import React from 'react';
import './appBtn.css';

export default function AppBtn({ name }: { name: string }) {
  const handleScrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      className="app-btn scrollto d-none d-lg-flex"
      onClick={() => handleScrollTo('book-an-event')}
    >
      {name}
    </a>
  );
}
