import { SiDotNet } from 'react-icons/si'
import Button from '../components/Button'
import Card from '../components/Card'
import TechIcon from '../components/TechIcon'
import { useEnglish } from '../contexts/EnglishContext'
import dt from '../data/techs.json'
import data from '../data/portifolio.json'
import MockupSushiBowl from '../assets/mockupSushiBowl.png'

const Test: React.FC = () => {
  const { english } = useEnglish()
  // const image = data.techs[1].icon
  return (
    <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
      <Button>Vamos trabalhar juntos?</Button>

      {/* <img src={`data:image/svg+xml;utf8,${image}`}></img> */}
      {/* <p>{data.techs[1].name}</p> */}
      <TechIcon
        name={dt.techs[0].name}
        color={dt.techs[0].color}
        eng={english && dt.techs[0].english}
        icon={dt.techs[0].icon}
        small
      />

      <Card
        tag="Projeto"
        title={data.portifolio[3].name}
        description={data.portifolio[3].description}
        techs={data.portifolio[3].techs}
        link={data.portifolio[3].link}
        image={MockupSushiBowl}
      />

      <SiDotNet />
    </div>
  )
}

export default Test
