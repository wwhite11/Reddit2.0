import Image from 'next/image'
import React from 'react'
import { ChevronDownIcon, HomeIcon, MenuIcon, SearchIcon } from "@heroicons/react/solid";
import {  
    BellIcon, 
    ChatIcon, 
    GlobeIcon, 
    PlusIcon, 
    SparklesIcon, 
    SpeakerphoneIcon, 
    VideoCameraIcon,
 } from "@heroicons/react/outline";

function Header() {
  return (
    <div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm'>
        <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer '>
          <Image
           src="https://links.papareact.com/fqy" 
           layout='fill'
           objectFit='contain'
            />  
        </div>

        <div className='flex items-center mx-7 xl:min-w-[300px]'>
            <HomeIcon className='h-5 w-5' />
            <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
            <ChevronDownIcon  className='h-5 w-5'/>
        </div>
        <form className='flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1'>
            <SearchIcon className='h-6 w-6 text-gray-400'/>
            <input className='flex-1 bg-transparent outline-none' type="text" placeholder='Search Reddit' />
            <button type='submit' hidden />
        </form>

        <div className='text-gray-500 items-center space-x-2 mx-5 hidden lg:inline-flex'>
            <SparklesIcon className='icon' />
            <GlobeIcon className='icon' />
            <VideoCameraIcon className='icon' />
            <hr className='h-10 border border-gray-100' />
            <ChatIcon className='icon' />
            <BellIcon className='icon' />
            <PlusIcon className='icon' />
            <SpeakerphoneIcon className='icon' />
        </div>

        <div className='ml-5 flex items-center lg:hidden'>
            <MenuIcon className='icon' />
        </div>

        <div>
            <Image
             src='https://links.papareact.com/23l' 
             layout='fill'
             alt=''
             />
        </div>
    </div>
  )
}

export default Header


/*  

layout='fill' is going to take up the entire screen with the image, so in order
to prevent that we utilize the encapsulating container, and provide it a className of 
relative. 

objectFit='contain' is useful since the height and width contraints we have arent 
ideal. So with object fit we can compress the image so it isnt stretched. 

flex-shrink-0 makes sure that the image never shrinks when the size of the screen shrinks. 

for the home text, its hidden in small view, but once we hit that breakpoint using 'lg:inline' 
into a larger screen then the text is shown inline with the icons. 

Whenevr the <Image /> is used, we have to whitelist the domain name 
of where the image is coming from. And that is done in the next.config.js 
file.   The image also wont show until we provide it with a size. So we set 
the height to be 10

For the 7 Icons I created a custom utility class, in styles/globals.css file. I made
.icon a custom utility class with its own set of styled contraints. 

*/