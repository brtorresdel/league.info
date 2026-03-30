import { Loading } from './../Loading/index';
import './homechamplist.styles.css'

export function HomeChampList ({champions, limit}) {
    if (!champions || champions.length === 0) {
        return <Loading />;
    }

    return (
        <div className="home-champions-list">
            {champions.slice(0, limit).map((champion) => (
                <div key={champion.id} className="champion-card">
                    <img src={champion.tile} alt={champion.name} />
                    <h3>{champion.name}</h3>
                </div>
            ))}
        </div>
    )
}