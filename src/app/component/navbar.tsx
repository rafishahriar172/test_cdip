import React from "react";
import AuthModal from "./AuthModal";

export default function Navbar(){
    return(
        <nav className="bg-white p-2 flex justify-between">
      <a href="" className="font-bold text-gray-700 text-2xl"> OpenTable </a>
      <div>
        <div className="flex">          
          <AuthModal isSignIn={true}/>
          <AuthModal isSignIn={false}/>
        </div>
      </div>
    </nav>
    )
}