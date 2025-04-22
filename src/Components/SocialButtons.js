import React, { useState, useEffect } from 'react';
import './SocialButtons.css';
import facebookIcon from './Icons/facebook-icon.png';
import instagramIcon from './Icons/instagram-icon.png';
import linkedinIcon from './Icons/linkedin-icon.png';

const SocialButtons = () => {
    const [imagesVisible, setImagesVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setImagesVisible(true);
        }, 3000);
        
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className={`social-buttons-container ${imagesVisible ? 'visible-gauche': ''}`}>
            <div className='social-button' onClick={() => window.open('https://www.facebook.com/@sozosushi/', '_blank')}>
                <img src={facebookIcon} alt="Facebook"/>
            </div>
            <div className='social-button' onClick={() => window.open('https://www.instagram.com/sozo_sushi/', '_blank')}>
                <img src={instagramIcon} alt="Instagram"/>
            </div>
            <div className='social-button' onClick={() => window.open('https://www.linkedin.com/company/sozo-sushi/','_blank')}>
                <img src={linkedinIcon} alt='Linkedin'/>
            </div>
        </div>
    );
};

export default SocialButtons;