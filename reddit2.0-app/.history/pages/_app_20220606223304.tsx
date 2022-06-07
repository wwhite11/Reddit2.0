import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Header from '../components/Header'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
  <SessionProvider session={session} >
    <div className='h-screen overflow-y-scroll bg-slate-200  '>
      <Header />
    </div>
  <Component {...pageProps} />
  </SessionProvider>
  )
}

export default MyApp


/*  We wrap the entire application in a special provider that 
    allows me to use the session or hooks from the next-auth library.
    Its called a HOC pattern.  Which is an advanced technique in React for
    reusing component logic. 

    I get the session on Line 7 from destructuring the props on Line 5
    The app is now powered up which allows me to use all of the core 
    next-auth hooks throughout the application. 



*/ 