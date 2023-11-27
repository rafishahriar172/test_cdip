"use client"
import React, {useState,useEffect} from 'react'
import Header from '../component/header';
import Navbar from '../component/navbar';
import { useSearchParams ,useParams } from 'next/navigation';
import { PRICE,PrismaClient } from '@prisma/client';
import RestaurantCards from './components/restaurantCards';

const prisma = new PrismaClient();

export interface Location{
  id :number; 
  name : String;
}
export interface Cuisine{
  id :number; 
  name : String;
}

export interface Restaurant{
  id: number;
  name: String;
  main_image: string;
  location : Location;
  cuisine : Cuisine
  price:PRICE
  slug:string
  
}


const Search = () => {
  const searchParams = useSearchParams();
  const searchLocation = searchParams.get('city');
  // const RestaurantDetails = await getRestaurantDetails(searchLocation)


  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <RestaurantCards city={searchLocation} />
        </div>
      </main>
    </main>
  );
};

export default Search;