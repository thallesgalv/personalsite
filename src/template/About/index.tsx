import Wave from '../../components/Wave'
import SubHeadline from '../../components/SubHeadline'
import { Box, Container, Content, ImageContainer } from './styles'
import Pic from '../../assets/placeholder.png'
import Skills from '../Skills'
import { useEnglish } from '../../contexts/EnglishContext'
import Experience from '../Experience'
import Education from '../Education'
import LicencesAndCertifications from '../LicencesAndCertifications'
import Accomplishments from '../Accomplishments'
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll'
import { useRef } from 'react'
import useSmoothScroll from '../../hooks/useSmoothScroll'

interface AboutProps {
  destinyAbout: React.MutableRefObject<HTMLDivElement>
}

const About: React.FC<AboutProps> = ({ destinyAbout }) => {
  const { english } = useEnglish()

  const targetContent = useRef(null)
  const targetImage = useRef(null)
  useAnimateOnScroll(targetContent)
  useAnimateOnScroll(targetImage)

  const originSkills = useRef(null)
  const destinySkills = useRef(null)
  useSmoothScroll(originSkills, destinySkills)

  const originExperience = useRef(null)
  const destinyExperience = useRef(null)
  useSmoothScroll(originExperience, destinyExperience)

  const originEducation = useRef(null)
  const destinyEducation = useRef(null)
  useSmoothScroll(originEducation, destinyEducation)

  const originLicencesAndCertifications = useRef(null)
  const destinyLicencesAndCertifications = useRef(null)
  useSmoothScroll(
    originLicencesAndCertifications,
    destinyLicencesAndCertifications
  )

  const originAccomplishments = useRef(null)
  const destinyAccomplishments = useRef(null)
  useSmoothScroll(originAccomplishments, destinyAccomplishments)

  return (
    <Container ref={destinyAbout}  >
      <Wave color="#14141B">
        <Box>
          <Content ref={targetContent}>
            <SubHeadline>{english ? 'About' : 'Sobre'}</SubHeadline>
            {english ? (
              <>
                <p>
                  Front-end developer with multiple
                  <strong ref={originSkills}> skills</strong>. I have
                  <strong ref={originExperience}> experience </strong> in the
                  development of digital products and also in copywriting due to
                  my
                  <strong ref={originEducation}> academic background</strong>.
                </p>
                <p>
                  Professional growth is a priority for me, so I dedicate myself
                  to new courses, guaranteeing{' '}
                  <strong ref={originLicencesAndCertifications}>
                    certifications{' '}
                  </strong>{' '}
                  and future{' '}
                  <strong ref={originAccomplishments}>
                    accomplishments
                  </strong>
                  .
                </p>
              </>
            ) : (
              <>
                <p>
                  Desenvolvedor Front-end com múltiplas
                  <strong ref={originSkills}> competências</strong>. Tenho
                  <strong ref={originExperience}> experiência</strong> no
                  desenvolvimento de produtos digitais e também em copywriting
                  graças à minha
                  <strong ref={originEducation}> formação acadêmica</strong>.
                </p>
                <p>
                  O crescimento profissional é uma prioridade para mim, por isso
                  me dedico a novos cursos, garantindo{' '}
                  <strong ref={originLicencesAndCertifications}>
                    certificados
                  </strong>{' '}
                  e futuras{' '}
                  <strong ref={originAccomplishments}>
                    conquistas
                  </strong>
                  .
                </p>
              </>
            )}
          </Content>
          <ImageContainer>
            <img ref={targetImage} src={Pic} alt="Placeholder" />
          </ImageContainer>
        </Box>
      </Wave>
      <Skills destinySkills={destinySkills} />
      <Experience destinyExperience={destinyExperience} />
      <Education destinyEducation={destinyEducation} />
      <LicencesAndCertifications
        destinyLicencesAndCertifications={destinyLicencesAndCertifications}
      />
      <Accomplishments destinyAccomplishments={destinyAccomplishments} />
    </Container>
  )
}

export default About
