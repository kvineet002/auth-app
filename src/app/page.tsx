"use client"
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import {useState} from 'react'
import request from 'http'
import {useRouter} from 'next/navigation'
import User from '@/models/userModel'
export default function Home() {
  const [data,setdata]=useState('');
  const router=useRouter();


  const prfpage= async () =>{
    try {
      router.push(`/profile`);
  } catch (error:any) {
    
  }

    
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
       
        </div>
      </div>
<button className='font-bold text-base bg-lime-400 p-2 rounded text-black' onClick={prfpage}>Profile</button>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        
      </div>


        
        
    </main>
  )
}
