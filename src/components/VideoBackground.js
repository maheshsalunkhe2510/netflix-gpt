import React, { useEffect } from 'react';
import { API_OPTION } from "../utils/constant"
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const VideoBackground = ({ movieId }) => {
    const dispatch = useDispatch();
    let getBackgroundMovie = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTION)
        const jsonData = await data.json();
        const filterMovie = jsonData.results.filter(video => video.type === "Trailer");
        const trailerMovie = filterMovie.length ? filterMovie[0] : jsonData[0];
        dispatch(addTrailerVideo(trailerMovie));
    };
    useEffect(() => {
        getBackgroundMovie();
    }, []);
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    if (!trailerVideo) return;
    return (
        <div className='w-screen'>
            <iframe
                className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/" + trailerVideo.key +"?&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />

        </div>
    )
}

export default VideoBackground
