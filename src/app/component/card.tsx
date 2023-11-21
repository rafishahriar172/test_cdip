"use client"
import React from "react";
import { ProductList } from "../page";
import Link from "next/link";

export default function ResturantCard(props: ProductList){
    return(       
        <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {/* CARD */}
        {props.products.map((items) =>
             <div key={items.id}
             className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
           >
             <img
               src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
               alt=""
               className="w-full h-36"
             />
             <div className="p-1">
              <Link href={{
                pathname:"/ResturantDetail/" + items.slug,                
            }}>
               <h3 className="font-bold text-2xl mb-2">{items.location.name.toLocaleUpperCase()}</h3>
               </Link>
               <div className="flex items-start">
                 {/* <div className="flex mb-2">{items.slug.toLocaleUpperCase()}</div> */}
                 <p className="ml-2">{items.cuisine.name}</p>
               </div>
               <div className="flex text-reg font-light capitalize">
                 <p className=" mr-3">{items.name}</p>
                 <p className="mr-3">{items.price}$</p>
                 <p>Toronto</p>
               </div>
               {/* <p className="text-sm mt-1 font-bold">{items.location}</p> */}
             </div>
           </div>
        ) }
       
        {/* CARD */}
      </div>
    )
}