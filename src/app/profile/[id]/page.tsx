"use client"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import axios from 'axios'
   
export default function Profile({params}:any){
     const router=useRouter();


    const logout=async()=>{
        try{
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login');
        }
        catch(error:any){
            console.log(error.message)
            toast.error(error.message)
        }
        
    }
    return(
        <div className="flex flex-col items-center justify-center">
        <h1 className="mt-9 text-lg  bg-lime-400 text-black p-4 rounded-3xl pt-2 pb-2 font-bold">KobRa.
            </h1>
        <h1 className="m-5 font-bold text-xl">Profile Page
        </h1>
        <hr className=""/>
        <p className="font-mono">Your Profile <span className="p-1 bg-lime-400 text-black  font-extrabold rounded-md">{params.id}</span></p>
        <button className="p-1 pl-3 text-sm font-bold hover:bg-white transition  pr-3 mt-44 rounded-xl bg-lime-400 font-mono text-black" onClick={logout}>
            Log Out
        </button>
        </div>
    )
    }