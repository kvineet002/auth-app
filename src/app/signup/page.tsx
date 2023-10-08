"use client";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { set } from "mongoose";
import { Inter } from "next/font/google";
const jost = Inter({ subsets: ["latin"] });

export default function SignUpPage(){
    const router=useRouter();
    const [user,setuser]=useState({
        email:"",
        password:"",
        username:"",
    })
    const [loading,setloading]=useState(false)
    const [buttonDisb,setButtonDis]=useState(false);
    useEffect(()=>{
        if(user.email.length>0&&user.password.length>0&&user.username.length>0){
            setButtonDis(false);
        }
        else setButtonDis(true)
    },[user])
    const onSignUp=async()=>{
        try{
            setloading(true);
           const responce= await axios.post("/api/users/signup",user);
            console.log("SignUp success",responce.data)
            router.push("/verifyemail");
        }
        catch(error:any)
        {
            console.log("signUp failed");
        }
        finally{
            setloading(false);
        }
    }
    console.log(user);
    return(
        <div className=" font-Jost flex flex-col items-center justify-center min-h-screen py-2">
      <div className="m-10 p-20 pb-10 border-solid border-opacity-40 border-white border  rounded-md  pt-5 flex-col items-center justify-center flex "> <h1 className={`${jost.className} mb-4 text-lg  bg-lime-400 text-black p-4 rounded-3xl pt-2 pb-2 font-bold`}>KobRa.
        </h1>
        <span className="-mb-3 material-symbols-outlined">
person
</span>
        <label className="mt-4 text-sm text-gray-300 font-mono" htmlFor="username">Username</label>
        <input
        className="text-white  focus:text-black pl-4 placeholder:text-white border  border-slate-400 opacity-20  placeholder:text-sm hover:bg-slate-100 hover:opacity-30 hover:placeholder:text-black hover:border-gray-50  bg-transparent  outline-none mb-3 p-2 w-[24rem] mt-1 rounded-md"
        id="username"
        type="text"
        value={user.username}
        onChange={(inp)=>setuser({...user,username:inp.target.value})}
        placeholder="Enter Username"
        />
         <span className="-mb-3 material-symbols-outlined">
email
</span>
        <label className="mt-4 text-sm text-gray-300 font-mono" htmlFor="email">Email</label>
        <input
        className="text-white  focus:text-black pl-4 placeholder:text-white border  border-slate-400 opacity-20  placeholder:text-sm  hover:bg-slate-100 hover:opacity-30 hover:placeholder:text-black hover:border-gray-50  bg-transparent  outline-none mb-3 p-2 w-[24rem] mt-1 rounded-md"
        id="email"
        type="email"
        value={user.email}
        onChange={(inp)=>setuser({...user,email:inp.target.value})}
        placeholder="Enter Email"
        />
         <span className="-mb-3 material-symbols-outlined">
lock
</span>
        <label className="mt-4 text-sm text-gray-300 font-mono" htmlFor="password">Password</label>
        <input
        className="text-white  focus:text-black pl-4 placeholder:text-white border  border-slate-400 opacity-20  placeholder:text-sm hover:bg-slate-100 hover:opacity-30 hover:placeholder:text-black hover:border-gray-50  bg-transparent  outline-none mb-3 p-2 w-[24rem] mt-1 rounded-md"
        id="password"
        type="password"
        value={user.password}
        onChange={(inp)=>setuser({...user,password:inp.target.value})}
        placeholder="Enter Password"
        />
        <button  onClick={onSignUp} className=" w-[24rem] p-2 text-xs text-black font-extrabold hover:border-solid rounded-md bg-lime-400 hover:bg-black hover:text-white hover:border-lime-400 hover:border mt-4">
            {loading?"Signing Up...":"Sign Up"}
        </button>
        <Link className="mt-5 -mb-3 text-xs text-lime-200 underline font-bold"  href='/login'>Visit Login Page</Link>
       </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

        </div>
    )
}