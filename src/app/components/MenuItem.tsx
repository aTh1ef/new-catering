import React from 'react';
import './menuItem.css';

interface MenuItemProps {
    item: {
        id: number;
        name: string;
    };
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    return (
        <div className="col-lg-6 menu-item">
            <div className="menu-content">
                <span className="menu-name">{item.name}</span>
                <span>₹</span> {/* ₹ symbol */}
            </div>
        </div>
    );
};

export default MenuItem;
