import React from 'react'

export default function Footer() {
  return (
    <div className='mt-10 md:gap-10 gap-4 py-10 md:py-20 bg-blue-950 flex flex-row text-white justify-center items-center text-center md:text-start md:items-start'>
        <a href='#' className='hidden md:block'><span className='md:font-bold md:text-6xl '>TODFAD</span>TM</a>
        <div className='flex flex-col '>
            <a href='#' className='md:font-bold md:text-xl font-bold'>BASICS</a>
            <a href='#' className='hidden md:block'>About TMDB</a>
            <a href='#' className='hidden md:block'>Contact Us</a>
            <a href='#' className='hidden md:block'>Support Forums</a>
            <a href='#' className='hidden md:block'>API</a>
            <a href='#' className='hidden md:block'>System Status</a>
        </div>
        <div className='flex flex-col'>
            <a href='#' className='md:font-bold md:text-xl font-bold'>GET INVOLVED</a>
            <a href='#' className='hidden md:block'>Contribution Bible</a>
            <a href='#' className='hidden md:block'>Add New Movie</a>
            <a href='#' className='hidden md:block'>Add New TV Show</a>
        </div>
        <div className='flex flex-col'>
            <a href='#' className='md:font-bold md:text-xl font-bold'>COMMUNITY</a>
            <a href='#' className='hidden md:block'>Guidelines</a>
            <a href='#' className='hidden md:block'>Discussions</a>
            <a href='#' className='hidden md:block'>Leaderboard</a>
        </div>
        <div className='flex flex-col'>
            <a href='#' className='md:font-bold md:text-xl font-bold'>LEGAL</a>
            <a href='#' className='hidden md:block'>Terms of Use</a>
            <a href='#' className='hidden md:block'>API Terms of Use</a>
            <a href='#' className='hidden md:block'>Privacy Policy</a>
            <a href='#' className='hidden md:block'>DMCA Policy</a>
        </div>
    </div>
  )
}

 