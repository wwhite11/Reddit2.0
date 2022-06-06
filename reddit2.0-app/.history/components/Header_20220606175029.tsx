import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
        <div className='relative'>
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




*/