import React from 'react'
import { TMDB_IMAGE_PATH } from '../utils/constant'

const MovieCard = ({ posterPath, movieName }) => {
    return (
        <div className='w-36 px-2' >
            <img alt={movieName} src={TMDB_IMAGE_PATH + posterPath} />
        </div>
    )
}

export default MovieCard
