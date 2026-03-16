import "./habilityicon.styles.css";

export function HabilityIcon ({hability, onClick, active}) {
    return (
        <button onClick={onClick} className={`hability-btn ${active ? "active-btn" : ''}`}>
            <img src={hability.icon} />
        </button>
    )
}