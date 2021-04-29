import { useEnglish } from '../../contexts/EnglishContext'
import { StyledHeader } from './styles'

const Header: React.FC = () => {
  const { english, setEnglish } = useEnglish()

  setEnglish(true)

  return (
    <StyledHeader>
      {/* <nav>{english ? 'About' : 'Sobre'}</nav> */}
      <nav>
        
      </nav>
    </StyledHeader>
  )
}

export default Header
