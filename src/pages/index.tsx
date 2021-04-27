import Head from 'next/head'
import Header from '../components/Header'
import Logo from '../components/Logo'
import Shape from '../components/Shape'
import Hero from '../template/Hero'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header />
      <main>
        <Logo nights big />
        <Hero />
        <Shape />
      </main>
    </>
  )
}

export default Home
