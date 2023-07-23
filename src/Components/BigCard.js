import React from 'react'
import Image from 'next/legacy/image'

function BigCard({img,title}) {
  return (
    <div className='items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105
    transition transform duration-300 ease-out'> 
    {/*Left*/}
    <div className="relative h-80 w-80"> 
    <Image src={img} layout="fill" 
         objectFit='cover'
         className="rounded-lg h-16 16 "/>
    </div>
    {/*Right*/}
    <div>
      <h3 className='text-2xl mt-3'>{title}</h3>

    </div>
     </div>
  )
}

export default BigCard