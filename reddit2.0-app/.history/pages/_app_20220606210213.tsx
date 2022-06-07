import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
  <SessionProvider session={session} >
  <Component {...pageProps} />
  </SessionProvider>
  )
}

export default MyApp


/*  We wrap the entire application in a special provider that 
    allows me to use the session or hooks from the next-auth library.
    Its called a HOC pattern.  Which is an advanced technique in React for
    reusing component logic. 
*/ 