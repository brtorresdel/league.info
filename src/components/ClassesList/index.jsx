import { useState } from 'react';
import { ClassIcon } from '../ClassIcon';
import './classeslist.styles.css';

export function ClassesList ({champClasses}) {

    const [classListExibition, setClassListExibition] = useState(false);

    const toggleClassListExibition = () => setClassListExibition(!classListExibition);

    return (
        <div className="classes-list-div">
            <div className={`selected-classes-div ${classListExibition ? 'active' : ''}`} onClick={toggleClassListExibition}>
                <div 
                className="selected-classes"
                >

                </div>
                <div>
                    <img src="./src/assets/icons/arrow.svg" className={`arrow-icon ${classListExibition && 'active'}`}/>
                </div>
                <ul className={`classes-list ${classListExibition ? 'active' : ''}`}>
                    {
                        champClasses.map((c, i) => {
                            return <li key={i}>
                                <button>
                                    <ClassIcon className={c} />
                                    {c}
                                </button>
                            </li>
                        })
                    }
                </ul>
            </div>
           
        </div>  
    )
}