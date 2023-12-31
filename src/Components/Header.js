'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { SearchIcon , GlobeAltIcon, MenuIcon, UserCircleIcon ,UsersIcon} from "@heroicons/react/solid";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, Calendar,findIndex } from 'react-date-range';
import { useRouter } from 'next/navigation';


function Header() {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const[noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();
  const selectionRange = {
    startDate:startDate,
    endDate:endDate,
    key: 'selection'
  }
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate)
  }

  const resetInput =() => {
    setSearchInput("")
  }
  const search = ()=> {router.push({
    pathname: "/search",
    query: {
      location : searchInput,
      startDate : startDate.toISOString(),
      endDate : endDate.toISOString(),
      noOfGuests,
    },
  });}
  return (
    
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white text-black shadow-md p-5 md:px-10'>
      {/* left */}
      <div className='relative flex items-center h-12 w-16 cursor-pointer my-auto'>
        <div  onClick={()=> router.push("/")} className='flex-shrink-0'>
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
        <input 
        value={searchInput}
        onChange={(e)=> setSearchInput(e.target.value)}
        type="text" placeholder='Start your search' className='flex-grow pl-5 bg-transparent 
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
      {searchInput && (<div className='flex flex-col col-span-3 mx-auto mt-10'>
        <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={["#FD5B61"]}
        onChange={handleSelect}/>
        <div className='flex items-center border-b mb-4'>
          <h2 className='"text-2xl flex-grow font-semibold'>Number of Guests</h2>
          <UsersIcon className='h-5'/>
          <input value={noOfGuests} 
          onChange={(e)=>setNoOfGuests(e.target.value)}
          min={1}
          type='number' className='w-12 pl-2 text-lg outline-none text-red-400'/>
        </div>
        <div className='flex'>
          <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
          <button onClick={search} className='flex-grow text-red-400'>Search</button>
        </div>
        </div>)}
    </header>
  );
}

export default Header;

