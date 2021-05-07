import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Shape from '../components/Shape'
import useMatchMedia from '../hooks/useMatchMedia'
import About from '../template/About'
import Hero from '../template/Hero'
import Portifolio from '../template/Portifolio'

const Home: React.FC = () => {
  const breakPointDesktop: string = useMatchMedia('(min-width: 1100px')

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header />
      <main>
        <Hero />
        {breakPointDesktop && <Shape />}
        <Portifolio />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default Home
