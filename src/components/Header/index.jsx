import './header.styles.css';

export function Header() {
    return (
        <header className="header">
            <div className="menu">
                <button>Home</button>
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