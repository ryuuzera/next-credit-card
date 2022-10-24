import Head from 'next/head'
import Homepage from '../src/pages/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Credit Card</title>
        <meta name="description" content="Portifolio project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </>
  )
}
