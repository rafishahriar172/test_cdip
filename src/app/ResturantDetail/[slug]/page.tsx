import React from 'react'
import { PrismaClient } from '@prisma/client'
import Title from '../components/Title'
import Rating from '../components/Rating'
import Description from '../components/Description'
import Images from '../components/Images'
import Reviews from '../components/Reviews'
import ReservationCard from '../components/ReservationCard'


const prisma= new PrismaClient();

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
    name: string
    main_image: string;
    description: string;
    open_time: string;
    close_time: string;
    slug: string;
    images: string[];
    location: Location;
    cuisine : Cuisine;
  }

  const fetchRestaurantBySlug = async (slug:string):Promise<Restaurant> =>{
    const restaurant= await prisma.restaurant.findFirst({
        where:{
          slug:slug
        },
        select:{
            id: true,
            name: true,
            main_image: true,
            description: true,
            open_time: true,
            close_time: true,
            slug: true,
            images: true,
            location: true,
            cuisine : true,
    
        }
      });
      if(!restaurant)
      throw console.error();
      
      return restaurant;
  }

export default async function RestaurantDetails(props:any) {
    const restaurant= await fetchRestaurantBySlug(props.params.slug);
    return (
      <>
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
      <div className="bg-white w-[70%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        {/* <RestaurantNavbar slug={restaurant.slug}/> */}
        {/* RESAURANT NAVBAR */} {/* TITLE */}
      <Title name={restaurant.name}/>
        {/* TITLE */} {/* RATING */}
      <Rating />
        {/* RATING */} {/* DESCRIPTION */}
       <Description descriptions={restaurant.description}/>
        {/* DESCRIPTION */} {/* IMAGES */}
      <Images images={restaurant.images}/>
        {/* IMAGES */} {/* REVIEWS */}
        <Reviews/>
        {/* REVIEWS */}
      </div>
      <div className="w-[27%] relative text-reg">
       <ReservationCard/>
      </div>
    </div>
      </>
      )
}