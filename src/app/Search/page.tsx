import React from 'react'
import Header from '../component/header';
import Navbar from '../component/navbar';
import SideSearchBar from '../component/sidesearchbar';
import Resturantcard from '../component/resturantcard';

const Search = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
  <main className="max-w-screen-2xl m-auto bg-white">
    {/* NAVBAR */}
    <Navbar/>
    {/* HEADER */}
    <Header/>
    <div className="flex py-4 m-auto w-2/3 justify-between items-start">
      {/* SEARCH SIDE BAR */}
      <SideSearchBar/>
      {/* SEARCH SIDE BAR */}
      <Resturantcard/>
    </div>
  </main>
</main>
  )
}

export default Search;