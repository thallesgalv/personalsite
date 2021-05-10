import Head from 'next/head'
import { useRef } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Shape from '../components/Shape'
import useMatchMedia from '../hooks/useMatchMedia'
import useSmoothScroll from '../hooks/useSmoothScroll'
import About from '../template/About'
import Hero from '../template/Hero'
import Portifolio from '../template/Portifolio'

const Home: React.FC = () => {
  const breakPointDesktop: string = useMatchMedia('(min-width: 1100px')
  const originAbout = useRef(null)
  const destinyAbout = useRef(null)
  const originPortifolio = useRef(null)
  const destinyPortifolio = useRef(null)
  useSmoothScroll(originAbout, destinyAbout)
  useSmoothScroll(originPortifolio, destinyPortifolio)

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header originAbout={originAbout} originPortifolio={originPortifolio} />
      <main>
        <Hero />
        {breakPointDesktop && <Shape />}
        <Portifolio destinyPortifolio={destinyPortifolio} />
        <About destinyAbout={destinyAbout} />
      </main>
      <Footer />
    </>
  )
}

export default Home
