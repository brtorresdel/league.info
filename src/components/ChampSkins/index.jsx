import { useRef, useState } from 'react';
import './champskins-h2.styles.css';
import './champskins.styles.css';
import { useObserver } from '../Hooks/useObserver';

export function ChampSkins({skins, champName}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [ref, visible] = useObserver();
    const scrollRef = useRef(null);

    const handleScroll = (e) => {
        const container = e.target;
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;

        const totalScrollable = scrollWidth - clientWidth;
        const progress = scrollLeft / totalScrollable;

        const numberOfSkins = skins.length;

        let index = Math.round(progress * (numberOfSkins - 1));

        if (scrollLeft <= 5) index = 0;
        if (scrollLeft >= totalScrollable - 5) index = numberOfSkins - 1;

        setCurrentIndex(index);
    };

    const scroll = (direction) => {
        const { current } = scrollRef;
        const scrollAmount = current.clientWidth;
        
        if (direction === 'left') {
            current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div 
        ref={ref}
        className="champ-skins-div">
            <h2 className={visible ? "visible" : ""}>Skins</h2>
            <section className={`champ-skins ${visible ? "visible" : ""}`}>
                <div className="arrows">
                    <button className="nav-arrow left" onClick={() => scroll('left')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <button className="nav-arrow right" onClick={() => scroll('right')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                </div>
                <div className="skins-container" onScroll={handleScroll} ref={scrollRef}>
                    {skins.map((skin) => (
                        <div className="skin-card" key={skin.id} >
                            <img src={skin.img} alt={skin.name} />
                            <h3>{skin.name.toLowerCase() != 'default' ? skin.name : champName}</h3>
                        </div>
                    ))}
                </div>
                <div className="skins-dots">
                    {skins.map((_, index) => (
                        <div key={index} className={`dot ${currentIndex === index ? 'active' : ''}`} />
                    ))}
                </div>
            </section>
        </div>
    )
}