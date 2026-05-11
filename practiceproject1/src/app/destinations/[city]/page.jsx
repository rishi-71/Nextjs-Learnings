'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import parisImg from "@/assets/paris.jpg";
import tokyoImg from "@/assets/Tokyo.jpg";
import newYorkImg from "@/assets/newYork.jpg";
import Image from 'next/image';

 function  Page(params) {
    const {city} = useParams()

  return (
    <div className='text-white mt-15 w-[50%]' > {city} is the beautiful city to visit
    {
        city == "Paris" && <Image  src={parisImg} width={400} height={400} alt='paris image' />
    }
    {
        city == "Tokyo" && <Image src={tokyoImg} width={400} height={400} alt='tokyo image'/>
    }
    {
        city == "NewYork" && <Image src={newYorkImg} width={400} height={400} alt='newYork image'/>
    }
    </div>
  )
}

export default Page