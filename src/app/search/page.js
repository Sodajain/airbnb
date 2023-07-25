'use client'
import React from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import { useRouter } from 'next/dist/client/router'



function Search() {
    const router = useRouter();
    const { location, startDate , endDate, noOfGuests} = router.query;
    console.log(router.query);

  return (
    <div >
      <Header/>
      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
            <p className='text-xs'> 300 results for guests</p>
            <h1 className='text-3xl font-semibold mt-2 mb-6 '>Stays in MArs</h1>
            <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                <p className='button'>
                Cancellation Flexibility</p>
                <p className='button'>
                Type of place</p>
                <p className='button'>
               Price</p>
                <p className='button'>
                Rooms and Beds</p>
                <p className='button'>
                More Filters</p></div>
        </section>

      </main>
      <Footer/>
    </div>
  )
}

export default Search