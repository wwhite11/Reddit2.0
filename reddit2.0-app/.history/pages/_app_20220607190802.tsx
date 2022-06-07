import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Header from '../components/Header'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    // <ApolloProvider client={client}>
  <SessionProvider session={session} >
    <div className='h-screen overflow-y-scroll bg-slate-200  '>
      <Header />
    </div>
  <Component {...pageProps} />
  </SessionProvider>
  // </ApolloProvider>
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

  The Header component moved from  the index.tsx file to the _app.tsx file
  on Line 10: due to the fact that I want access to this Header or Navigation 
  bar no matter which page I am on. 

  Then I add a parallax effect to the nav bar by adding a overflow on the y axis.

*/ 