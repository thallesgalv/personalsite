import Button from '../components/Button'

const Test: React.FC = (props) => {

  return (
    <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
      <Button>Vamos trabalhar juntos?</Button>

      <p>{JSON.stringify(props.techs[0].id)}</p>

    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch ('https://ranekapi.origamid.dev/json/api/produto/')
  const data = await response.json()
  return {
    props: {
      techs: data
    }
  }
}

export default Test
