import Wave from '../../components/Wave'
import SubHeadline from '../../components/SubHeadline'
import { Box, Container, Content, ImageContainer } from './styles'
import Pic from '../../assets/placeholder.png'
import Skills from '../Skills'
import { useEnglish } from '../../contexts/EnglishContext'
import Experience from '../Experience'
import Education from '../Education'
import LicencesAndCertifications from '../LicencesAndCertifications'

const About: React.FC = () => {
  const { english } = useEnglish()
  return (
    <Container>
      <Wave color="#14141B">
        <Box>
          <Content>
            <SubHeadline>{english ? 'About' : 'Sobre'}</SubHeadline>
            {english ? (
              <>
                <p>
                  Front-end developer with multiple
                  <strong> skills</strong>. I have
                  <strong> experience </strong> in the development of digital
                  products and also in copywriting due to my
                  <strong> academic background</strong>.
                </p>
                <p>
                  Professional growth is a priority for me, so I dedicate myself
                  to new courses, guaranteeing <strong>certifications </strong>{' '}
                  and future <strong>accomplishments</strong>.
                </p>
              </>
            ) : (
              <>
                <p>
                  Desenvolvedor Front-end com múltiplas
                  <strong> competências</strong>. Tenho
                  <strong> experiência</strong> no desenvolvimento de produtos
                  digitais e também em copywriting graças à minha
                  <strong> formação acadêmica</strong>.
                </p>
                <p>
                  O crescimento profissional é uma prioridade para mim, por isso
                  me dedico a novos cursos, garantindo{' '}
                  <strong>certificados</strong> e futuras{' '}
                  <strong>conquistas</strong>.
                </p>
              </>
            )}
          </Content>
          <ImageContainer>
            <img src={Pic} alt="Placeholder" />
          </ImageContainer>
        </Box>
      </Wave>
      <Skills />
      <Experience />
      <Education />
      <LicencesAndCertifications />
    </Container>
  )
}

export default About
