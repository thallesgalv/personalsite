import { Container, WrapperBottom, WrapperBox, WrapperTop } from './styles'

export type WaveProps = {
  color: string
  boxHeight: number
}

const Wave: React.FC<WaveProps> = ({ color, boxHeight }) => {
  return (
    <Container>
      <WrapperBottom>
        <svg viewBox="0 0 1792 335" xmlns="http://www.w3.org/2000/svg">
          <path
            fill={color}
            d="M 0 50 C 259 50 259 209 518 209 L 518 209 L 518 0 L 0 0 Z"
            strokeWidth="0"
          ></path>{' '}
          <path
            fill={color}
            d="M 517 209 C 800 209 800 96 1083 96 L 1083 96 L 1083 0 L 517 0 Z"
            strokeWidth="0"
          ></path>{' '}
          <path
            fill={color}
            d="M 1082 96 C 1437 96 1437 189 1792 189 L 1792 189 L 1792 0 L 1082 0 Z"
            strokeWidth="0"
          ></path>
        </svg>
      </WrapperBottom>
      <WrapperBox
        style={{ backgroundColor: color, height: boxHeight }}
      ></WrapperBox>
      <WrapperTop>
        <svg viewBox="0 0 1792 335" xmlns="http://www.w3.org/2000/svg">
          <path
            fill={color}
            d="M 0 50 C 259 50 259 209 518 209 L 518 209 L 518 0 L 0 0 Z"
            strokeWidth="0"
          ></path>{' '}
          <path
            fill={color}
            d="M 517 209 C 800 209 800 96 1083 96 L 1083 96 L 1083 0 L 517 0 Z"
            strokeWidth="0"
          ></path>{' '}
          <path
            fill={color}
            d="M 1082 96 C 1437 96 1437 189 1792 189 L 1792 189 L 1792 0 L 1082 0 Z"
            strokeWidth="0"
          ></path>
        </svg>
      </WrapperTop>
    </Container>
  )
}

export default Wave
