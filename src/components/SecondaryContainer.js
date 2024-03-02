import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
// upcomingMovies: null,
// topRatedMovies: null,
// popularMovies: null,
const SecondaryContainer = () => {
    const movieList = useSelector((store => store.movies))
    return movieList && (
        <div className='bg-black'>
            <div className='-mt-50 z-50 relative pl-12'>
                {movieList.nowPlayingMovies && <MovieList title={'Now Playing'} movies={movieList.nowPlayingMovies} />}
                {movieList.popularMovies && <MovieList title={'Popular'} movies={movieList.popularMovies} />}
                {movieList.topRatedMovies && <MovieList title={'Top Rated'} movies={movieList.topRatedMovies} />}
                {movieList.upcomingMovies && <MovieList title={'Upcoming'} movies={movieList.upcomingMovies} />}

            </div>
        </div>
    )
}

export default SecondaryContainer
