import About from 'components/screens/About/About'
import Benefits from 'components/screens/Benefits/Benefits'
import Faq from 'components/screens/Faq/Faq'
import Offer from 'components/screens/Offer/Offer'
import Service from 'components/screens/Service/Service'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Shape</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Offer />
      <Service />
      <About />
      <Benefits />
      <Faq />
    </>
  )
}
