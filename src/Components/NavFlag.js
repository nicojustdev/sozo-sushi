import React, { useState, useEffect, useRef } from 'react';
import './NavFlag.css';
import navIcon from './Icons/nav-icon.png';
import homeIcon from './Icons/home-icon.png';
import menuIcon from './Icons/menu-icon.png';
import infoIcon from './Icons/info-icon.png';
import contactIcon from './Icons/contact-icon.png';

const NavFlag = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const toggleNav = () => {
        setIsOpen(true);
    };

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
        }
    };

    const [imagesVisible, setImagesVisible] = useState(false);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        const timer = setTimeout(() => {
            setImagesVisible(true);
        }, 3000);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className='nav-flag-container'>
            {!isOpen && (
                <button className={`toggle-button ${imagesVisible ? 'visible-fondu': ''}`} onClick={toggleNav} aria-label='Menu'>
                    <img src={navIcon} alt='Menu Icon'/>
                </button>
            )}

            <div className={`nav-flag ${isOpen ? 'open' : ''}`} ref={navRef}>
                <div className="flag-body">
                    <nav className='nav-menu'>
                        <ul>
                            <li><a href="https://sozosushi.be/"><img src={homeIcon} alt='Main page Icon'/></a></li>
                            <li><a href="https://sozosushi-express.be/#/commande-en-ligne/bons-plans/nos-produits"><img src={menuIcon} alt='Menu page Icon'/></a></li>
                            <li><a href='#info-content'><img src={infoIcon} alt='A Propos page Icon'/></a></li>
                            <li><a href="#contact-content"><img src={contactIcon} alt='Contact page Icon'/></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavFlag;