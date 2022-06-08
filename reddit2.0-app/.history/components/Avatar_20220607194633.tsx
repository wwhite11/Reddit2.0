import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

function Avatar() {
    const {data: session} = useSession()
  return (
    <div className='relative'>
        <Image 
        layout='fill'
        src={`https://avatars.dicebear.com/api/open-peeps/${session?.user?.name || 'placeholder'}`} />
    </div>
  )
}

export default Avatar


/*  


*/