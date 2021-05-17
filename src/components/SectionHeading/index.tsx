import { Container, Content } from './styles'

interface SectionHeadingProps {
  number: number
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  children
}) => {
  return (
    <Container>
      <Content>
        <span>{number}</span>
        <h3>{children}</h3>
      </Content>
    </Container>
  )
}

export default SectionHeading
