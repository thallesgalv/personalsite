import { useEnglish } from '../../contexts/EnglishContext'
import { StyledFooter, ContainerIcons } from './styles'
import { SiNextDotJs, SiTypescript, SiStyledComponents } from 'react-icons/si'

const Footer: React.FC = () => {
  const { english } = useEnglish()
  return (
    <StyledFooter>
      <article>
        {english ? 'Made with ' : 'Feito com'}💖{' '}
        {english ? 'using' : 'utilizando'}
        <ContainerIcons>
          <li>
            <SiNextDotJs />
          </li>
          <li>
            <SiTypescript />
          </li>
          <li>
            <SiStyledComponents style={{ fontSize: '35px' }} />
          </li>
        </ContainerIcons>
      </article>
    </StyledFooter>
  )
}

export default Footer
