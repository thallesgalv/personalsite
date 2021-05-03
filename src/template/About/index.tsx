import Wave from '../../components/Wave'
import SubHeadline from '../../components/SubHeadline'
import { Box, Container, Content, ImageContainer } from './styles'
import Pic from '../../assets/placeholder.png'
import Skills from '../Skills'
import { useEnglish } from '../../contexts/EnglishContext'

const About: React.FC = () => {
  const {english} = useEnglish()
  return (
    <Container>
      <Wave color="#14141B">
        <Box>
          <Content>
            <SubHeadline>{english? 'About' : 'Sobre'}</SubHeadline>
            <p>
              Desenvolvedor Front-end com múltiplas{' '}
              <strong>competências</strong>. Tenho
              <strong> experiência</strong> no desenvolvimento de produtos
              digitais e também em copywriting por conta da minha{' '}
              <strong>formação acadêmica</strong>.
            </p>
            <p>
              O crescimento profissional é uma prioridade para mim, por isso me
              dedico em novos cursos, garantindo <strong>certificados</strong> e
              futuras <strong>conquistas</strong>.
            </p>
          </Content>
          <ImageContainer>
            <img src={Pic} alt="Placeholder" />
          </ImageContainer>
        </Box>
      </Wave>
      <Skills />
    </Container>
  )
}

export default About
