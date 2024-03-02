import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";

const useMoviesList = (url, movieCategory) => {
    const dispatch = useDispatch();
    const moviesList = async () => {
        const data = await fetch(url, API_OPTION);
        const dataJson = await data.json();
        if (movieCategory === 'popular') {
            dispatch(addPopularMovies(dataJson.results));
        }
        if (movieCategory === 'top_rated') {
            dispatch(addTopRatedMovies(dataJson.results));
        }
        if (movieCategory === 'upcoming') {
            dispatch(addUpcomingMovies(dataJson.results));
        }
    }
    useEffect(() => {
        moviesList();
    }, []);
}
export default useMoviesList