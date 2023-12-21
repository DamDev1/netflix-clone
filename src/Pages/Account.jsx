import React, { useEffect, useState } from 'react'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { UserAuth } from '../context/AuthContext'
import { MdChevronLeft, MdChevronRight } from "react-icons/md"


function Account() {
  const [savedMovies, setSavedMovies] = useState([])

  const { user } = UserAuth()

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setSavedMovies(doc.data()?.savedShows)
    })
  }, [user?.email])


  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }
  console.log(savedMovies)
  return (
    <>
      <div className='w-full text-white'>
        <img className="w-full h-[400px] object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/8ab8459d-e63e-43e3-b217-00afb27a4d58/NG-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
      </div>
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[500px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold text-white'>My Shows</h1>
      </div>

      <div>
        <h1 className='text-white font-bold md:text-xl p-4'>My Watchlist</h1>
        <div className='relative flex items-center group'>
          <MdChevronLeft
            onClick={slideLeft}
            size={40}
            className='bg-white rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer group-hover:block hidden' />
          <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative scrollbar-hide'>
            {savedMovies.map((movieItem, id) => (
              <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative'>
                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${movieItem?.img}`} alt={movieItem?.title} />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                  <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{movieItem?.title}</p>     
                </div>

              </div>
            ))}
          </div>
          <MdChevronRight
            onClick={slideRight}
            size={40}
            className='bg-white rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer right-0 group-hover:block hidden' />
        </div>
      </div>
    </>
  )
}

export default Account