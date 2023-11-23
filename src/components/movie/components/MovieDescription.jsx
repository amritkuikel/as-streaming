import React from "react";
import { FaPlay } from "react-icons/fa";

export default function MovieDescription() {
  const title = "Trools Band Together";
  const image = "/assets/images/hero-bg.jpg";
  const image2 = "/assets/images/theboys.jpg";
  const releaseDate = "2022";
  const genre = "Comedy";
  const runtime = "120 min";
  const rating = "8.9";
  const rated = "PG";
  const overview =
    "Trools Band Together is a 2022 comedy film directed by Satish and Bhuwan. The film is based on the 2019 film Trools Band, which was released in 2019.";
  const casts = ["Satish Bhurtel", "Bhuwan Bhurtel"];

  return (
    <div
      className={` bg-cover md:bg-cover bg-no-repeat bg-top relative bg-gray-800 text-white p-10 md:h-screen flex justify-center items-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="z-[1] md:mx-10 gap-10 flex justify-center items-center">
        <div className=" min-h-[400px] min-w-[300px] hidden md:flex justify-center items-center bg-gray-400">
          <img className=" max-w-[300px]" src={image2} alt="img" />
        </div>

        <div className="">
          <div className="flex flex-col">
            <h1 className="font-bold text-5xl md:text-4xl">
              {title}{" "}
              <span className="font-normal text-4xl">({releaseDate})</span>{" "}
            </h1>
            <div className="mt-10 md:mt-2 flex gap-5 font-semibold items-center">
              <p className="text-gray-400 border px-2 border-gray-400">
                {rated}
              </p>
              <p className="font-semibold text-lg">
                Genre • <span className="font-normal text-sm"> {genre}</span>
              </p>
              <p className="font-semibold text-lg">
                {" "}
                Runtime •{" "}
                <span className="font-normal text-sm"> {runtime}</span>
              </p>
            </div>
          </div>

          <div className="mt-5 flex gap-3 items-center">
            <div className="p-5 rounded-full h-8 w-8 bg-gray-950 flex justify-center items-center">
              {rating}
            </div>
            <div className="font-bold">
              User <br /> Score
            </div>
            <div className="ml-5 cursor-pointer flex items-center gap-2">
              <FaPlay className="h-[10px]" />
              Play Trailer
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-5">
            <h2 className="font-bold text-3xl ">Overview</h2>
            <p className="text-xl md:text-sm md:font-semibold">{overview}</p>
          </div>

          <div className="mt-5">
            <h2 className="text-xl font-bold">Cast</h2>
            <ul className="text-sm font-semibold flex gap-10">
              {casts.map((cast) => (
                <li key={cast}>• {cast}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 h-full w-full z-[0]">
        <div className="h-full w-full bg-gradient-to-tr from-[#172564] to-[#2a0b4e] opacity-80"></div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full z-[0]">
        <div className="h-full w-full bg-gradient-to-tr from-[black] to-[black] opacity-40"></div>
      </div>
    </div>
  );
}
