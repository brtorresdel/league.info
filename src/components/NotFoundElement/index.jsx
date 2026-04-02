import './notfoundelement.styles.css';

export function NotFoundElement ({message}) {
    return (
        <div className="not-found-div">
            <p>{message}</p>
            <img src="./src/assets/img/ata_emote.png" alt="Not Found" />
        </div>
    )
}