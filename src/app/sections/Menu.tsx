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
    },
    {
        id: 2,
        name: 'Mutton Gravy (Green)',
        category: 'mutton',
    },
    {
        id: 3,
        name: 'Mutton Kurma',
        category: 'mutton',
    },
    {
        id: 4,
        name: 'Mutton Sukka',
        category: 'mutton',
    },
    {
        id: 5,
        name: 'Mutton Pepper',
        category: 'mutton',
    },
    {
        id: 6,
        name: 'Mutton Garlic',
        category: 'mutton',
    },
    {
        id: 7,
        name: 'Mutton Stoo',
        category: 'mutton',
    },
    {
        id: 8,
        name: 'Mutton Biryani (Fry)',
        category: 'mutton',
    },
    {
        id: 9,
        name: 'Mutton Pulav',
        category: 'mutton',
    },
    {
        id: 10,
        name: 'Mutton Lollypop',
        category: 'mutton',
    },
    {
        id: 11,
        name: 'Mutton Pepper Fry',
        category: 'mutton',
    },
    {
        id: 12,
        name: 'Mutton Ginger',
        category: 'mutton',
    },
    {
        id: 13,
        name: 'Mutton Chops',
        category: 'mutton',
    },
    {
        id: 14,
        name: 'Chicken Gravy (Red)',
        category: 'chicken',
    },
    {
        id: 15,
        name: 'Chicken Gravy (Green)',
        category: 'chicken',
    },
    {
        id: 16,
        name: 'Chicken Sukka',
        category: 'chicken',
    },
    {
        id: 17,
        name: 'Chicken 65',
        category: 'chicken',
    },
    {
        id: 18,
        name: 'Chicken Pepper',
        category: 'chicken',
    },
    {
        id: 19,
        name: 'Chicken Garlic',
        category: 'chicken',
    },
    {
        id: 20,
        name: 'Chicken Manchurian',
        category: 'chicken',
    },
    {
        id: 21,
        name: 'Chicken Chilli',
        category: 'chicken',
    },
    {
        id: 22,
        name: 'Chicken Kebab',
        category: 'chicken',
    },
    {
        id: 23,
        name: 'Chicken Lollypop',
        category: 'chicken',
    },
    {
        id: 24,
        name: 'Chicken Roce Curry',
        category: 'chicken',
    },
    {
        id: 25,
        name: 'Chicken Biryani',
        category: 'chicken',
    },
    {
        id: 26,
        name: 'Lemon Chicken',
        category: 'chicken',
    },
    {
        id: 27,
        name: 'Chicken Hyderabad',
        category: 'chicken',
    },
    {
        id: 28,
        name: 'Chicken Kundapur',
        category: 'chicken',
    },
    {
        id: 29,
        name: 'Chicken Tandoori',
        category: 'chicken',
    },
    {
        id: 30,
        name: 'Chicken Ginger',
        category: 'chicken',
    },
    {
        id: 31,
        name: 'Chicken Chops',
        category: 'chicken',
    },
    {
        id: 32,
        name: 'Pork Bafath',
        category: 'pork',
    },
    {
        id: 33,
        name: 'Pork Chilly (Chinese)',
        category: 'pork',
    },
    {
        id: 34,
        name: 'Pork Chilly (Indian)',
        category: 'pork',
    },
    {
        id: 35,
        name: 'Pork Hindad',
        category: 'pork',
    },
    {
        id: 36,
        name: 'Pork Garlic',
        category: 'pork',
    },
    {
        id: 37,
        name: 'Pork Pepper',
        category: 'pork',
    },
    {
        id: 38,
        name: 'Pork Kurgu',
        category: 'pork',
    },
    {
        id: 39,
        name: 'Pork Roast',
        category: 'pork',
    },
    {
        id: 40,
        name: 'Pork Surpatail',
        category: 'pork',
    },
    {
        id: 41,
        name: 'Prawns Lollypop',
        category: 'prawn',
    },
    {
        id: 42,
        name: 'Prawns Pepper',
        category: 'prawn',
    },
    {
        id: 43,
        name: 'Prawns Gasi',
        category: 'prawn',
    },
    {
        id: 44,
        name: 'Prawns Fried Rice',
        category: 'prawn',
    },
    {
        id: 45,
        name: 'Prawns Noodles',
        category: 'prawn',
    },
    {
        id: 46,
        name: 'Lime',
        category: 'juices',
    },
    {
        id: 47,
        name: 'Mango',
        category: 'juices',
    },
    {
        id: 48,
        name: 'Pineapple',
        category: 'juices',
    },
    {
        id: 49,
        name: 'Orange',
        category: 'juices',
    },
    {
        id: 50,
        name: 'Watermelon',
        category: 'juices',
    },
    {
        id: 51,
        name: 'Pulp Mango',
        category: 'juices',
    },
    {
        id: 52,
        name: 'Pista',
        category: 'juices',
    },
    {
        id: 53,
        name: 'Badam',
        category: 'juices',
    },
    {
        id: 54,
        name: 'Vanilla',
        category: 'icecreams',
    },
    {
        id: 55,
        name: 'Butterscotch',
        category: 'icecreams',
    },
    {
        id: 56,
        name: 'Mango',
        category: 'icecreams',
    },
    {
        id: 57,
        name: 'Chocolate',
        category: 'icecreams',
    },
    {
        id: 58,
        name: 'Fruit Salad',
        category: 'icecreams',
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
