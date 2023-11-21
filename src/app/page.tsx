import Navbar from './component/navbar';
import Header from './component/header';
import ResturantCard from './component/card';
import {PRICE,PrismaClient} from '@prisma/client'
import { useState } from 'react';

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

const fetchRestaurants= async()=>{
  const restaurants= await prisma.restaurant.findMany({
    select:{
      id:true,
      name:true,
      main_image:true,
      cuisine:true,
      location:true,
      price:true,
      slug:true
    }
  });
  return restaurants;
}


export default async function Home() {
  // const [product,setProduct] = useState<Product[]>([
  //   {
  //     productName: 'Product A',
  //     productReview: '****',
  //     productReviewer: '67 Reviewer',
  //     productBooking:'Booked 3 times today',
  //     productPrice:77,
  //     productId: 1
  //   },
  //   {
  //     productName: 'Product B',
  //     productReview: '**',
  //     productReviewer: '67 Reviewer',
  //     productBooking:'Booked 2 times today',
  //     productPrice:28,
  //     productId: 2
  //   }
  // ])
  const restaurants= await  fetchRestaurants();
  
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
  <main className="max-w-screen-2xl m-auto bg-white">
    {/* NAVBAR */}
    <Navbar/>    
    {/* NAVBAR */}
    <main>
      {/* HEADER */}
      <Header/>
      {/* HEADER */} {/* CARDS */}      
      <ResturantCard products={restaurants}/>
      {/* CARDS */}      
      {/* <Search/> */}
    </main>
  </main>
</main>


  )
}
