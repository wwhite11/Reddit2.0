import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
        <div className='relative h-10 w-20'>
          <Image src="https://links.papareact.com/fqy" layout='fill' />  
        </div>
    </div>
  )
}

export default Header


/*  

layout='fill' is going to take up the entire screen with the image, so in order
to prevent that we utilize the encapsulating container, and provide it a className of 
relative. 

Whenevr the <Image /> is used, we have to whitelist the domain name 
of where the image is coming from. And that is done in the next.config.js 
file.



*/