import Movie from "../../../components/movie/movie";
import React from "react";

export default function Movies({ params }) {
  const id = params;
  return (
    <div>
      <Movie id={id}/>
    </div>
  );
}
