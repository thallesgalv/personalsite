import { useEnglish } from '../../contexts/EnglishContext'
import { StyledHeader, ContainerLogo, ContainerButton } from './styles'
import Link from 'next/link'
import Logo from '../Logo'
import FlagBrazil from '../../assets/flagBrazil.png'
import FlagUsa from '../../assets/flagUsa.png'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import Button from '../Button'
import useMatchMedia from '../../hooks/useMatchMedia'

interface HeaderProps {
  originAbout: React.MutableRefObject<HTMLLIElement>
  originPortifolio: React.MutableRefObject<HTMLLIElement>
}

const Header: React.FC<HeaderProps> = ({ originAbout, originPortifolio }) => {
  const { english, setEnglish } = useEnglish()

  const tabletBreakpoint: string = useMatchMedia('(max-width: 768px')
  const mobileBreakpoint: string = useMatchMedia('(min-width: 767px')

  return (
    <StyledHeader >
      <ContainerLogo>
        {mobileBreakpoint && (
          <Link href="/">
            <a>
              <Logo nights />
            </a>
          </Link>
        )}
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
        <ul>
          <li ref={originPortifolio}>
            <a>{english ? 'Portifolio' : 'Portifólio'}</a>{' '}
          </li>
          <li ref={originAbout}>
            <a>{english ? 'About' : 'Sobre'}</a>
          </li>
        </ul>
      </nav>

      <nav>
        <a
          href="https://www.linkedin.com/in/thalles-galvao/"
          target="_blank"
          rel="noopener"
        >
          <SiLinkedin />
        </a>

        <a href="https://github.com/thallesgalv" target="_blank" rel="noopener">
          <SiGithub />
        </a>

        {mobileBreakpoint && (
          <a href="https://api.whatsapp.com/send?phone=5513997774462&text=Ol%C3%A1%2C%20vim%20pelo%20site." target="_blank" rel="noopener">
            <Button small>
              {english ? "Let's work together?" : 'Vamos trabalhar juntos?'}
            </Button>
          </a>
        )}
      </nav>
    </StyledHeader>
  )
}

export default Header
