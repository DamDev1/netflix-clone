import React, { useEffect, useState } from 'react'
import request from '../Request'

export default function Main() {
    const [movies, setMovies] = useState([])

    const randomPopularMovies = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', request)
            .then(response => response.json())
            .then(response => {
                setMovies(response.results)
            })
            .catch(err => console.error(err));
    }, [])

    console.log(randomPopularMovies)
    const truncateString = (str, num) =>{
        if(str?.length > num){
            return str.slice(0,num) + "..."
        }else{
            return str
        }
    }

    return (
        <div className='h-[550px] w-full text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w500/${randomPopularMovies?.backdrop_path
                    }`} alt={randomPopularMovies?.title} />
            </div>
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{truncateString(randomPopularMovies?.title, 20)}</h1>
                <div className='mt-4'>
                    <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                    <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                </div>
                <p className='my-4 text-gray-400 text-sm'>Released: {randomPopularMovies?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(randomPopularMovies?.overview, 150)}</p>
            </div>
        </div>
    )
}
