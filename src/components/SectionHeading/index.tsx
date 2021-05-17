import { Container, Content } from './styles'

interface SectionHeadingProps {
  number: number
}


const SectionHeading: React.FC<SectionHeadingProps> = ({number, children}) => {
  return (
    <Container>
      <Content>
        <h3>
          <span>{number}</span>{children}
        </h3>
      </Content>
    </Container>
  )
}

export default SectionHeading
