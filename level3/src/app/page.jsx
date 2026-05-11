"use client"
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Page()
 {
  const router = useRouter();
  return (
    <div>
      <ul>
        <Link href={"/"}><li>Home</li></Link> {/* declarative link navigation */}
        <Link href={"/about"}><li>About</li></Link>
        <Link href={"/contact"}><li>Contact</li></Link>
        
      </ul>
      <button onClick={()=> router.push("/about")}>Go to About</button> {/* programmatic navigation uses useRouter() router hook to navigate and to use this file must be a client component */}
    </div>  
  )
}

export default Page;
