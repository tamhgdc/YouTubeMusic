import { useEffect, useState } from "react"

export const usePresentTime = (progressRef, audioRef, isPlaying) => {
    const [presentTime, setPresentTime] = useState(0);
    useEffect(() => {
        duringPlay()
    }, [])
    const duringPlay = () => {
        if(!isPlaying) {
            setInterval(() => {
                progressRef.current.value = audioRef.current.currentTime;
                changePlayerDuringPlay()
            }, 50);
        } 
    }
    const changePlayerDuringPlay = () => {    
        setPresentTime(progressRef.current.value);
    }
    const changeRange = (e) => {
        setPresentTime(e.target.value)
        audioRef.current.currentTime = e.target.value;
    }

    return { presentTime, changeRange }
}