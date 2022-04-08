import { useState } from "react"

export const useSetDuration = () => {
    const [duration, setDuration] = useState(null);
    const setDurationValue = (event) => {
        const seconds = Math.floor(event.target.duration)
        setDuration(seconds)
    }
    return { duration, setDurationValue }
}