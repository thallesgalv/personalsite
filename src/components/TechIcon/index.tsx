import { useRef, useEffect } from 'react'
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
  const placeIcon = useRef(null)

  useEffect(() => {
    placeIcon?.current?.insertAdjacentHTML('afterbegin', icon)
  }, [])
  return (
    <Wrapper small={small} color={color} title={english ? titleEng : title}>
      <Container color={color} small={small} ref={placeIcon} />
      <small>{english ? titleEng : title}</small>
    </Wrapper>
  )
}

export default TechIcon
