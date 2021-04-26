import Head from 'next/head'
import Button from '../components/Button'
import Header from '../components/Header'
import Headline from '../components/Headline'
import Hero from '../template/Hero'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  )
}

export default Home
