import Image from 'next/image'
import React from 'react'
import { ChevronDownIcon, HomeIcon } from "@heroicons/react/solid";
import {  } from "@heroicons/react/outline";

function Header() {
  return (
    <div>
        <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
          <Image
           src="https://links.papareact.com/fqy" 
           layout='fill'
           objectFit='contain'
            />  
        </div>

        <div className='h-5 w-5'>
            <HomeIcon />
            <p>Home</p>
            <ChevronDownIcon />
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

Whenevr the <Image /> is used, we have to whitelist the domain name 
of where the image is coming from. And that is done in the next.config.js 
file.   The image also wont show until we provide it with a size. So we set 
the height to be 10



*/