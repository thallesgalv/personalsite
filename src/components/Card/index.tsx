import Tilt from 'react-tilt'
import { useRef } from 'react'
import { useEnglish } from '../../contexts/EnglishContext'
import Button from '../Button'
import TechIcon from '../TechIcon'
import { Wrapper, Container, ContainerIcons } from './styles'
import data from '../../data/techs'
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll'
import useMatchMedia from '../../hooks/useMatchMedia'

interface CardProps {
  tag?: string
  tagEng?: string
  title: string
  titleEng?: string
  description?: string
  descriptionEng?: string
  techs?: string
  link?: string
  image: string
  period?: string
  periodEng?: string
}

const Card: React.FC<CardProps> = ({
  tag,
  tagEng,
  title,
  titleEng,
  description,
  descriptionEng,
  techs,
  link,
  image,
  period,
  periodEng,
  children
}) => {
  const { english } = useEnglish()
  const target = useRef(null)
  useAnimateOnScroll(target)
  const mobileBreakpoint: string = useMatchMedia('(min-width: 767px')

  return (
    <Wrapper ref={target}>
      <Container>
        {tag && <span>{english ? tagEng : tag} </span>}
        <h4>{english ? titleEng : title}</h4>
        {period && <span>{english ? periodEng : period}</span>}
        {description && <p>{english ? descriptionEng : description}</p>}
        {children && <div>{children}</div>}

        {techs && (
          <ContainerIcons>
            {[...techs.split(',')].map(i => (
              <TechIcon
                key={data.techs.find(t => t.title === i)?.id}
                title={i}
                color={data.techs.find(t => t.title === i)?.color}
                titleEng={data.techs.find(t => t.title === i)?.titleEng}
                icon={data.techs.find(t => t.title === i)?.icon}
                small
              />
            ))}
          </ContainerIcons>
        )}
        {link && (
          <Button link={link}>
            {english ? 'See the project' : 'Veja o projeto'}
          </Button>
        )}
      </Container>
      {mobileBreakpoint ? (
        <Tilt
          className="Tilt"
          options={{
            max: 20,
            scale: 1.075
          }}
        >
          <div className="Tilt-inner">
            <img src={image} alt={english ? titleEng : title} />
          </div>
        </Tilt>
      ) : (
        <div>
          <img src={image} alt={english ? titleEng : title} />
        </div>
      )}
    </Wrapper>
  )
}

export default Card
