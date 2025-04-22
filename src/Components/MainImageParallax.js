import React, { useEffect, useState } from "react";
import './MainImageParallax.css';
import ImageSunset from "./images/sunset.jpg";
import ImageSun from "./images/Sun.png";
import ImageMtFuji from "./images/mt fuji.png"
import ImageHills from "./images/Hills.png"
import ImageVillage from "./images/Village.png"
import ImageVillageG from "./images/BG Village coté G.png"
import ImageVillageD from "./images/BG Village coté D.png"

 
const MainImageParallax = () => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const [scrollY, setScrollY] = useState(0);
    
    const maxScrollHeight = 800;

    const [imagesVisible, setImagesVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const timer = setTimeout(() => {
            setImagesVisible(true);
        }, 3000);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const getLayerStyle = (mouseSpeed, scrollSpeed) => {
        const halfWindowWidth = window.innerWidth / 2;
        const halfWindowHeight = window.innerHeight / 2;

        const mouseX = (mousePosition.x - halfWindowWidth) * mouseSpeed / 100;
        const mouseY = (mousePosition.y - halfWindowHeight) * mouseSpeed / 100;

        const limitedScrollY = Math.min(scrollY, maxScrollHeight);
        const scrollMoveY = limitedScrollY * scrollSpeed;

        return {
            transform: `translate(${mouseX}px, ${mouseY + scrollMoveY}px)`,
        };
    };

    return(
        <div id="MainPage">
            <div className="parallax-image">
                <img src={ImageVillageD} alt="Image Village Droit" className={`parallax-image image-village-coteD ${imagesVisible ? 'visible-droite' : ''}`}/>
                <img src={ImageVillageG} alt="Image Village Gauche" className={`parallax-image image-village-coteG ${imagesVisible ? 'visible-gauche' : ''}`}/>
                <img src={ImageVillage} alt="Image Village" className={`parallax-image image-village ${imagesVisible ? 'visible-bas': ''}`} style={getLayerStyle(0)}/>
                <img src={ImageHills} alt="Image Montagne" className="parallax-image image-hills" style={getLayerStyle(1,0.3)}/>
                <img src={ImageMtFuji} alt="Image Mt Fuji" className="parallax-image image-mt-fuji" id="image-mt-fuji" style={getLayerStyle(1,0.5)}/>
                <img src={ImageSun} alt="Image Soleil" className="parallax-image image-sun" style={getLayerStyle(1.5,0.8)}/>
                <img src={ImageSunset} alt="Image Fond Ciel" className="parallax-image image-sunset" style={getLayerStyle(1.5,0.2)}/>
            </div>
        </div>
    );
};

export default MainImageParallax;