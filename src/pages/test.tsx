import Button from '../components/Button'
import handler from '../pages/api/techs'

const Test: React.FC = props => {
  console.log(handler())

  return (
    <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
      <Button>Vamos trabalhar juntos?</Button>
      {/*
      <p>{JSON.stringify(props.techs[0].id)}</p> */}
      <p>{JSON.stringify(props.techs.name)}</p>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch(
    'https://personalsite-peach.vercel.app/api/techs'
  )
  const data = await response.json()
  return {
    props: {
      techs: data
    }
  }
}

export default Test
