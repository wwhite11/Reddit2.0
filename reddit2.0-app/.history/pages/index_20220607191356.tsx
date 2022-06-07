import type { NextPage } from 'next'
import Head from 'next/head'
import PostBox from '../components/PostBox'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit 2.0</title>
      </Head>
      <PostBox />
    </div>
  )
}

export default Home




/* I am now building the Postbox UI  finally after setting up all the backend stuff */