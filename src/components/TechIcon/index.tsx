import { useEnglish } from '../../contexts/EnglishContext'
import { Container, Wrapper } from './styles'

interface TechIconProps {
  title: string
  titleEng: string
  icon: string
  color: string
  small?: boolean
}

export interface TechIconCssProps {
  color: string
  small?: boolean
}

const TechIcon: React.FC<TechIconProps> = ({
  title,
  titleEng,
  icon,
  color,
  small
}) => {
  const { english } = useEnglish()
  return (
    <Wrapper small={small} color={color} title={english ? titleEng : title}>
      <Container color={color} small={small}>
        <img src={`data:image/svg+xml;utf8,${icon}`}></img>
      </Container>
      <p>{english ? titleEng : title}</p>
    </Wrapper>
  )
}

export default TechIcon
