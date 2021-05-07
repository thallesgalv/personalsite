import { Container, ContainerCards } from './styles'
import { useEnglish } from '../../contexts/EnglishContext'
import SectionHeading from '../../components/SectionHeading'
import Wave from '../../components/Wave'
import Card from '../../components/Card'
import LogoOrigamid from '../../assets/LogoOrigamid.png'
import LogoRocketSeat from '../../assets/LogoRocketSeat.png'
import LogoMTE from '../../assets/logoMTE.png'

const LicencesAndCertifications: React.FC = () => {
  const { english } = useEnglish()

  return (
    <Container>
      <Wave color="#14141B">
        <SectionHeading number={4}>
          {english ? 'Licenses & certifications' : 'Licenças e certificados'}
        </SectionHeading>
        <ContainerCards>
          <Card
            title="Origamid"
            titleEng="Origamid"
            tag="Cursos"
            tagEng="Courses"
            image="LogoOrigamid"
          >
            {english ? (
              <div>
                <p>Completed courses: </p>
                <ul>
                  <li>
                    <a
                      href="https://www.origamid.com/certificate/03decbea/"
                      target="_blank"
                      rel="noopener"
                    >
                      JavaScript ES6+
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.origamid.com/certificate/f6764c54/"
                      target="_blank"
                      rel="noopener"
                    >
                      React Js
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.origamid.com/certificate/77cfe67a/"
                      target="_blank"
                      rel="noopener"
                    >
                      Vue.js 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.origamid.com/certificate/1d367756/"
                      target="_blank"
                      rel="noopener"
                    >
                      WordPress for CMS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.origamid.com/certificate/5736771b/"
                      target="_blank"
                      rel="noopener"
                    >
                      WooCormerce for CMS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.origamid.com/certificate/0ea22e7e/"
                      target="_blank"
                      rel="noopener"
                    >
                      CSS with SASS
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <p>Cursos realizados: </p>
                <ul>
                  <li>
                    <a
                      href="https://www.origamid.com/certificate/03decbea/"
                      target="_blank"
                      rel="noopener"
                    >
                      JavaScript ES6+
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.origamid.com/certificate/f6764c54/"
                      target="_blank"
                      rel="noopener"
                    >
                      React Js
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.origamid.com/certificate/77cfe67a/"
                      target="_blank"
                      rel="noopener"
                    >
                      Vue.js 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.origamid.com/certificate/1d367756/"
                      target="_blank"
                      rel="noopener"
                    >
                      WordPress como CMS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.origamid.com/certificate/5736771b/"
                      target="_blank"
                      rel="noopener"
                    >
                      WooCormerce como CMS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.origamid.com/certificate/0ea22e7e/"
                      target="_blank"
                      rel="noopener"
                    >
                      CSS com SASS
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </Card>
          <Card
            title="Rocketseat"
            titleEng="Rocketseat"
            tag="Cursos"
            tagEng="Courses"
            image="LogoRocketSeat"
          >
            {english ? (
              <div>
                <p>Completed courses: </p>
                <ul>
                  <li>Discover Path</li>
                  <li>Next Level Week 5</li>
                </ul>
              </div>
            ) : (
              <div>
                <p>Cursos realizados: </p>
                <ul>
                  <li>Trilha Discover</li>
                  <li>Next Level Week 5</li>
                </ul>
              </div>
            )}
          </Card>
          <Card
            title="MTB de Jornalista"
            titleEng="MTB: Journalist Registration"
            tag="Cadastro de Registro Profissional "
            tagEng="Professional Registration Register"
            image={LogoMTE}
          >
            {english ? (
              <p>
                Professional Registration Register (MTB: Journalist
                Registration) issued by the Ministry of Labor and Employment{' '}
                <a
                  href="https://drive.google.com/open?id=0B6GKzMNwKMCdUFhCNEdTT1FubUU"
                  target="_blank"
                  rel="noopener"
                >
                  Nº0082248/SP
                </a>
              </p>
            ) : (
              <p>
                Cadastro de Registro Profissional (MTB de Jornalista) emitido
                por Ministério do Trabalho e Emprego.{' '}
                <a
                  href="https://drive.google.com/open?id=0B6GKzMNwKMCdUFhCNEdTT1FubUU"
                  target="_blank"
                  rel="noopener"
                >
                  Nº0082248/SP
                </a>
              </p>
            )}
          </Card>
        </ContainerCards>
        <img src={LogoMTE} />
      </Wave>
    </Container>
  )
}

export default LicencesAndCertifications
