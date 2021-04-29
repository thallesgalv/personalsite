import { useEnglish } from '../../contexts/EnglishContext'
import { StyledHeader, ContainerLogo, ContainerButton } from './styles'
import Link from 'next/link'
import Logo from '../Logo'
import FlagBrazil from '../../assets/flagBrazil.png'
import FlagUsa from '../../assets/flagUsa.png'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import Button from '../Button'

const Header: React.FC = () => {
  const { english, setEnglish } = useEnglish()

  return (
    <StyledHeader>
      <ContainerLogo>
        <Link href="/">
          <a>
            <Logo nights />
          </a>
        </Link>
        <ContainerButton>
          <button
            onClick={() => setEnglish(false)}
            title={
              english
                ? 'click to change site language'
                : 'clique para trocar o idioma do site'
            }
          >
            <img
              src={FlagBrazil}
              alt={english ? 'brazilian flag' : 'bandeira do brasil'}
            />
          </button>
          <button
            onClick={() => setEnglish(true)}
            title={
              english
                ? 'click to change site language'
                : 'clique para trocar o idioma do site'
            }
          >
            <img
              src={FlagUsa}
              alt={english ? 'usa flag' : 'bandeira dos estados unidos'}
            />
          </button>
        </ContainerButton>
      </ContainerLogo>

      <nav>
        <Link href="/">{english ? 'Portifolio' : 'Portifólio'}</Link>
        <Link href="/">{english ? 'About' : 'Sobre'}</Link>
      </nav>

      <nav>
        <Link
          href="https://www.linkedin.com/in/thalles-galvao/"
          passHref={true}
        >
          <a target="_blank" rel="noopener">
            <SiLinkedin />
          </a>
        </Link>
        <Link href="https://github.com/thallesgalv">
          <a target="_blank" rel="noopener">
            <SiGithub />
          </a>
        </Link>
        <Link href="">
          <Button small>
            {english ? "Let's work together?" : 'Vamos trabalhar juntos?'}
          </Button>
        </Link>
      </nav>
    </StyledHeader>
  )
}

export default Header
