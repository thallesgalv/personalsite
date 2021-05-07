import { useEnglish } from '../../contexts/EnglishContext'
import { StyledFooter, ContainerIcons } from './styles'
import { SiNextDotJs, SiTypescript, SiStyledComponents } from 'react-icons/si'

const Footer: React.FC = () => {
  const { english } = useEnglish()
  return (
    <StyledFooter>
      <div>
        {english ? 'Made with ' : 'Feito com'}💖{' '}
        {english ? 'using' : 'utilizando'}
        <ContainerIcons>
        <SiNextDotJs />
        <SiTypescript />
        <SiStyledComponents />
        </ContainerIcons>
      </div>
    </StyledFooter>
  )
}

export default Footer
