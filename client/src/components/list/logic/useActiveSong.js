import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSong } from "../../../store/slices/initialSlice";

const useActiveSong = () => {
    const dispatch = useDispatch()
    const addSong = useCallback((song) => {
        dispatch(setActiveSong(song))
    }, [dispatch])
    return { addSong }
}

export default useActiveSong;