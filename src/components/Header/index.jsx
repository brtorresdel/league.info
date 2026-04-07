import { useEffect, useState } from 'react';
import './header.styles.css';
import { TiThMenu } from 'react-icons/ti';
import { FiHome } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FaCode } from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export function Header() {

    const [isScrolled, setIsScrolled] = useState(false);
    
    const [menuMobileView, setMenuMobileView] = useState(false);
    const [socialMediaView, setSocialMediaView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSocialMediaView = () => {
        setSocialMediaView(!socialMediaView);
    };

    const handleMenuMobileView = () => {
        setMenuMobileView(!menuMobileView);
    }

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="menu">
                <div className="menu-mobile">
                    <button
                    onClick={handleMenuMobileView}><TiThMenu className='icon'/></button>
                    <nav className={`menu-mobile-options ${menuMobileView ? 'active' : ''}`}>
                        <button>
                            <IoMdClose 
                            className='icon close'
                            onClick={handleMenuMobileView}/>
                        </button>
                        <button>
                            <FiHome className='icon'/>
                            Início
                        </button>
                        <button 
                        className='about-dev-bnt'
                        onClick={handleSocialMediaView}>
                            <div className="about-dev">
                                <FaCode className='icon'/>
                                Sobre o dev
                            </div>
                            <img src="./src/assets/icons/arrow.svg" className={`arrow ${socialMediaView ? "active" : ""}`} />
                        </button>
                        <nav className={`social-media ${socialMediaView ? "active" : ""}`}>
                            <a href="https://www.linkedin.com/in/brtorresdel/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className='icon'/>
                                LinkedIn
                            </a>
                            <a href="https://github.com/brtorresdel" target="_blank" rel="noopener noreferrer">
                                <IoLogoGithub className='icon'/>
                                GitHub
                            </a>
                            <a href="https://www.instagram.com/brtorresrod/">
                                <FaInstagram className='icon'/>
                                Instagram
                            </a>
                            <a href="https://www.instagram.com/brtorresrod/">
                                <FaXTwitter className='icon'/>
                                (antigo Twitter)
                            </a>
                        </nav>
                    </nav>
                </div>
                <nav className="menu-desktop">
                    <button>Início</button>
                    <div className="dev-links">
                        <button
                        onClick={handleSocialMediaView}>Sobre o dev</button>
                        <nav className={`social-media ${socialMediaView ? "active" : ""}`}>
                            <a href="https://www.linkedin.com/in/brtorresdel/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className='icon'/>
                                LinkedIn
                            </a>
                            <a href="https://github.com/brtorresdel" target="_blank" rel="noopener noreferrer">
                                <IoLogoGithub className='icon'/>
                                GitHub
                            </a>
                            <a href="https://www.instagram.com/brtorresrod/">
                                <FaInstagram className='icon'/>
                                Instagram
                            </a>
                            <a href="https://www.instagram.com/brtorresrod/">
                                <FaXTwitter className='icon'/>
                                (antigo Twitter)
                            </a>
                        </nav>
                    </div>
                </nav>
            </div>
            <div className="title">
                <h1>leagueinfo.gg</h1>
            </div>
            <div className="languages">
                <button>EN</button>
            </div>
        </header>
    )
}