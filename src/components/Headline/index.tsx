import { StyledHeadline, RotateContainer, Heading, Description } from './styles'
import { useState, useRef, useEffect } from 'react'
import { useEnglish } from '../../contexts/EnglishContext'

const Headline: React.FC = () => {
  const { english } = useEnglish()
  const [axisY, setAxisY] = useState(0)
  const [windowWidth, setwindowWidth] = useState(null)
  const move = useRef<HTMLDivElement>(null)
  const mainHeading = useRef<HTMLDivElement>(null)

  function wordSlider() {
    move.current.style.transform = `translateY(-${axisY}px)`
    setAxisY(axisY + mainHeading.current.getBoundingClientRect().height)

    if (
      axisY ===
      mainHeading.current.getBoundingClientRect().height *
        (move.current.children.length - 1)
    ) {
      setAxisY(0)
    }
  }

  useEffect(() => {
    const interval = setInterval(wordSlider, 2000)

    return () => clearInterval(interval)
  }, [axisY, windowWidth])

  useEffect(() => {
    window.addEventListener('resize', wordSlider)

    return () => window.addEventListener('resize', wordSlider)
  }, [])

  return (
    <StyledHeadline>
      <Heading ref={mainHeading}>
        {english ? "Let's develop" : 'Vamos desenvolver'}
      </Heading>
      <RotateContainer>
        <div ref={move}>
          <Heading>{english ? 'your website' : 'o seu site'}</Heading>
          <Heading>
            {english ? 'your web application' : 'a sua aplicação web'}
          </Heading>
          <Heading>{english ? 'your project' : 'o seu novo projeto'}</Heading>
          <Heading>{english ? 'your brand' : 'a sua marca'}</Heading>
          <Heading>{english ? 'your interface' : 'a sua interface'}</Heading>
        </div>
      </RotateContainer>
      <Description>
        <p>
          {english
            ? "I'm Thalles Galvão, Front-End Developer."
            : 'Me chamo Thalles Galvão e sou Desenvolvedor Front-End.'}
        </p>
        <p>
          {english
            ? 'Find out more about my work below.'
            : 'Conheça mais sobre mim e meu trabalho abaixo.'}
        </p>
      </Description>
    </StyledHeadline>
  )
}

export default Headline
