'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import HorizontalCard from "./HorizontalCard";

export default function HorizontalList({movie}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let a;
    if (movie) {
      a = 'movie/upcoming';
    }
    else{
      a= 'tv/on_the_air';
    }

    const API_KEY = '92f1a9b8bd84a589617f01fea605e96e';
    const apiUrl = `https://api.themoviedb.org/3/${a}?api_key=${API_KEY}&language=pt-BR&page=1&region=BR`;
    // `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=pt-BR&page=1&region=BR`
    
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
    <div className='flex md:gap-5 gap-1 overflow-x-scroll scrollbar md:h-[50vh] h-[30vh]   overflow-y-hidden '>
      {movies.map(moviess => (
        <HorizontalCard 
          key={moviess.id} 
          title={movie?moviess.original_title: moviess.original_name} 
          subtitle={movie?moviess.release_date: moviess.first_air_date} 
          img={`https://image.tmdb.org/t/p/original${moviess.backdrop_path} `} />
      ))}
    </div>
  );
}