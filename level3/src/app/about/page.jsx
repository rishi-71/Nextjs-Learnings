import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <div>About Page</div>
    <Image src={"/vercel.svg"}  width={100} height={100}/> {/* the images that are present in public folder can be accessed directly */}

    <Image src={"https://plus.unsplash.com/premium_photo-1777559750119-7057f3fd1955?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={100} height={100} />
    </>
    
  )
}

export default page;