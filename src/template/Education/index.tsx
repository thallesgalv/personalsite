import SectionHeading from '../../components/SectionHeading'
import { useEnglish } from '../../contexts/EnglishContext'
import { Container, ContainerCards } from './styles'
import data from '../../data/education'
import Card from '../../components/Card'

const Education: React.FC = () => {
  const { english } = useEnglish()
  return (
    <Container>
      <SectionHeading number={3}>
        {english ? 'Education' : 'Formação Acadêmica'}
      </SectionHeading>

      <ContainerCards>
        {data &&
          data.education.map(institution => (
            <Card
              key={institution.id}
              tag={institution.tag}
              tagEng={institution.tagEng}
              title={institution.title}
              titleEng={institution.title}
              description={institution.description}
              descriptionEng={institution.descriptionEng}
              image={institution.image}
              period={institution.period}
              periodEng={institution.period}
            />
          ))}
      </ContainerCards>
    </Container>
  )
}

export default Education
