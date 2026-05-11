'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Destinations = () => {
    const destinations = ["Paris","Tokyo","NewYork"]
    const router = useRouter();
  return (
    <div className='flex justify-center items-center  text-white  h-full flex-col gap-2.5 mt-25'>
        <div className='font bold text-2xl'>
            Choose Your Destination
        </div>
        <div className='flex flex-col gap-2.5'>
            {destinations.map((d,index)=>(
                <div key={index} className='font-bold text-2xl flex items-center justify-center rounded-2xl w-50 h-25 text-black bg-white hover:opacity-50 transition-all' onClick={()=>router.push(`/destinations/${d}`)}>
                    {d}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Destinations;