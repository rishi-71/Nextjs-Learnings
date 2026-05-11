'use client'
import { useParams } from 'next/navigation'
import React from 'react'

function Info() {
    const {city} = useParams()
  return (
    <div className='text-white mt-15 w-[50%]' > {city} is the best city </div>
  )
}

export default Info