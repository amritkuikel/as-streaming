'use client'
import { useState, useEffect } from "react"
import axios from "axios"
export default function Home () {
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
            className="md:mx-[5vw] mx-0 bg-cover md:bg-cover bg-no-repeat bg-top relative px-10 md:px-40 py-10 md:py-0 md:min-h-[50vh] flex flex-col items-start justify-center " 
            style={{backgroundImage: `url(${heroImage})`,
        }}>
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-tr from-blue-800 to-blue-900 opacity-70 z-[1]" ></div>
            <h1 className="cursor-pointer text-3xl md:text-5xl font-bold text-white z-[2]">Welcome</h1>
            <h2 className="cursor-pointer text-xl md:text-3xl font-bold mt-4 md:mt-2 text-white z-[2]">
            Millions of movies and people to discover. Explore now.
            </h2>
            <div className="bg-gray-200  rounded-3xl flex mt-10 w-full z-[2]">
                <input className="bg-transparent px-5 text-black outline-none w-full " type="text" placeholder="Search for a movie, person"/>
                <button className="hover:scale-[1.02] rounded-3xl border py-2 px-5  bg-gradient-to-tr from-cyan-500 to-blue-900  font-semibold text-white">Search</button>
            </div>
        </div>
    )
}