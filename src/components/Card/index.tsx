import Tilt from 'react-tilt'
import Button from '../Button'
import TechIcon from '../TechIcon'
import { Wrapper, Container, ContainerIcons } from './styles'
import data from '../../data/techs.json'

interface CardProps {
  tag: string
  title: string
  description: string
  techs: string
  link: string
  image: string
}

const Card: React.FC<CardProps> = ({
  tag,
  title,
  description,
  techs,
  link,
  image
}) => {
  return (
    <Wrapper>
      <Container>
        <span>{tag}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <ContainerIcons>
          {[...techs.split(',')].map(i => (
            <TechIcon
              key={i}
              name={i}
              color={data.techs.find(t => t.name === i)?.color}
              eng={data.techs.find(t => t.name === i)?.english}
              icon={data.techs.find(t => t.name === i)?.icon}
              small
            />
          ))}
        </ContainerIcons>
        <Button link={link}>Veja o projeto</Button>
      </Container>
      <Tilt
        className="Tilt"
        options={{
          max: 20,
          scale: 1.075
        }}
      >
        <div className="Tilt-inner">
          <img src={image} />
        </div>
      </Tilt>
    </Wrapper>
  )
}

export default Card
