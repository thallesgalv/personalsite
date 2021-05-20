import { useEnglish } from '../../contexts/EnglishContext'
import SectionHeading from '../../components/SectionHeading'
import data from '../../data/education'
import Card from '../../components/Card'
import { Container, ContainerCards } from './styles'

interface EducationProps {
  destinyEducation: React.MutableRefObject<HTMLDivElement>
}

const Education: React.FC<EducationProps> = ({ destinyEducation }) => {
  const { english } = useEnglish()
  return (
    <Container ref={destinyEducation}>
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
