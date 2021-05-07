import SectionHeading from '../../components/SectionHeading'
import { useEnglish } from '../../contexts/EnglishContext'
import { Container, Content } from './styles'
import { GiTrophy } from 'react-icons/gi'

const Accomplishments: React.FC = () => {
  const { english } = useEnglish()
  return (
    <Container>
      <SectionHeading number={5}>
        {english ? 'Accomplishments' : 'Conquistas'}
      </SectionHeading>
      <Content>
        <h2>
          <GiTrophy />{' '}
          {english
            ? 'Finalist of the XXI Congresso de Ciências da Comunicação na Região Sudeste (XXI Congress of Communication Sciences in the Southeast Region)'
            : 'Finalista do XXI Congresso de Ciências da Comunicação na Região Sudeste '}
        </h2>
        <p>
          {english
            ? "My undergraduate thesis 'Eight decades of Cine Roxy: A multimedia reporting model' was an Expocom finalist in the 'Production in Digital Journalism (JO7)' category, within the XXI Congress of Communication Sciences in the Southeast Region. The project got top marks by the university's board. "
            : 'Meu trabalho de conclusão de curso “Oito décadas de Cine Roxy: Um modelo de reportagem multimídia” foi finalista do Expocom na categoria “Produção em Jornalismo Digital (JO7)” dentro do XXI Congresso de Ciências da Comunicação na Região Sudeste. O projeto obteve nota máxima pela banca da universidade. '}
          <a
            href="https://noticias.unisanta.br/campus/ex-aluno-do-curso-de-jornalismo-da-unisanta-foi-selecionado-para-o-xxiii-premio-expocom-2016"
            target="_blank"
            rel="noopener"
          >
            {english ? ' See more here' : ' Veja mais aqui'}
          </a>
        </p>
      </Content>
    </Container>
  )
}

export default Accomplishments
