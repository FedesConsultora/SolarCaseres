import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <section className='headerSup'>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    <img
                        src='https://fedesagency.com/solarCaseres/logoClaroSC.png'
                        alt='logo solar casares'
                        style={   { cursor: 'pointer' }   } 
                    />
                </Link>

                <ul className='navDesktop'>
                    <li><a href="#about" >Sobre nosotros</a></li>
                    <li><a href="#products" >Productos</a></li>
                    <li><a href="#testimonials" >Dudas frecuentes</a></li>
                    <li><a href="#contact" >Contacto</a></li>
                    <li><a href="#contact-form"  className='quote-button'>Solicitá una cotización</a></li>
                </ul>
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
                    <a href="#products" className="buttonProduct">Ver productos</a>
                    <a href="#contact-form" className="buttonInfo">Solicitar información</a>
                </article>
                <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <section className='headerSup'>
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>
                            <img
                                src='https://fedesagency.com/solarCaseres/logoOscuroSC.png'
                                alt='logo solar casares'
                                style={{ cursor: 'pointer' }} 
                            />
                        </Link>
                        <img
                            src='https://fedesagency.com/solarCaseres/menuHamburguesaOscuro.png'
                            alt='Menu de Hamburguesas solar casares'
                            onClick={toggleMenu}
                            className='menu-icon'
                        />
                    </section>
                    <ul>
                        <li><a href="#about" onClick={toggleMenu}>Sobre nosotros</a></li>
                        <li><a href="#products" onClick={toggleMenu}>Productos</a></li>
                        <li><a href="#testimonials" onClick={toggleMenu}>Dudas frecuentes</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contacto</a></li>
                        <li><a href="#contact-form" onClick={toggleMenu} className='quote-button'>Solicitá una cotización</a></li>
                    </ul>
                </nav>
            </section>
        </header>
    );
};

export default Header;
