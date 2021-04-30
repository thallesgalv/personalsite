import { useEnglish } from '../../contexts/EnglishContext'
import { Container, Wrapper } from './styles'

interface TechIconProps {
  name: string
  eng: string
  icon: string
  color: string
  small?: boolean
}

export interface TechIconCssProps {
  color: string
  small?: boolean
}

const TechIcon: React.FC<TechIconProps> = ({
  name,
  eng,
  icon,
  color,
  small
}) => {
  const { english } = useEnglish()
  return (
    <Wrapper small={small} color={color} title={english ? eng : name}>
      <Container color={color} small={small}>
        <img src={`data:image/svg+xml;utf8,${icon}`}></img>
      </Container>
      <p>{english ? eng : name}</p>
    </Wrapper>
  )
}

export default TechIcon
