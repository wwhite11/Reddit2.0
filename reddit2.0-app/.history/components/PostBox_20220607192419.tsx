import { useSession } from 'next-auth/react'
import React from 'react'

function PostBox() {
    const {data: session} = useSession()
  return <form>
      <div>

          <input 
          disabled={!session}
          type='text'
           placeholder={session? 'Create a post by entering a title!': 
          'Sign in to post'} />
      </div>
  </form>
    
  
}

export default PostBox


/* 
This postbox compnent will be using react hook forms. 

*/

