import { StyledHeadline, RotateContainer, Heading, Description } from './styles'
import { useState, useRef, useEffect } from 'react'

const Headline: React.FC = () => {
  const [axisY, setAxisY] = useState(0)
  const move = useRef<HTMLDivElement>(null)
  const mainHeading = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     move.current.style.transform = `translateY(-${axisY}px)`
  //     setAxisY(axisY + mainHeading.current.getBoundingClientRect().height)

  //     if (
  //       axisY ===
  //       mainHeading.current.getBoundingClientRect().height *
  //         (move.current.children.length - 1)
  //     ) {
  //       setAxisY(0)
  //     }
  //   }, 2000)

  //   return () => clearInterval(interval)
  // }, [axisY])

  return (
    <StyledHeadline>
      <Heading ref={mainHeading}>Vamos desenvolver</Heading>
      <RotateContainer>
        <div ref={move}>
          <Heading>o seu site</Heading>
          <Heading>a sua aplicação web</Heading>
          <Heading>o seu novo projeto</Heading>
          <Heading>a sua marca</Heading>
          <Heading>a sua interface</Heading>
        </div>
      </RotateContainer>
      <Description>
        <p>Me chamo Thalles Galvão e sou Desenvolvedor Front-End.</p>
        <p>Conheça mais sobre mim e meu trabalho abaixo.</p>
      </Description>
    </StyledHeadline>
  )
}

export default Headline