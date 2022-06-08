import { useSession } from 'next-auth/react'
import React from 'react'

function Avatar() {
    const {data: session} = useSession()
  return (
    <div>
        <Image />
    </div>
  )
}

export default Avatar