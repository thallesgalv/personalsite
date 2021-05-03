import { SiDotNet } from 'react-icons/si'
import Button from '../components/Button'
import Card from '../components/Card'
import TechIcon from '../components/TechIcon'
import { useEnglish } from '../contexts/EnglishContext'
import dt from '../data/techs.json'
import data from '../data/portifolio.json'
import MockupSushiBowl from '../assets/mockupSushiBowl.png'
import SectionHeading from '../components/SectionHeading'

const Test: React.FC = () => {
  const { english } = useEnglish()
  // const image = data.techs[1].icon
  return (
    <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
      <Button>Vamos trabalhar juntos?</Button>

      {/* <img src={`data:image/svg+xml;utf8,${image}`}></img> */}
      {/* <p>{data.techs[1].name}</p> */}
      <TechIcon
        name={dt.techs[22].name}
        color={dt.techs[22].color}
        eng={english && dt.techs[22].english}
        icon={dt.techs[22].icon}
      />

    </div>
  )
}

export default Test
