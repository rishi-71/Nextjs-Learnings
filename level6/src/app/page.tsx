// Note - SSR,SSG & ISR ye teeno only server component pr kaam krte h
'use client'

import React, { useEffect } from 'react'

 function Page() {
 //ssr
  // let response = await fetch('http://localhost:3000/api/user',{
  //   cache:'no-store'
  // }) 
  //  console.log(response)
   //server component me koi data fecth krna ho toh complete url pass krna is compulsory like "http://localhost:3000/api/user"

  // let data = await response.json()
  // console.log(first)

  //ssg - api sirf ek baar call hoti h and data cache me store ho jata h hr request pe data change nhi hota
  // let response = await fetch('http://localhost:3000/api/user',{
  //   cache : 'no-store'
  // })

  // let data = await response.json()
  // console.log(data)

  //ISR - Incremental static regenaration - first time api jab call hoti h toh data cache me store krta h initially then after some time like in this revalidate time is 5 second so till 5 second it shows the data from cache not updated one and after 5 second it fetches data again from api and data gets updated

  // const response = await fetch('http://localhost:3000/api/user',{
  //   next : {revalidate : 5}
  // })

  // const data = await response.json();
  // console.log(data)

  //CSR - client side rendering - used in react and for client components

  const handleApi = async ()=>{
    const response = await fetch('api/user')
    const data = await response.json()
    console.log(data)
  }

  useEffect(()=>{
    handleApi()
  },[])
  return (
    <div>

    </div>
  )
}

export default Page