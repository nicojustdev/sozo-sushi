import React, { useEffect, useState } from "react";
import './CardMainPage.css';
import arrowButton from './Icons/arrow.png';

const CardMainPage =() => {
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
        <div className={`card-mainPage ${imagesVisible ? 'visible-bas': ''}`}>
            <h2 className="card-mainPage-title">Sozo Sushi</h2>
            <h3 className="card-mainPage-subtitle">Restaurant de Sushis et Ramens à Nivelles</h3>
            <a href="https://sozosushi-express.be/#/commande-en-ligne/bons-plans/nos-produits" className="card-mainPage-button">
                <span className="card-mainPage-arrow">
                    <img src={arrowButton} alt="Arrow Icon"/>
                </span>
                <span className="card-mainPage-button-text">Commander</span>
            </a>
        </div>
    );
};

export default CardMainPage;