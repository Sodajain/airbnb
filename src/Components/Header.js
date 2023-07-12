import React from 'react';
import Image from 'next/image';
import { SearchIcon , GlobeAltIcon, MenuIcon, UserCircleIcon ,UsersIcon} from "@heroicons/react/solid";

function Header() {
  return (
    
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* left */}
      <div className='relative flex items-center h-12 w-16 cursor-pointer my-auto'>
        <div className='flex-shrink-0'>
          <Image
            src={"http://links.papareact.com/qd3"}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Center */}
      </div>
      <div className='flex items-center border-2 rounded-full py-2'>
        <input type="text" placeholder='Start your search' className='flex-grow pl-5 bg-transparent 
        outline-none text-sm text-gray-600 placeholder-gray-400' />
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 
        cursor-pointer md:mx-2' />
      </div>
      {/* Right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p>Become a host</p>
        <GlobeAltIcon className='h-6'/> 
        <div className='flex items-center border-2 rounded-full p-2 space-x-2'>
          <MenuIcon className='h-6'/>
          <UserCircleIcon className='h-6'/>
        </div>
      </div>
    </header>
  );
}

export default Header;


