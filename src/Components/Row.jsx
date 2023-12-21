import React, { useEffect, useState } from 'react'
import request from '../Request'
import axios from 'axios';
import Movie from './Movie';
import {MdChevronLeft, MdChevronRight} from "react-icons/md"

export default function Row({ title, fetchURL, rowId }) {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        axios.get(fetchURL, request).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])

    const slideLeft = () =>{
        var slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () =>{
        var slider =document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <div>
            <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1>
            <div className='relative flex items-center group'>
                <MdChevronLeft 
                onClick={slideLeft}
                size={40} 
                className='bg-white rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer group-hover:block hidden'/>
                <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative scrollbar-hide'>
                    {movies.map((movieItem, id) => (
                        <Movie movieItem={movieItem} key={id}/>
                    ))}
                </div>
                <MdChevronRight 
                onClick={slideRight}
                size={40} 
                className='bg-white rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer right-0 group-hover:block hidden'/>
            </div>
        </div>
    )
}
