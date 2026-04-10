import "./loading.styles.css";
import dancingKatarinaGif from "../../assets/img/katarina-dancing-gif.gif"

export function Loading () {
    return (
        <div className="loading">
            <img src={dancingKatarinaGif} alt="Imagem da Katarina dançando" />
        </div>
    )
}