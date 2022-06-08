import { LinkIcon, PhotographIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Avatar from './Avatar'

// I am defining the kind of data that will be in this React Hook Form.
type FormData = {
  postTitle: string
  postBody: string
  postImage: string
  subreddit: string
}

function PostBox() {
    const {data: session} = useSession()
    const [imageBoxOpen, setImageBoxOpen] = useState(false)
    // These are the different things we can access using React Hook Form.
    const {
      register,
      setValue,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<FormData>()


  return <form className='sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2'>
      <div className='flex items-center space-x-3'>
            <Avatar />
          <input 
          // In order to connect the input to the form, will be shown on Line 32
          {...register('postTitle', {required: true})}
          disabled={!session}
          className='bg-gray-50 p-2 pl-5 outline-none rounded-md flex-1'
          type='text'
          placeholder={session? 'Create a post by entering a title!': 
          'Sign in to post'} />

          <PhotographIcon className={`h-6 text-gray-300 cursor-pointer`}/>
          <LinkIcon className='h-6 text-gray-300' />
      </div>
      {/* we are using the watch feature in React Hook Form. */}
      {watch('postTitle') && (
        <div className='flex flex-col py-2'>
          {/* Body */}
          <div className='flex items-center px-2'>
            <p className='min-w-[90px]'>Body:</p>
            <input 
            className='m-2 flex-1 bg-blue-50 p-2 outline-none'
            {...register('postBody')}
            type="text" 
            placeholder='Text (optional)' 
            />
          </div>
          
          <div className='flex items-center px-2'>
            <p className='min-w-[90px]'>Subreddit:</p>
            <input 
            className='m-2 flex-1 bg-blue-50 p-2 outline-none'
            {...register('postBody')}
            type="text" 
            placeholder='i.e reactjs' 
            />
          </div>
        </div>
      )}
  </form>
    
  
}

export default PostBox


/* 
This postbox compnent will be using react hook forms. 

*/

