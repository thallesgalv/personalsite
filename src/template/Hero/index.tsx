import Headline from '../../components/Headline'
import Button from '../../components/Button'
import { Container, Content, ButtonContainer } from './styles'
import Pic from '../../assets/placeholder.png'
import Wave from '../../components/Wave'
import useMatchMedia from '../../hooks/useMatchMedia'
import Logo from '../../components/Logo'
import { useEnglish } from '../../contexts/EnglishContext'

interface HeroProps {
  originHeroPortifolio: React.MutableRefObject<HTMLAnchorElement>
}

const Hero: React.FC<HeroProps> = ({ originHeroPortifolio }) => {
  const breakPointDesktop: string = useMatchMedia('(max-width: 1100px')
  const { english } = useEnglish()
  return (
    <>
      <Container >
        <img src={Pic} alt="Placeholder" />
        <Content>
          <Logo nights />
          <Headline />
          <ButtonContainer>
            <a ref={originHeroPortifolio}>
              <Button secondary>
                {english ? 'Check out my portfolio' : 'Veja meu portifólio'}
              </Button>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5513997774462&text=Ol%C3%A1%2C%20vim%20pelo%20site."
              target="_blank"
              rel="noopener"
            >
              <Button>
                {english ? "Let's work together?" : 'Vamos trabalhar juntos?'}
              </Button>
            </a>
          </ButtonContainer>
        </Content>
        {breakPointDesktop && <Wave color="#2F495E" boxHeight={20} />}
      </Container>
    </>
  )
}

export default Hero
