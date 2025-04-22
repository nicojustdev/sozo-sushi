import React, { useEffect, useState } from 'react';
import './Bento.css';
import InstaBackground from './images/IG.png';
import InstaVideo from './videos/insta-sozo.mp4';
import InstagramIcon from './Icons/instagram-icon-big.png';
import Icon1 from './Icons/Icon-1.png';
import Icon2 from './Icons/Icon-2.png';
import Icon3 from './Icons/Icon-3.png';
import IconPhone from './Icons/Icon-phone.png';
import SozoFond from './images/sozo fond.png';
import SozoFondNoir from './images/sozo fond noir.png';
import CrunchSaumon from './images/crunch saumon.png';
import CaliSaumon from './images/cali saumon.png';
import PlateauSummer from './images/plateau summer.png';
import MangoRoll from './images/mango roll.png';
import BigEye from './images/big eye.png';

const Bento = () => {
    const images = [PlateauSummer, CaliSaumon, CrunchSaumon, BigEye, MangoRoll];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(false);
            }, 500)
        }, 5000);

        return() => clearInterval(interval);
    }, [images.length]);

    return (
        <div className='bento-container'>
            <div className='left-section'>
                <div className='card card-left1'>
                    <img src={InstaBackground} className='insta-background' alt='Background Instagram'/>
                    <div className='instagram-video'>
                        <video
                        autoPlay
                        muted
                        loop
                        disablePictureInPicture  
                        controlsList="nodownload"
                        >
                        <source src={InstaVideo} type='video/mp4'/>
                        </video>
                    </div>
                    <div className='overlay' onClick={() => window.open('https://www.instagram.com/sozo_sushi/')}>
                        <img src={InstagramIcon} alt='Instagram Logo' className='instagram-logo'/>
                    </div>
                </div>
                <div className='card card-left2'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5065.312997834006!2d4.323125077131735!3d50.59633757162049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c232d478d58ce1%3A0x55d06679ef7c9785!2sSozo%20Sushi!5e0!3m2!1sfr!2sbe!4v1729173340352!5m2!1sfr!2sbe" 
                        width="auto" 
                        height="442"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <div className='center-section'>
                <div className='card card-center1'>
                    <div className='card-flip'>
                        <div className='card-front'>
                            <h2>Emporter</h2>
                        </div>
                        <div className='card-back'>
                            <div className='card-back-container'>
                                <h3>Emporter</h3>
                                <div className='card-columns'>
                                    <div className='card-column'>
                                        <img src={Icon1} alt='Icon 1'/>
                                        <p>Passez votre commande</p>
                                    </div>
                                    <div className='card-column card-column-2'>
                                        <img src={Icon2} alt='Icon 2'/>
                                        <p>Venez au restaurant</p>
                                    </div>
                                    <div className='card-column'>
                                        <img src={Icon3} alt='Icon 3'/>
                                        <p>Savourez vos sushis</p>
                                    </div>
                                </div>
                                <div className='small-title'>
                                    Commander
                                </div>
                                <div className='card-buttons'>
                                    <a href="https://sozosushi-express.be/#/commande-en-ligne/bons-plans/nos-produits">E-Shop</a>
                                    <a href='tel:+32471876538' className='button-phone'><img src={IconPhone} alt='Icon Phone'/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card card-center2'>
                    <div className='card-flip'>
                        <div className='card-front'>
                            <h2>Livraison</h2>
                        </div>
                        <div className='card-back'>
                            <div className='card-back-container'>
                                <h3>Livraison</h3>
                                <div className='card-columns'>
                                    <div className='card-column'>
                                        <img src={Icon1} alt='Icon 1'/>
                                        <p>Passez votre commande</p>
                                    </div>
                                    <div className='card-column card-column-2'>
                                        <img src={Icon2} alt='Icon 2'/>
                                        <p>Attendez votre commande chez vous</p>
                                    </div>
                                    <div className='card-column'>
                                        <img src={Icon3} alt='Icon 3'/>
                                        <p>Savourez vos sushis</p>
                                    </div>
                                </div>
                                <div className='small-title'>
                                    Commander
                                </div>
                                <div className='card-buttons'>
                                    <a href='https://sozosushi-express.be/#/commande-en-ligne/bons-plans/nos-produits'>E-Shop</a>
                                    <a href='tel:+32471876538' className='button-phone'><img src={IconPhone} alt='Icon Phone'/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card card-center3'>
                    <div className='card-flip'>
                        <div className='card-front'>
                            <h2>Sur Place</h2>
                        </div>
                        <div className='card-back'>
                            <div className='card-back-container'>
                                <h3>Sur Place</h3>
                                <div className='card-columns'>
                                    <div className='card-column'>
                                        <img src={Icon1} alt='Icon 1'/>
                                        <p>Appellez nous</p>
                                    </div>
                                    <div className='card-column card-column-2'>
                                        <img src={Icon2} alt='Icon 2'/>
                                        <p>Venez au restaurant</p>
                                    </div>
                                    <div className='card-column'>
                                        <img src={Icon3} alt='Icon 3'/>
                                        <p>Savourez vos sushis sur place</p>
                                    </div>
                                </div>
                                <div className='small-title'>
                                    Réserver
                                </div>
                                <div className='card-buttons'>
                                    <a href='tel:+32471876538' alt="phone-link" className='button-phone'><img src={IconPhone} alt='Icon Phone'/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-section'>
                <div className='card card-right1'>
                    <div className='card6-face card6-front'>
                        <img src={SozoFond} alt='Recto' className='card6-image'/>
                    </div>

                    <div className='card6-face card6-back'>
                        <img src={SozoFondNoir} alt='Verso' className='card6-image'/>
                        <div className='card6-content'>
                            <h3 className='card6-title'>sozo sushi</h3>
                            <h2 className='card6-small-title'>c'est quoi ?</h2>
                            <p className='card6-text'>C'est un restaurant / Traiteur de sushis & ramens à Nivelles, créé par Maxime & Wuna.</p>
                            <p className='card6-text'>Le sozo s'est spécialisé par ses recettes et sa générosité dans le sushi.</p>
                            <p className='card6-text'>Sozo veut dire “création” car nos sushis sont inventifs et hors du commun.</p>
                        </div>
                    </div>
                </div>
                <div className='card card-right2'>
                    <img
                        src={images[currentImageIndex]}
                        alt='Slider'
                        className={`card7-slider-image ${fade ? 'fade' : ''}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Bento;