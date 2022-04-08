import { useState, useEffect } from "react";

export const useTooglePlay = (audioRef) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const tooglePlay = () => {
        setIsPlaying(!isPlaying)
        if(!isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }
    return { tooglePlay, isPlaying };
}