import './homelimitcontroller.styles.css';

export function HomeLimitController ({onClick}) {
    return (
        <div className="limit-controller-div">
            <button 
            className="limit-controller-btn"
            onClick={onClick}>
                <span>Listar mais campeões...</span>
            </button>
        </div>
    )
}