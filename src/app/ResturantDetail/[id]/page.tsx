"use client"
import Header from '@/app/component/header'
import Navbar from '@/app/component/navbar'
import React from 'react'
import { PrismaClient } from '@prisma/client'
import { useRouter } from 'next/router'
import { usePathname, useSearchParams } from 'next/navigation';


export interface Location{
  id :number; 
  name : String;
}
export interface Cuisine{
  id :number; 
  name : String;
}

export interface Product{
  id: number;
  name: string
  main_image: string;
  description: string;
  open_time: Date;
  close_time: Date;
  slug: string;
  images: [];
  location: Location;
  cuisine : Cuisine;
}

const prisma= new PrismaClient();

const fetchResturantDetail =async () => {
  const pathname = usePathname();
  const url = pathname.split("/");
  // console.log(url);
  const restaurant = await prisma.restaurant.findMany({
    where:{
      slug: url[2],
    }
  })
  return restaurant;
}

const Detail = async () => {
  const restaurant = await fetchResturantDetail();
  console.log(restaurant);
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
  <main className="max-w-screen-2xl m-auto bg-white">
    {/* NAVBAR */}
    <Navbar/>
    {/* NAVBAR */} {/* HEADER */}
    <Header/>
    {/* HEADER */} {/* DESCRIPTION PORTION */}
    <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
      <div className="bg-white w-[70%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <nav className="flex text-reg border-b pb-2">
          <a href="" className="mr-7"> Overview </a>
          <a href="" className="mr-7"> Menu </a>
        </nav>
        {/* RESAURANT NAVBAR */} {/* TITLE */}
        <div className="mt-4 border-b pb-6">
          <h1 className="font-bold text-6xl">{restaurant[0].name}</h1>
        </div>
        {/* TITLE */} {/* RATING */}
        {/* <div className="flex items-end">
          <div className="ratings mt-2 flex items-center">
            <p>*****</p>
            <p className="text-reg ml-3">4.9</p>
          </div>
          <div>
            <p className="text-reg ml-4">600 Reviews</p>
          </div>
        </div> */}
        {/* RATING */} {/* DESCRIPTION */}
        <div className="mt-4">
          <p className="text-lg font-light">
            {restaurant[0].description}
          </p>
        </div>
        {/* DESCRIPTION */} {/* IMAGES */}
        <div>
          <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
            5 photos
          </h1>
          <div className="flex flex-wrap">
          {restaurant[0].images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Restaurant Image ${index + 1}`}
            className="w-1/4 p-2"
          />
        ))}
          </div>
        </div>
        {/* IMAGES */} {/* REVIEWS */}
        <div>
          <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
            What 100 people are saying
          </h1>
          <div>
            {/* REVIEW CARD */}
            <div className="border-b pb-7 mb-7">
              <div className="flex">
                <div className="w-1/6 flex flex-col items-center">
                  <div
                    className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center"
                  >
                    <h2 className="text-white text-2xl">MJ</h2>
                  </div>
                  <p className="text-center">Micheal Jordan</p>
                </div>
                <div className="ml-10 w-5/6">
                  <div className="flex items-center">
                    <div className="flex mr-5">*****</div>
                  </div>
                  <div className="mt-5">
                    <p className="text-lg font-light">
                      Laurie was on top of everything! Slow night due to the
                      snow storm so it worked in our favor to have more one on
                      one with the staff. Delicious and well worth the money.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* REVIEW CARD */}
          </div>
        </div>
        {/* REVIEWS */}
      </div>      
    </div>
    {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */} {/* RESERVATION
    CARD PORTION */}
  </main>
</main>

  )
}

export default Detail