import Headline from '../../components/Headline'
import Button from '../../components/Button'
import { Container, Content, ButtonContainer } from './styles'
import Pic from '../../assets/hero.png'
import Wave from '../../components/Wave'
import useMatchMedia from '../../hooks/useMatchMedia'
import Logo from '../../components/Logo'
import { useEnglish } from '../../contexts/EnglishContext'

interface HeroProps {
  originHeroPortifolio: React.MutableRefObject<HTMLDivElement>
}

const Hero: React.FC<HeroProps> = ({ originHeroPortifolio }) => {
  const breakPointDesktop: string = useMatchMedia('(max-width: 1100px')
  const { english } = useEnglish()
  return (
    <>
      <Container>
        <img src={Pic} alt="Thalles Galvão" loading="lazy" />
        <Content>
          <Logo nights />
          <Headline />
          <ButtonContainer>
            <div ref={originHeroPortifolio}>
              <Button secondary>
                {english ? 'Check out my portfolio' : 'Veja meu portifólio'}
              </Button>
            </div>
            <Button link="https://api.whatsapp.com/send?phone=5513997774462&text=Ol%C3%A1%2C%20vim%20pelo%20site.">
              {english ? "Let's work together?" : 'Vamos trabalhar juntos?'}
            </Button>
          </ButtonContainer>
        </Content>
        {breakPointDesktop && <Wave color="#2F495E" boxHeight={20} />}
      </Container>
    </>
  )
}

export default Hero
