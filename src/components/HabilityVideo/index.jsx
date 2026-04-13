import './habilityvideo.styles.css'
import { Loading } from "../Loading";
import { useState } from 'react'

export function HabilityVideo ({src, screen}) {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadStart = () => {
        setIsLoading(true);
    };

    const handleCanPlay = () => {
        setIsLoading(false);
    };

    return (
        <div className={`hability-video ${screen}`}>
            {isLoading && <Loading />}
            <video 
                src={src.replace("mp4", "webm")} 
                autoPlay 
                muted 
                loop
                onLoadStart={handleLoadStart}
                onCanPlay={handleCanPlay}
            />
        </div>
    )
}