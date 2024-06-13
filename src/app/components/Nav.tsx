import React, { useState } from 'react';
import './nav.css';

interface NavItem {
    id: number;
    name: string;
    target: string;
    active: boolean;
}

// Embedded nav data
const navItems: NavItem[] = [
    { id: 1, name: 'Home', target: 'hero', active: false },
    { id: 2, name: 'About', target: 'about', active: false },
    { id: 3, name: 'Menu', target: 'menu', active: false },
    { id: 4, name: 'Events', target: 'events', active: false },
    { id: 5, name: 'Gallery', target: 'gallery', active: false },
    { id: 6, name: 'Contact', target: 'contact', active: false },
];

export default function Nav() {
    const [navList, setNavList] = useState<NavItem[]>(navItems);
    const [open, setOpen] = useState<boolean>(false);

    const handleToggleMenu = () => {
        setOpen(!open);
    };

    const handleScrollTo = (target: string) => {
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setOpen(false);
        }
    };

    return (
        <nav id="navbar" className={`navbar order-last order-lg-0 ${open ? 'navbar-mobile' : ''}`}>
            <ul>
                {navList.map(nav => (
                    <li key={nav.id}>
                        <a
                            className={`nav-link scrollto ${nav.active ? 'active' : ''}`}
                            onClick={() => handleScrollTo(nav.target)}
                        >
                            {nav.name === 'Home' ? (
                                <i className="bi bi-house-door-fill"></i>
                            ) : (
                                nav.name
                            )}
                        </a>
                    </li>
                ))}
            </ul>
            <i
                className={`mobile-nav-toggle bi ${open ? 'bi-x' : 'bi-list'}`}
                onClick={handleToggleMenu}
            ></i>
        </nav>
    );
}
