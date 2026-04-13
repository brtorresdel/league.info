import { getOptimizedImg } from "../../utils/imgOptimizations";
import "./habilityicon.styles.css";

export function HabilityIcon ({hability, onClick, active}) {
    return (
        <button onClick={onClick} className={`hability-btn ${active ? "active-btn" : ''}`}>
            <img src={getOptimizedImg(hability.icon)} />
        </button>
    )
}