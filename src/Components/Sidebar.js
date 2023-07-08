import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
   const isMenuOpen = useSelector(store => store.app.isMenuOpen)

   //Early return
   if(!isMenuOpen) return null;
   
  return (
    <div className='shadow-lg w-48 p-3'>
     <ul className='pt-2 border-b-2 space-y-2'>
        <li><Link to="/" className='hover:bg-gray-200 hover:font-bold'>Home</Link></li>
        <li>Shorts</li>
        <li>Subscription</li>
     </ul>
     <ul className='pt-2 border-b-2 space-y-2'>
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Your Movies</li>
        <li>Watch Later</li>
     </ul>
     <ul className='pt-2 border-b-2 space-y-2'>
        <h1 className='font-bold'>Explore</h1>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
     </ul>
    </div>
  )
}

export default Sidebar
