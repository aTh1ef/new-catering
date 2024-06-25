'use client';

import React, { useState, useEffect } from 'react';
import './menu.css';
import SectionTitle from '../components/SectionTitle';
import MenuItem from '../components/MenuItem';

// Define the type for the menu data
interface MenuData {
    id: number;
    name: string;
    category: string; 
    imageUrl: string;
}

// Define the type for the filters
interface Filter {
    id: number;
    name: string;
    category: string;
    active: boolean;
}

// Move the data directly into the file
const menuData: MenuData[] = [
    {
        id: 1,
        name: 'Mutton Gravy (Red)',
        category: 'mutton',
        imageUrl: '/assets/images/menu/mutton gravy red.jpg',
    },
    {
        id: 2,
        name: 'Mutton Gravy (Green)',
        category: 'mutton',
        imageUrl: '/assets/images/menu/mutton gravy green.jpg',
    },
    {
        id: 3,
        name: 'Mutton Kurma',
        category: 'mutton',
        imageUrl: '/assets/images/menu/mutton kurma.jpg',
    },
    {
        id: 4,
        name: 'Mutton Sukka',
        category: 'mutton',
        imageUrl: '/assets/images/menu/mutton sukka.jpg',
    },
    {
        id: 5,
        name: 'Mutton Pepper',
        category: 'mutton',
        imageUrl: '/assets/images/menu/mutton pepper.jpg',
    },
    {
        id: 6,
        name: 'Mutton Garlic',
        category: 'mutton',
        imageUrl: '/assets/images/menu/mutton garlic.jpg',
    },
    {
        id: 7,
        name: 'Mutton Stew',
        category: 'mutton',
        imageUrl: '/assets/images/menu/mutton stew.jpg',
    },
    {
        id: 8,
        name: 'Mutton Biryani (Fry)',
        category: 'mutton',
        imageUrl: '/assets/images/menu/mutton biryani.jpg',
    },
    {
        id: 9,
        name: 'Mutton Polov',
        category: 'mutton',
        imageUrl: '/assets/images/menu/mutton polov.jpg',
    },
    {
        id: 11,
        name: 'Mutton Pepper Fry',
        category: 'mutton',
        imageUrl: '/assets/images/menu/mutton pepper fry.png',
    },
    {
        id: 12,
        name: 'Mutton Ginger',
        category: 'mutton',
        imageUrl: '/assets/images/menu/mutton ginger.jpg',
    },
    {
        id: 13,
        name: 'Mutton Chops',
        category: 'mutton',
        imageUrl: '/assets/images/menu/mutton chops.jpg',
    },
    {
        id: 14,
        name: 'Chicken Gravy (Red)',
        category: 'chicken',
        imageUrl: '/assets/images/menu/chicken red masala.jpg',
    },
    {
        id: 15,
        name: 'Chicken Gravy (Green)',
        category: 'chicken',
        imageUrl: '/assets/images/menu/chicken coriander.jpg'
    },
    {
        id: 16,
        name: 'Chicken Sukka',
        category: 'chicken',
        imageUrl: '/assets/images/menu/chicken sukka.webp',
    },
    {
        id: 17,
        name: 'Chicken 65',
        category: 'chicken',
        imageUrl: '/assets/images/menu/chicken 65.jpg',
    },
    {
        id: 18,
        name: 'Chicken Pepper',
        category: 'chicken',
        imageUrl: '/assets/images/menu/chicken pepper.jpg',
    },
    {
        id: 19,
        name: 'Chicken Garlic',
        category: 'chicken',
        imageUrl: '/assets/images/menu/chicken garlic.jpg',
    },
    {
        id: 20,
        name: 'Chicken Manchurian',
        category: 'chicken',
        imageUrl: '/assets/images/menu/chicken manchurian.jpg',
    },
    {
        id: 21,
        name: 'Chicken Chilli',
        category: 'chicken',
        imageUrl: '/assets/images/menu/chicken chilli.jpg',
    },
    {
        id: 22,
        name: 'Chicken Kebab',
        category: 'chicken',
        imageUrl: '/assets/images/menu/chicken kebab.jpg',
    },
    {
        id: 23,
        name: 'Chicken Lollipop',
        category: 'chicken',
        imageUrl: '/assets/images/menu/chicken lollipop.jpg',
    },
    
    {
        id: 25,
        name: 'Chicken Ghee Roast',
        category: 'chicken',
        imageUrl: '/assets/images/menu/chicken ghee roast.jpg',
    },
    {
        id: 26,
        name: 'Lemon Chicken',
        category: 'chicken',
        imageUrl: '/assets/images/menu/lemon chicken.jpg',
        
    },
    {
        id: 27,
        name: 'Chicken Hyderabad',
        category: 'chicken',
        imageUrl: '/assets/images/menu/chicken hyderabadi.jpg',
    },
    {
        id: 28,
        name: 'Chicken Kundapur',
        category: 'chicken',
        imageUrl: '/assets/images/menu/chicken kundapura.jpg',
    },
    {
        id: 29,
        name: 'Chicken Tandoori',
        category: 'chicken',
        imageUrl: '/assets/images/menu/chciken tandoori.jpg',
    },
    {
        id: 30,
        name: 'Chicken Coriander',
        category: 'chicken',
        imageUrl: '/assets/images/menu/chicken coriander.jpg',
    },
    {
        id: 31,
        name: 'Chicken Pulimunchi',
        category: 'chicken',
        imageUrl: '/assets/images/menu/chicken pullimunchi.jpg',
    },
    {
        id: 32,
        name: 'Pork Bafath',
        category: 'pork',
        imageUrl: '/assets/images/menu/pork bafath.jpg',
    },
    {
        id: 33,
        name: 'Pork Chilly (Chinese)',
        category: 'pork',
        imageUrl: '/assets/images/menu/pork chilly.jpg',
    },
    {
        id: 34,
        name: 'Pork Chilly (Indian)',
        category: 'pork',
        imageUrl: '/assets/images/menu/pork chilli indian.jpg',
    },
    {
        id: 35,
        name: 'Pork Hindad',
        category: 'pork',
        imageUrl: '/assets/images/menu/pork hindad.jpg',
    },
    {
        id: 36,
        name: 'Pork Garlic',
        category: 'pork',
        imageUrl: '/assets/images/menu/pork garlic.jpg',
    },
    {
        id: 37,
        name: 'Pork Pepper',
        category: 'pork',
        imageUrl: '/assets/images/menu/pork pepper.jpg',
    },
    {
        id: 38,
        name: 'Pork Kurgu',
        category: 'pork',
        imageUrl: '/assets/images/menu/pork kurgu.jpg',
    },
    {
        id: 39,
        name: 'Pork Roast',
        category: 'pork',
        imageUrl: '/assets/images/menu/pork roast.jpg',
    },
    {
        id: 40,
        name: 'Pork Surpatail',
        category: 'pork',
        imageUrl: '/assets/images/menu/pork surpatail.jpg',
    },
    {
        id: 41,
        name: 'Prawns Lollipop',
        category: 'prawn',
        imageUrl: '/assets/images/menu/prawns lollipop.jpg',
    },

    {
        id: 42,
        name: 'Prawns Pepper',
        category: 'prawn',
        imageUrl: '/assets/images/menu/prawns pepper.jpg',
    },
    {
        id: 43,
        name: 'Prawns Gasi',
        category: 'prawn',
        imageUrl: '/assets/images/menu/prawns gasi.jpg',
    },
    {
        id: 44,
        name: 'Prawns Fried Rice',
        category: 'prawn',
        imageUrl: '/assets/images/menu/prawns fired rice.jpg',
    },
    {
        id: 45,
        name: 'Prawns Noodles',
        category: 'prawn',
        imageUrl: '/assets/images/menu/prawns noodles.jpg',
    },
    {
        id: 46,
        name: 'Lime',
        category: 'juices',
        imageUrl: '/assets/images/menu/lime juice.jpg',
    },
    {
        id: 47,
        name: 'Mango',
        category: 'juices',
        imageUrl: '/assets/images/menu/mango juice.jpg',
    },
    {
        id: 48,
        name: 'Pineapple',
        category: 'juices',
        imageUrl: '/assets/images/menu/pineapple juice.avif',
    },
    {
        id: 49,
        name: 'Orange',
        category: 'juices',
        imageUrl: '/assets/images/menu/orange juice.jpg',
    },
    {
        id: 50,
        name: 'Watermelon',
        category: 'juices',
        imageUrl: '/assets/images/menu/watermelon juice.jpg',
    },
    {
        id: 51,
        name: 'Pulp Mango',
        category: 'juices',
        imageUrl: '/assets/images/menu/pulp mango juice.webp',
    },
    {
        id: 52,
        name: 'Pista',
        category: 'juices',
        imageUrl: '/assets/images/menu/pista juice.jpg',
    },
    {
        id: 53,
        name: 'Badam',
        category: 'juices',
        imageUrl: '/assets/images/menu/badam.jpg',
    },
    {
        id: 54,
        name: 'Vanilla',
        category: 'icecreams',
        imageUrl: '/assets/images/menu/vanilla.webp',
    },
    {
        id: 55,
        name: 'Butterscotch',
        category: 'icecreams',
        imageUrl: '/assets/images/menu/butterscotch.jpg',
    },
    {
        id: 56,
        name: 'Mango',
        category: 'icecreams',
        imageUrl: '/assets/images/menu/mango.jpg',
    },
    {
        id: 57,
        name: 'Chocolate',
        category: 'icecreams',
        imageUrl: '/assets/images/menu/chcolate.jpg',
    },
    {
        id: 58,
        name: 'Fruit Salad',
        category: 'icecreams',
        imageUrl: '/assets/images/menu/fruitsalad.avif',
    },
];

