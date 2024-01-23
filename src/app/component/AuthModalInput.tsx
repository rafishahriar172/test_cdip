import React from "react";

interface Props{
    inputs:{
        firstName:string,
        lastName:string,
        email:string,
        phone:string,
        city:string,
        password:string
    }
    handelChangeInput:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    isSignup:boolean
}

export default function AuthModalInputs({inputs,isSignup,handelChangeInput}:Props){
    return(
        <>
        {isSignup?null:
        <div>
            <div className="my-2 flex justify-between text-sm">
                <input 
                type="text" 
                className="border rounded p-2 py-3 w-[49%]" 
                placeholder="First Name"
                name="firstName"
                value={inputs.firstName}
                onChange={handelChangeInput}/>

                <input 
                type="text" 
                className="border rounded p-2 py-3 w-[49%]" 
                placeholder="Last Name" 
                name="lastName"
                value={inputs.lastName}
                onChange={handelChangeInput}/>


            </div>
            <div className="my-2 flex justify-between text-sm">
                <input 
                type="text" 
                className="border rounded p-2 py-3 w-[49%]" 
                placeholder="City"
                name="city"
                value={inputs.city}
                onChange={handelChangeInput}/>

                <input 
                type="text" 
                className="border rounded p-2 py-3 w-[49%]" 
                placeholder="Phone" 
                name="phone"
                value={inputs.phone}
                onChange={handelChangeInput}/>


            </div>
        </div>
        
        }
        <div className="my-4 flex justify-between text-sm">
            <input 
            type="text" 
            className="border rounded p-2 py-3 w-full" 
            placeholder="Email" 
            name="email"
            value={inputs.email}
            onChange={handelChangeInput}/>

        </div>
        <div className="my-4 flex justify-between text-sm">
            <input 
            type="password" 
            className="border rounded p-2 py-3 w-full" 
            placeholder="Password" 
            name="password" 
            value={inputs.password}
            onChange={handelChangeInput}/>
        </div>
        </>
    )
}