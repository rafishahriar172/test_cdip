
import Header from '../component/header';
import Navbar from '../component/navbar';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import ResturantCard from '../component/card';

const prisma = new PrismaClient();

const fetchRestaurantByCity= async(city:string|undefined,cuis:string|undefined)=>{
 const select = {
  id:true,
  name:true,
  main_image:true,
  cuisine:true,
  location:true,
  price:true,
  slug:true
 }
 if(!city)
 return await prisma.restaurant.findMany({select})
const restaurants = await prisma.restaurant.findMany({
  where:{
    location:{
      name:{
        equals:city.toLowerCase()
      }
    }
  },
  select
});
if(!cuis)
return restaurants;
const filterdRestaurants = restaurants.filter((restaurants) =>
  restaurants.cuisine.name === cuis.toLowerCase()
);
return filterdRestaurants;
}

const fetchLocations = async()=>{
  return prisma.location.findMany();
}

const fetchCuisines = async()=>{
  return prisma.cuisine.findMany();
}

export default async function Search({searchParams}:{searchParams:{city:string|undefined, cuis:string|undefined}}) {
  const restaurant = await fetchRestaurantByCity(searchParams.city,searchParams.cuis)
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();
  return(
    <>
      <Navbar/>
      <Header/>
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <div className='w-1/5'>
          <div className='border-b pb-4'>
          <h1 className='mb-2'>Region</h1>
          {
            locations.map((location) =>(
              <p key={location.id}><Link href={{
                pathname:"/Search",
                query:{
                  city:location.name
                }
              }} className='font-light text-reg' key={location.id}>{location.name}</Link></p>
            ))
          }
          </div>
          <div className='border-b pb-4'>
          <h1 className='mb-2'>Cuisine</h1>
            {
              cuisines.map((items) =>(
                <p key={items.id}><Link href={{
                  pathname:"/Search",
                  query:{
                    cuis: items.name
                  }
                }}className='font-light text-reg' key={items.id}>{items.name}</Link></p>
              ))
            }
          </div>
          <div className='mt-3 pb-4'>
            <h1 className='mb-2'>Price</h1>
            <div className="flex">
              <div className="border w-full text-reg font-light rounder-1 p-2">
                <button className="border w-full text-reg font-light p-2">$</button>
                <button className="border w-full text-reg font-light p-2">$$</button>
                <button className="border w-full text-reg font-light p-2">$$$</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {restaurant.length>0 ? <ResturantCard products={restaurant} />:<p>No Restaurant Found</p>}
    </>
  )
}


