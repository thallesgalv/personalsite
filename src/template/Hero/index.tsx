import Headline from '../../components/Headline'
import Button from '../../components/Button'
import { Container, Content, ButtonContainer } from './styles'
import Pic from '../../assets/placeholder.png'

const Hero: React.FC = () => {
  return (
    <Container>
      <Content>
        <Headline />
        <ButtonContainer>
          <Button secondary>Veja meu portifólio</Button>
          <Button>Vamos trabalhar juntos?</Button>
        </ButtonContainer>
      </Content>
      <img src={Pic} alt="Placeholder"/>
    </Container>
  )
}

export default Hero
