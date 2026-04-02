import { Loading } from './../Loading/index';
import './homechamplist.styles.css'
import { ChampTitleandSub } from './../ChampTitleandSub/index';
import { ClassIcon } from './../ClassIcon/index';
import { HomeChampCard } from '../HomeChampCard';
import { NotFoundElement } from '../NotFoundElement';

export function HomeChampList ({championsList, limit}) {
    if (!championsList) {
        return <Loading />;
    }

    if (championsList.length === 0) {
        return <NotFoundElement message="Nenhum campeão encontrado" />;
    }

    return (
        <div className="home-champions-list">
            {championsList.slice(0, limit).map((champion) => (
                <HomeChampCard champion={champion} />
            ))}
        </div>
    )
}