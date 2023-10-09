"use client"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import {useState,useEffect} from 'react'
import axios from 'axios'
import Link from "next/link"
export default function Profile(){
    const router=useRouter();
    const[dat,setdat]=useState('');
   const prf= async () =>{
        try {
        //    const responce= await axios.get("/api/users/login");

          const res = await axios.get('/api/users/me');
          console.log(res.data);
          setdat(res.data.data.username);
      } catch (error:any) {
        console.error('Error in Axios request:', error);
      }} 
      useEffect(()=>{
            prf();}
            ,[])
    
    const logout=async()=>{
        try{
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login/');
        }
        catch(error:any){
            console.log(error.message)
            toast.error(error.message)
        }
       
    }
    return(
        <div className="flex flex-col items-center justify-center">
     <Link href='/'>   <h1 className="mt-9 text-lg  bg-lime-400 text-black p-4 rounded-3xl pt-2 pb-2 font-bold">KobRa.
            </h1></Link>
        <h1 className="m-5 font-bold text-xl">Profile
        </h1>
        <hr className=""/>
        <p className="font-mono">Profile Page  <span className="p-1 bg-lime-400 text-black  font-extrabold rounded-md">{dat}</span> </p>
        <button className="p-1 pl-3 text-sm font-bold hover:bg-white  pr-3 mt-44 rounded-xl bg-lime-400 font-mono text-black" onClick={logout}>
            Log Out
        </button>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

        </div>
    )
    }