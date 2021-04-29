import Button from '../components/Button'

const Test: React.FC = (props) => {

  return (
    <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
      <Button>Vamos trabalhar juntos?</Button>

      <p>{JSON.stringify(props.techs.name)}</p>

    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch ('http://localhost:3000/api/techs')
  const data = await response.json()
  return {
    props: {
      techs: data
    }
  }
}

export default Test
