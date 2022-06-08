import { LinkIcon, PhotographIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import React from 'react'
import Avatar from './Avatar'


function PostBox() {
    const {data: session} = useSession()
  return <form className='sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2'>
      <div className='flex items-center space-x-3'>
            <Avatar />
          <input 
          disabled={!session}
          className='bg-gray-50 p-2 pl-5 outline-none rounded-md flex-1'
          type='text'
          placeholder={session? 'Create a post by entering a title!': 
          'Sign in to post'} />

          <PhotographIcon className={`h-6 text-gray-300 cursor-pointer`}/>
          <LinkIcon className='h-6 text-gray-300' />
      </div>
  </form>
    
  
}

export default PostBox


/* 
This postbox compnent will be using react hook forms. 

*/

