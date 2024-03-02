import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMoviesList = async () => {
        const movieDataPromise = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION);
        const nowPlayingMovies = await movieDataPromise.json();
        dispatch(addNowPlayingMovies(nowPlayingMovies.results));
    }
    useEffect(() => {
        nowPlayingMoviesList();
    }, []);
}
export default useNowPlayingMovies