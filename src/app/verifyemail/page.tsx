"use client";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { verify } from "crypto";

export default function VerifyEmail(){
    const router=useRouter();
   
    const [token,settoken]=useState(" ")
    const [clicked,setclicked]=useState(false)
    const [Verified,setVerified]=useState(false);
    const [error,seterror]=useState(false);
    // const [log,setlog]=useState(true);
   
    const verifyUseremail=async()=>{
        try{
            // setclicked(true);
           await axios.post("/api/users/verifyemail",{token});
            setVerified(true);
        }
       catch(error:any)
        {
            seterror(true);
            console.log(error);
        
        }
       
    }
    
    useEffect(()=>{
            const urlToken=window.location.search.split("=")
            [1];
            settoken(urlToken);
    },[])
    
    useEffect(()=>{
        
                verifyUseremail();
            
        
    },[token])
   
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="m-10 p-20 pb-10 border-solid border-opacity-40 border-white border  rounded-md  pt-5 flex-col items-center justify-center flex "> <h1 className="mb-4 text-lg  bg-lime-400 text-black p-4 rounded-3xl pt-2 pb-2 font-bold">KobRa.
        </h1>
   <div className="font-base font-mono text-white">{""}</div>
        
        <div className="font-mono text-green-400 mb-2">{token?` Email Verified`:'Check Your Email and Click the link to verify'}</div>
        <button  onClick={()=>{router.push(`/login/`)}}   className="p-2 text-xs  w-[24rem] text-black font-extrabold hover:border-solid rounded-md bg-lime-400 hover:bg-black hover:text-white hover:border-lime-400 hover:border mt-4">
            Proceed to Login
        </button>
       </div>
        </div>
    )
}