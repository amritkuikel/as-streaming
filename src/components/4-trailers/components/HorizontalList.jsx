'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import HorizontalCard from "./HorizontalCard";

export default function HorizontalList({movie}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let a;
    if (movie) {
      a = 'now_playing';
    }
    else{
      a= 'popular';
    }

    const API_KEY = '92f1a9b8bd84a589617f01fea605e96e';
    const apiUrl = "https://api.themoviedb.org/3/movie/"+encodeURIComponent(a)+"?language=en-US&page=1&api_key=92f1a9b8bd84a589617f01fea605e96e&page=2";
    // https://api.themoviedb.org/3/movie/"+encodeURIComponent(a)+"?language=en-US&page=1&api_key=92f1a9b8bd84a589617f01fea605e96e
    axios
      .get(apiUrl)
      .then(response => {
        const fetchedMovies = response.data.results;
        setMovies(fetchedMovies);

      })
      .catch(error => {
        console.error("Error fetching movie details: ", error);
      });
  }, [movie]);

  return (
    <div className='flex md:gap-5 gap-1 overflow-x-scroll scrollbar md:h-[50vh] h-[30vh] mt-5 items-start   overflow-y-hidden '>
      {movies.map(moviess => (
        <HorizontalCard 
          key={moviess.id} 
          title={moviess.original_title} 
          subtitle={moviess.release_date} 
          img={`https://image.tmdb.org/t/p/original${moviess.backdrop_path} `} />
      ))}
    </div>
  );
}