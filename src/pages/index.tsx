import Head from 'next/head'
import { useRef } from 'react'
import useMatchMedia from '../hooks/useMatchMedia'
import useSmoothScroll from '../hooks/useSmoothScroll'
import { useEnglish } from '../contexts/EnglishContext'
import Hero from '../template/Hero'
import Header from '../components/Header'
import Shape from '../components/Shape'
import Portifolio from '../template/Portifolio'
import About from '../template/About'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  const breakPointDesktop: string = useMatchMedia('(min-width: 1100px')
  const { english } = useEnglish()
  const originAbout = useRef(null)
  const destinyAbout = useRef(null)
  const originPortifolio = useRef(null)
  const destinyPortifolio = useRef(null)
  const originHeroPortifolio = useRef(null)
  useSmoothScroll(originAbout, destinyAbout)
  useSmoothScroll(originPortifolio, destinyPortifolio)
  useSmoothScroll(originHeroPortifolio, destinyPortifolio)

  return (
    <>
      <Head>
        <title>
          {english
            ? 'Thalles Galvão — Front-End Developer'
            : 'Thalles Galvão — Desenvolvedor Front-End'}
        </title>
        <meta
          name="description"
          content="Me chamo Thalles Galvão e sou Desenvolvedor Front-End.Conheça mais sobre mim e meu trabalho."
        />
        <meta
          name="keywords"
          content="frontend, front, front-end, desenvolvedor, criação, sites, programador"
        />
        <meta name="author" content="Thalles Galvão" />
      </Head>
      <Header originAbout={originAbout} originPortifolio={originPortifolio} />
      <main>
        <Hero originHeroPortifolio={originHeroPortifolio} />
        {breakPointDesktop && <Shape />}
        <Portifolio destinyPortifolio={destinyPortifolio} />
        <About destinyAbout={destinyAbout} />
      </main>
      <Footer />
    </>
  )
}

export default Home
