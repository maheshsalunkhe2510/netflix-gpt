import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=' w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black '>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='w-1/4 text-lg py-4'>{overview}</p>
            <div className='my-4'>
                <button className='bg-white text-black px-10 p-4 rounded-md font-bold hover:bg-opacity-80'>
                    Play</button>
                <button className='bg-gray-700 text-white  font-bold px-10 p-4 rounded-md ml-4 bg-opacity-50'>
                    More Info</button>
            </div>
        </div>

    )
}

export default VideoTitle;
