"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home({ params }) {
  const [hash1, setHash1] = useState('');

  useEffect(() => {
  

    axios
      .get(`https://yts.mx/api/v2/movie_details.json?imdb_id=${params.imdb}`)
      .then((response) => {
        const movieHash = response.data.data.movie.torrents[0].hash;
        setHash1(movieHash);
        console.log(movieHash); 
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [params.imdb]); 


  return (
  <Link href={`/mainplayer/${hash1}`}>asdf</Link>
  );
}

