
import React from 'react'
import {PRICE,PrismaClient} from '@prisma/client'
import ResturantCard from '@/app/component/card';

export interface Location{
    id :number; 
    name : String;
  }
  export interface Cuisine{
    id :number; 
    name : String;
  }
  
  export interface Product {
    id: number;
    name: String;
    main_image: string;
    location : Location;
    cuisine : Cuisine
    price:PRICE
    slug:string
  }

  export interface ProductList {
    products: Product[];
  }

const prisma= new PrismaClient();

const fetchRestaurants = async (city:string) => {
    try {
        if (city != null) {
          const restaurants = await prisma.restaurant.findMany({
            where: {
                location: {
                  name: city,
                },
              },
            select: {
              id: true,
              name: true,
              main_image: true,
              cuisine: true,
              location: true,
              price: true,
              slug: true,
            },
          });
    
          return restaurants;
        }
      } catch (error) {
        throw error;
      }
}

export default async function RestaurantCards(props:any) {
    const restaurants= await  fetchRestaurants(props.city);
    console.log(restaurants);
    // if (restaurants) {
    //     console.log(restaurants);
    //     return <ResturantCard products={restaurants} />;
    //   } else {
    //     // Handle the case when no restaurants are found
    //     return <p>No restaurants found.</p>;
    //   }
    return(
        <div>{props.city}</div>
    )
}
