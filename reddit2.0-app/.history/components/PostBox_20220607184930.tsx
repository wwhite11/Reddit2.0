import { useSession } from 'next-auth/react'
import React from 'react'

function PostBox() {
    const {data: session} = useSession()
  return (
    <div>
        
    </div>
  )
}

export default PostBox