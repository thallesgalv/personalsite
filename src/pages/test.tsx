import Button from '../components/Button'
import TechIcon from '../components/TechIcon'
import { useEnglish } from '../contexts/EnglishContext'
import data from '../data/techs.json'

const Test: React.FC = () => {
  const { english } = useEnglish()
  // const image = data.techs[1].icon
  return (
    <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
      <Button>Vamos trabalhar juntos?</Button>

      {/* <img src={`data:image/svg+xml;utf8,${image}`}></img> */}
      {/* <p>{data.techs[1].name}</p> */}
      {/* <TechIcon
        name={data.techs[0].name}
        color={data.techs[0].color}
        eng={english && data.techs[0].english}
        icon={data.techs[0].icon}
        small
      /> */}
    </div>
  )
}

export default Test
