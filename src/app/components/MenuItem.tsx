import React, { useState } from 'react';
import './menuItem.css';
import Image from 'next/image';

interface MenuItemProps {
    item: {
        id: number;
        name: string;
        imageUrl: string;
    };
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    const [isImageOpen, setIsImageOpen] = useState(false);

    const handleImageClick = () => {
        setIsImageOpen(true);
    };

    const closeImage = () => {
        setIsImageOpen(false);
    };

    return (
        <div className="menu-item">
            <div className="menu-img-container" onClick={handleImageClick}>
                <Image
                    src={item.imageUrl}
                    alt={item.name}
                    className="menu-img"
                    width={70}
                    height={70}
                />
            </div>
            <div className="small-line"></div>
            <div className="menu-content">
                <span className="menu-name">{item.name}</span>
                <div className="separator-line"></div>
            </div>
            {isImageOpen && (
                <div className="popup" onClick={closeImage}>
                    <Image src={item.imageUrl} alt={item.name} className="popup-img" width={800} height={800} />
                </div>
            )}
        </div>
    );
};

export default MenuItem;
