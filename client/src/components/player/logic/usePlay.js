import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setActiveSong } from "../../../store/slices/initialSlice";

const usePlay = () => {
    const { data, activeSong } = useSelector((state) => state.initial);
    const dispatch = useDispatch()
    const [current, setCurrent] = useState(0)
    const length = data.length;

    useEffect(() => {
        setCurrent(activeSong.id)
    }, [activeSong])

    const usePlayPrev = useCallback(() => {
        setCurrent(prev => {
            if(prev == 1) {
                const findSong = data.find(item => item.id == length)
                dispatch(setActiveSong(findSong))
                return length;
            } else {
                const res = Number(prev) - 1
                const findSong = data.find(item => item.id == res)
                dispatch(setActiveSong(findSong))
                return res
            }
        })
    }, [data,dispatch,length])

    const usePlayNext = useCallback(() => {
        setCurrent(prev => {
            if(prev == length) {
                const findSong = data.find(item => item.id == 1)
                dispatch(setActiveSong(findSong))
                return 1;
            } else {
                const res = Number(prev) + 1
                const findSong = data.find(item => item.id == res)
                dispatch(setActiveSong(findSong))
                return res
            }
        })
    }, [data, dispatch, length])



    return { usePlayPrev, usePlayNext }
}
export default usePlay;