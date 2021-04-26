import Head from 'next/head'
import Header from '../components/Header'
import Headline from '../components/Headline'
import Section from '../components/Section'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header />
      <main>
        <Section>
          <Headline />
        </Section>
      </main>
    </div>
  )
}

export default Home
