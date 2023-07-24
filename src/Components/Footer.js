import React from 'react'

function Footer() {
  return (
 <div className=' grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
    <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>
            ABOUT
        </h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb plus</p>
        <p>Airbnb Luxe</p>
    </div>

 
    <div className='space-y-4 text-xs text-gray-800'>
    <h5 className='font-bold'>
            COMMUNITY
        </h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Nanujain</p>
    </div>
    <div className='space-y-4 text-xs text-gray-800'>
    <h5 className='font-bold'>
            HOST
        </h5>
        <p>o my god</p>
        <p>baby baby</p>
        <p>dont you see</p>
        <p>I got everything you need</p>
        <p>only a genius</p>
    </div>
    <div className='space-y-4 text-xs text-gray-800'>
    <h5 className='font-bold'>
            SUPPORT
        </h5>
        <p>Sia ki support</p>
        <p>sai ki support</p>
        <p>sir ki support</p>
        <p>sandra ki support</p>
        <p>siri ki support</p>
    </div>
 </div>
  )
}

export default Footer