'use client'

import React, { useEffect, useState } from 'react'
import HorizontalList from './components/HorizontalList'
import axios from 'axios'
import Toggle from './components/Toggle'

export default function Trailers() {
  const [movie, setMovie] = useState(true)

  function clickHandler(){
    setMovie(!movie)
  }

  const [heroImage, setHeroImage] = useState("")

    useEffect(() => {
        const API_KEY = '92f1a9b8bd84a589617f01fea605e96e';
        const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;
        
        axios
        .get(apiUrl)
        .then(response => {
          const movies = response.data.results;

          // Choose a random movie from the list
          const randomMovie = movies[Math.floor(Math.random() * movies.length)];
          
          if (randomMovie && randomMovie.backdrop_path) {
          const imageUrl = `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`;
          setHeroImage(imageUrl);
        } else {
            const imageUrl = '/assets/images/hero-bg.jpg';
        }
        })
        .catch(error => {
          console.log("Error fetching movie details: ", error);
        });
    }, []);

  return (
    <div 
      className="bg-cover md:bg-cover bg-no-repeat bg-top relative md:px-10 px-5 py-10 md:py-0 md:min-h-[50vh] z-[0]" 
      style={{backgroundImage: `url(${heroImage})`,
    }}>
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-tr from-blue-900 to-blue-900 opacity-70 z-[-1]" ></div>
      <div className="md:py-10  mt-5 md:mt-10 md:px-40  flex flex-col items-start gap-5 z-[1]">
        <div className="flex justify-center items-center gap-5">
          <h2 className="md:font-semibold md:text-2xl text-white">Trailers</h2>
          <Toggle first={'Now Playing'} second={'Hits'}  clickHandler={clickHandler}/>
        </div>
        <div className="w-full  overflow-hidden text-white">
          <HorizontalList movie={movie}/>
        </div>
      </div>
    </div>
  )
}