import { useState } from "react";
import { HabilityIcon } from "../HabilityIcon";
import "./champhabilities.styles.css";
import { HabilityVideo } from "../HabilityVideo";
import { useTranslations } from "../Hooks/useTranslations";
import { useObserver } from "../Hooks/useObserver";

export function ChampHabilities ({habilities}) {
    const { t } = useTranslations();

    const [ref, visible] = useObserver();

    const [activeHability, setActiveHability] = useState(habilities[0]);

    const toggleActiveHability = (habilityPosition) => {
        setActiveHability(habilities[habilityPosition]);
    }

    return (
        <div 
        
        className="champ-habilities-div">
            <section 
            ref={ref}
            className={`champ-habilities ${visible ? "visible" : "" }`}
            aria-labelledby="abilities-heading">
                <h2 id="abilities-heading">{t("champInfo.abilities")}</h2>
                <div className="habilities-data">
                    <div className="hability-data-div">
                        <div 
                        className="habilities-icons"
                        role="tablist"
                        aria-label="Seleção de habilidades">
                            {habilities.map((hab, index) => {
                                return <HabilityIcon 
                                hability={hab} 
                                key={hab.key} 
                                onClick={() => toggleActiveHability(index)} 
                                active={hab.key == activeHability.key}
                                role="tab"
                                aria-selected={hab.key === activeHability.key}
                                aria-controls="hability-panel"
                                tabIndex="0"/>
                            })}
                        </div>
                        <div 
                        className="hability-info"
                        id="hability-panel"
                        role="tabpanel"
                        aria-live="polite">
                            <h3 className="hability-title">{activeHability.name} ({activeHability.key})</h3>
                            <HabilityVideo src={activeHability.video} screen='mobile' />
                            <p className="hability-description">{activeHability.description}</p>
                        </div>
                    </div>
                    <HabilityVideo src={activeHability.video} screen='tablet-desktop' />
                </div>
            </section>
        </div>
    )
}