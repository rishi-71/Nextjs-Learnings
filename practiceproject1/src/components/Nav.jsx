"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Nav() {
    const pathname = usePathname() //this returns the path at which use is currently 
  return (
    <div className='w-full h-20 bg-white flex justify-between items-center px-5 fixed to-0%' >
        <div className='text-black font-bold text-2xl'>
         🌍 Travel Guide
        </div>
        <div>
            <ul className='flex justify-center gap-2.5'>
                <Link href={"/"} className={pathname == "/" ? "text-blue-500":""}><li>Home</li></Link>
                <Link href={"/destinations"} className={pathname == "/destinations" ? "text-blue-500" : ""}><li>Destinations</li></Link>
                <Link href={"/contact"} className={pathname == "/contact" ? "text-blue-500" : ""}><li>Contact</li></Link>
            </ul>
        </div>
        
    </div>
  )
}

export default Nav