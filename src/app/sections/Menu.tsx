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
        name: 'Pork Chilli Roast',
        category: 'pork',
        imageUrl: '/assets/images/menu/pork chilli roast.jpg',
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
    // Starters
    {
        id: 59,
        name: 'Chicken Hariyali Kebab',
        category: 'starters',
        imageUrl: '/assets/images/menu/chicken hariyali kebab.jpg',
    },
    {
        id: 60,
        name: 'Chicken Kebab',
        category: 'starters',
        imageUrl: '/assets/images/menu/chicken kebab.jpg',
    },
    {
        id: 61,
        name: 'Veg Spring Roll',
        category: 'starters',
        imageUrl: '/assets/images/menu/veg spring roll.jpg',
    },
    {
        id: 62,
        name: 'Chicken Spring Roll',
        category: 'starters',
        imageUrl: '/assets/images/menu/chicken spring roll.jpg',
    },
    {
        id: 63,
        name: 'French Fries',
        category: 'starters',
        imageUrl: '/assets/images/menu/french fries.webp',
    },
    {
        id: 64,
        name: 'Cheese Pizza Sticks',
        category: 'starters',
        imageUrl: '/assets/images/menu/cheese pizza sticks.jpg',
    },
    {
        id: 65,
        name: 'Chicken Popcorn',
        category: 'starters',
        imageUrl: '/assets/images/menu/chicken popcorn.jpg',
    },
    {
        id: 66,
        name: 'Chicken Nuggets',
        category: 'starters',
        imageUrl: '/assets/images/menu/chicken nuggets.jpg',
    },
    {
        id: 67,
        name: 'Lollipop Chicken',
        category: 'starters',
        imageUrl: '/assets/images/menu/lollipop chicken.jpg',
    },
    {
        id: 68,
        name: 'Chicken Tikka',
        category: 'starters',
        imageUrl: '/assets/images/menu/chicken tikka.webp',
    },
    {
        id: 69,
        name: 'Chicken Tikka Hariyali',
        category: 'starters',
        imageUrl: '/assets/images/menu/chicken tikka hariyali.jpg',
    },
    // Rice Items
    {
        id: 70,
        name: 'Boiled Rice',
        category: 'rice',
        imageUrl: '/assets/images/menu/boiled rice.jpg',
    },
    {
        id: 71,
        name: 'White Rice',
        category: 'rice',
        imageUrl: '/assets/images/menu/white rice.jpg',
    },
    {
        id: 72,
        name: 'Ghee Rice',
        category: 'rice',
        imageUrl: '/assets/images/menu/ghee rice.jpg',
    },
    {
        id: 73,
        name: 'Curd Rice',
        category: 'rice',
        imageUrl: '/assets/images/menu/curd rice.jpg',
    },
    {
        id: 74,
        name: 'Tomato Rice',
        category: 'rice',
        imageUrl: '/assets/images/menu/tomato rice.jpeg',
    },
    {
        id: 75,
        name: 'Biryani Rice',
        category: 'rice',
        imageUrl: '/assets/images/menu/birayni rice.jpg',
    },
    {
        id: 76,
        name: 'Chicken Biryani',
        category: 'rice',
        imageUrl: '/assets/images/menu/chicken biryani.jpg',
    },
    {
        id: 77,
        name: 'Mutton Biryani',
        category: 'rice',
        imageUrl: '/assets/images/menu/mutton biryani-1.jpg',
    },
    {
        id: 78,
        name: 'Chicken Biryani Dum',
        category: 'rice',
        imageUrl: '/assets/images/menu/chicken biryani dum.avif',
    },
    {
        id: 79,
        name: 'Mutton Biryani Dum',
        category: 'rice',
        imageUrl: '/assets/images/menu/mutton biryani dum.jpeg',
    },
    {
        id: 80,
        name: 'Prawns Biryani',
        category: 'rice',
        imageUrl: '/assets/images/menu/prawns biryani.jpg',
    },
    {
        id: 81,
        name: 'Bangda Curry',
        category: 'prawn',
        imageUrl: '/assets/images/menu/Bangda Curry.jpg',
    },
    {
        id: 82,
        name: 'Bangda Tawa Fry',
        category: 'prawn',
        imageUrl: '/assets/images/menu/Bangda Tawa Fry.jpg',
    },
    {
        id: 83,
        name: 'Anjal Tawa Fry',
        category: 'prawn',
        imageUrl: '/assets/images/menu/Anjal Tawa Fry.jpg',
    },
    {
        id: 84,
        name: 'Silver Pomfret Fry',
        category: 'prawn',
        imageUrl: '/assets/images/menu/Silver Pomfret Fry.jpg',
    },
    {
        id: 85,
        name: 'Muru Tawa Fry',
        category: 'prawn',
        imageUrl: '/assets/images/menu/Muru Tawa Fry.jpg',
    },{
        id: 86,
        name: 'Prawns Ghee Roast',
        category: 'prawn',
        imageUrl: '/assets/images/menu/Prawns Ghee Roast.jpg',
    },
    {
        id: 87,
        name: 'Crispy Prawns Deep Fry',
        category: 'prawn',
        imageUrl: '/assets/images/menu/Crispy Prawns Deep Fry.jpg',
    },
    {
        id: 88,
        name: 'Prawns Chilli',
        category: 'prawn',
        imageUrl: '/assets/images/menu/Prawns Chilli.jpg',
    },
    {
        id: 89,
        name: 'Marwai Sukka',
        category: 'prawn',
        imageUrl: '/assets/images/menu/Marwai Sukka.jpg',
    },
    {
        id: 90,
        name: 'Marwai Pulimunchi',
        category: 'prawn',
        imageUrl: '/assets/images/menu/Marwai Pulimunchi.webp',
    },
    {
        id: 91,
        name: 'Marwai Gassi',
        category: 'prawn',
        imageUrl: '/assets/images/menu/Marwai Gassi.jpg',
    },
    {
        id: 92,
        name: 'Ice-Cream with Kashi Halwa',
        category: 'icecreams',
        imageUrl: '/assets/images/menu/kashi.jpg',
    },
    {
        id: 93,
        name: 'Ice-Cream with Carrot Halwa',
        category: 'icecreams',
        imageUrl: '/assets/images/menu/carrot.webp',
    },

];

const filters: Filter[] = [
    { id: 1, name: 'Starters', category: 'starters', active: false },
    { id: 2, name: 'Mutton', category: 'mutton', active: false },
    { id: 3, name: 'Chicken', category: 'chicken', active: false },
    { id: 4, name: 'Pork', category: 'pork', active: false },
    { id: 5, name: 'Seafood', category: 'prawn', active: false },
    { id: 6, name: 'Rice Items', category: 'rice', active: false },
    { id: 7, name: 'Juices', category: 'juices', active: false },
    { id: 8, name: 'Ice Creams', category: 'icecreams', active: false },
    
];

export default function Menu() {
    const [items, setItems] = useState<MenuData[]>([]);
    const [activeFilter, setActiveFilter] = useState<string>('starters');
    const [selectedFilter, setSelectedFilter] = useState<string>('starters');

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
    {activeFilter === 'prawn' && (
        <div className="seafood-highlight">
            We prepare all kinds of fish dishes according to the customer&apos;s request.
        </div>
    )}
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
