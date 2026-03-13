import { HabilityIcon } from "../HabilityIcon";
import "./champhabilities.styles.css";

export function ChampHabilities ({habilities}) {
    return (
        <div className="champ-habilities-div">
            <section className="champ-habilities">
                <h2>Habilidades</h2>
                <div className="habilities-icons">
                    {habilities.map(hab => {
                        return <HabilityIcon hability={hab} key={hab.key}/>
                    })}
                </div>
            </section>
        </div>
    )
}