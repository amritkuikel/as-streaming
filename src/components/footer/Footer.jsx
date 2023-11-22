import React from 'react'

export default function Footer() {
  return (
    <div className='mt-10 gap-10 py-10 md:py-20 bg-blue-950 flex flex-col md:flex-row text-white justify-center items-center text-center md:text-start md:items-start'>
        <a href='#'><span className='font-bold text-6xl'>TODFAD</span>TM</a>
        <div className='flex flex-col'>
            <a href='#' className='font-bold text-xl'>THE BASICS</a>
            <a href='#'>About TMDB</a>
            <a href='#'>Contact Us</a>
            <a href='#'>Support Forums</a>
            <a href='#'>API</a>
            <a href='#'>System Status</a>
        </div>
        <div className='flex flex-col'>
            <a href='#' className='font-bold text-xl'>GET INVOLVED</a>
            <a href='#'>Contribution Bible</a>
            <a href='#'>Add New Movie</a>
            <a href='#'>Add New TV Show</a>
        </div>
        <div className='flex flex-col'>
            <a href='#' className='font-bold text-xl'>COMMUNITY</a>
            <a href='#'>Guidelines</a>
            <a href='#'>Discussions</a>
            <a href='#'>Leaderboard</a>
        </div>
        <div className='flex flex-col'>
            <a href='#' className='font-bold text-xl'>LEGAL</a>
            <a href='#'>Terms of Use</a>
            <a href='#'>API Terms of Use</a>
            <a href='#'>Privacy Policy</a>
            <a href='#'>DMCA Policy</a>
        </div>
    </div>
  )
}

 