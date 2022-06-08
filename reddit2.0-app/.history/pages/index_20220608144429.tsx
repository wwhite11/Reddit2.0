import type { NextPage } from 'next'
import Head from 'next/head'
import PostBox from '../components/PostBox'

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl my-7 mx-auto ">
      <Head>
        <title>Reddit 2.0</title>
      </Head>
      <PostBox />

      <div className='flex'>
        {/* Feed */}
      </div>
    </div>
  )
}

export default Home




/* I am now building the Postbox UI  finally after setting up all the backend stuff */








// 3 Commands 
// To run stepzen run::::   'stepzen start'     To see api key run   'whoami --apikey'
// To run this app::::       'npm run dev'