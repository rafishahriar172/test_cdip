import React from 'react'

const restaurantGetPrice=(prices:string)=>{
  if(prices === "CHEAP"){
    return "$"
  }
  else if(prices ==="REGULAR"){
    return "$$$"
  }
  else{
    return "$$$$$"
  }
}

export default function FoodPrice(props:any){
  const foodPrice = restaurantGetPrice(props.prices)
  return (
    <span className='inline-block'>{foodPrice}</span>
  )
}
