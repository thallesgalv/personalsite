import { Container, Content } from './styles'

interface SectionHeadingProps {
  number: number
}


const SectionHeading: React.FC<SectionHeadingProps> = ({number, children}) => {
  return (
    <Container>
      <Content>
        <h2>
          <span>{number}</span>{children}
        </h2>
      </Content>
    </Container>
  )
}

export default SectionHeading
