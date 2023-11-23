import React from "react";
import MovieDescription from "./components/MovieDescription";
import MoviePlayer from "./components/MoviePlayer";
export default function Movie() {
  return (
    <div>
      {/* <div>{movie_id}</div> */}
      {/* <div>{details.title}</div> */}
      {/* <pre>{JSON.stringify(details, null, 2)}</pre> */}
      <div className="flex flex-col md:flex-col-reverse">
        <div>
          <MoviePlayer />
        </div>
        <div>
          <MovieDescription />
        </div>
      </div>
    </div>
  );
}
