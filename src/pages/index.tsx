import Head from 'next/head'
import Header from '../components/Header'
import Shape from '../components/Shape'
import useMatchMedia from '../hooks/useMatchMedia'
import Hero from '../template/Hero'

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
      </main>
    </>
  )
}

export default Home
