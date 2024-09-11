// src/components/BurgerMenu.js
import React, { useState } from 'react';
import '../styles/BurgerMenu.css';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className = "menu-pai">
            <div className="burger-icon" onClick={toggleMenu}>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
            </div>
            {isOpen && (
                <div className="menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#profile">Sobre Mim</a></li>
                        <li><a href="#skill">Habilidades</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#projects">Curriculum</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;