// Example filter data
const filters: Filter[] = [
    { id: 1, name: 'Mutton', category: 'mutton', active: false },
    { id: 2, name: 'Chicken', category: 'chicken', active: false },
    { id: 3, name: 'Pork', category: 'pork', active: false },
    { id: 4, name: 'Prawn', category: 'prawn', active: false },
    { id: 5, name: 'Juices', category: 'juices', active: false },
    { id: 6, name: 'Ice Creams', category: 'icecreams', active: false },
];

export default function Menu() {
    const [items, setItems] = useState<MenuData[]>([]);
    const [activeFilter, setActiveFilter] = useState<string>('mutton');
    const [selectedFilter, setSelectedFilter] = useState<string>('mutton');

    useEffect(() => {
        setItems(menuData.filter(item => item.category === activeFilter));
    }, [activeFilter]);

    const handleFilterChange = (category: string) => {
        setActiveFilter(category);
        setSelectedFilter(category);
    };

    return (
        <section id="menu" className="menu section-bg">
            <div className="container" data-aos="fade-up">
                <SectionTitle title="Our Menu" subtitle="Check Our Tasty Menu" />

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="menu-filters">
                            {filters.map((filter) => (
                                <li
                                    key={filter.id}
                                    className={`${filter.category === activeFilter ? 'filter-active' : ''} ${
                                        filter.category === selectedFilter ? 'selected' : ''
                                    }`}
                                    onClick={() => handleFilterChange(filter.category)}
                                >
                                    {filter.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">
                    {items.length > 0 ? (
                        items.map((item: MenuData) => <MenuItem key={item.id} item={item} />)
                    ) : (
                        <div>No items found</div>
                    )}
                </div>
            </div>
        </section>
    );
}