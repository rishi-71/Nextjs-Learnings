import React from 'react'

function CityLayout({children,info}) {
  return (
    <div className='flex '>
        {children}
        {info}
    </div>
  )
}
export default CityLayout