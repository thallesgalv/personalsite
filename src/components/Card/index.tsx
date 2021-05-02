import Tilt from 'react-tilt'
import { useEffect, useRef } from 'react'
import { useEnglish } from '../../contexts/EnglishContext'
import Button from '../Button'
import TechIcon from '../TechIcon'
import { Wrapper, Container, ContainerIcons } from './styles'
import data from '../../data/techs.json'

interface CardProps {
  tag: string
  title: string
  description: string
  eng: string
  techs: string
  link: string
  image: string
}

const Card: React.FC<CardProps> = ({
  tag,
  title,
  description,
  eng,
  techs,
  link,
  image,
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
        <span>{tag}</span>
        <h1>{title}</h1>
        <p>{english ? eng : description}</p>
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
