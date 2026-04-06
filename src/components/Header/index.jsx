import { useState } from 'react';
import './header.styles.css';
import { TiThMenu } from 'react-icons/ti';


export function Header() {
    return (
        <header className="header">
            <div className="menu">
                <div className="menu-mobile">
                    <button><TiThMenu className='icon'/></button>
                </div>
                <nav className="menu-desktop">
                    <button>Início</button>
                    <button>Sobre o dev</button>
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