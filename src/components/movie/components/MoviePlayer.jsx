'use client'

import React, { useEffect } from 'react'
import {FaPlay} from 'react-icons/fa'

export default function MoviePlayer() {
  const torrentHash = "6E88B3F25BA49D483D740A652BF013C341BC5373";
  useEffect(() => {
    const webtor = document.createElement("script");
    webtor.src = "https://cdn.jsdelivr.net/npm/@webtor/player-sdk-js/dist/index.min.js"
    document.body.appendChild(webtor);
  }, [])

  return (
    <div className='py-20 md:py-0  md:h-screen bg-gray-900 flex justify-center items-center'>
      <div className='relative text-6xl text-gray-900 font-bold md:h-[70vh] w-[80vw] md:w-[60vw] bg-gray-600 flex justify-center items-center'>
        <FaPlay className='absolute h-64 z-[0]'/>
        <div className='min-h-[200px]'></div>
        <video
          className='w-[80vw] z-[1] md:w-[60vw]'
          src={`magnet:?xt=urn:btih:${torrentHash}`}
          controls
          width='100%'
        ></video>
      </div>

      <div className="absolute top-0 left-0 h-full w-full z-[0]">
            {/* Blue color overlay with gradient */}
            <div className="h-full w-full bg-gradient-to-tr from-purple-950 to-sky-900 opacity-70"></div>
      </div>
    </div>
  )
}