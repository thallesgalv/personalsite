import Headline from '../../components/Headline'
import Button from '../../components/Button'
import { Container, Content, Flex } from './styles'

const Hero: React.FC = () => {
  return (
    <Container>
      <Content>
        <Headline></Headline>
        <Flex>
          <Button secondary>Veja meu portifólio</Button>
          <Button>Vamos trabalhar juntos?</Button>
        </Flex>
      </Content>
    </Container>
  )
}

export default Hero
