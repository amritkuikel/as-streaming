'use client'
import React from "react";
import MovieDescription from "./components/MovieDescription";
import MoviePlayer from "./components/MoviePlayer";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Movie({ id }) {
  const [state,setState] = useState({})
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/"+encodeURIComponent(id.id)+"?language=en-US&api_key=92f1a9b8bd84a589617f01fea605e96e"
      )
      .then((response) => {setState(response.data)});
  },[]);
  return (
    <div>
      <div className="flex flex-col md:flex-col-reverse">
        <div><MoviePlayer /></div>
        <div>
          <MovieDescription state={state}/>
        </div>
      </div>
    </div>
  );
}
// const title = "Trools Band Together";
// const image = "/assets/images/hero-bg.jpg";
// const image2 = "/assets/images/theboys.jpg";
// const releaseDate = "2022";
// const genre = "Comedy";
// const runtime = "120 min";
// const rating = "8.9";
// const rated = "PG";
// const overview =
//   "Trools Band Together is a 2022 comedy film directed by Satish and Bhuwan. The film is based on the 2019 film Trools Band, which was released in 2019.";
// const casts = ["Satish Bhurtel", "Bhuwan Bhurtel"];
