import Headline from '../../components/Headline'
import Button from '../../components/Button'
import { Container, Content, ButtonContainer } from './styles'
import Pic from '../../assets/placeholder.png'
import Wave from '../../components/Wave'
import useMatchMedia from '../../hooks/useMatchMedia'
import Logo from '../../components/Logo'

const Hero: React.FC = () => {
  const breakPointDesktop: string = useMatchMedia('(max-width: 1100px')
  return (
    <>
      <Container>
        <img src={Pic} alt="Placeholder" />
        <Content>
          <Logo nights />
          <Headline />
          <ButtonContainer>
            <Button secondary>Veja meu portifólio</Button>
            <Button>Vamos trabalhar juntos?</Button>
          </ButtonContainer>
        </Content>
        {breakPointDesktop && <Wave color="#2F495E" boxHeight={20} />}
      </Container>
    </>
  )
}

export default Hero
