import React, { useState } from 'react';
import '../styles/header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="header">
            <section className='headerSup'>
                <img src='https://fedesagency.com/solarCaseres/logoClaroSC.png' alt='logo solar casares' />
                <img 
                    src='https://fedesagency.com/solarCaseres/menuHamburguesa.png' 
                    alt='Menu de Hamburguesas solar casares'
                    onClick={toggleMenu} 
                    className='menu-icon' 
                />
            </section>
            <section className='headerBottom'>
                <article className='headerTextArea'>
                    <h1 className='titleHeader'>Energía solar y soluciones hidráulicas para un futuro sostenible</h1>
                    <p className='parrafoHeader'>Descubrí nuestros productos innovadores y eficientes</p>
                </article>
                <article className='buttonsContainer'>
                    <button className='buttonProduct'>Ver productos</button>
                    <button className='buttonInfo'>Solicitar información</button>
                </article>
                <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <section className='headerSup'>
                    <img src='https://fedesagency.com/solarCaseres/logoOscuroSC.png' alt='logo solar casares' />
                    <img 
                        src='https://fedesagency.com/solarCaseres/menuHamburguesaOscuro.png' 
                        alt='Menu de Hamburguesas solar casares'
                        onClick={toggleMenu} 
                        className='menu-icon' 
                    />
                </section>
                    <ul>
                    <li><a href="#about">Sobre nosotros</a></li>
                    <li><a href="#products">Productos</a></li>
                    <li><a href="#testimonials">Testimonios</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    <li><button className='quote-button'>Solicitá una cotización</button></li>
                    </ul>
                </nav>
            </section>
        </header>
    );
};

export default Header;