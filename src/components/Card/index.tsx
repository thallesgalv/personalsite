import Tilt from 'react-tilt'
import { useEffect, useRef } from 'react'
import { useEnglish } from '../../contexts/EnglishContext'
import Button from '../Button'
import TechIcon from '../TechIcon'
import { Wrapper, Container, ContainerIcons } from './styles'
import data from '../../data/techs'

interface CardProps {
  tag?: string
  tagEng?: string
  title: string
  titleEng?: string
  description: string
  descriptionEng: string
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
  periodEng
}) => {
  const { english } = useEnglish()
  const target = useRef(null)

  useEffect(() => {
    function animateOnScroll() {
      const targetTop = target.current.getBoundingClientRect().top
      const isVisible = targetTop - window.innerHeight * 0.6 < 0

      if (isVisible) target.current.classList.add('active')
      else target.current.classList.remove('active')
    }

    animateOnScroll()

    window.addEventListener('scroll', animateOnScroll)

    return () => window.removeEventListener('scroll', animateOnScroll)
  }, [])

  return (
    <Wrapper ref={target}>
      <Container>
        <span>{tag && english ? tagEng : tag} </span>
        <h1>{english ? titleEng : title}</h1>
        <span>{period && english ? periodEng : period}</span>
        <p>{english ? descriptionEng : description}</p>
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
    </Wrapper>
  )
}

export default Card
