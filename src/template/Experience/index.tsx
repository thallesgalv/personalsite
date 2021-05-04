import { Container, ContainerCards } from './styles'
import { useEnglish } from '../../contexts/EnglishContext'
import SectionHeading from '../../components/SectionHeading'
import Wave from '../../components/Wave'
import data from '../../data/experience'
import Card from '../../components/Card'

const Experience: React.FC = () => {
  const { english } = useEnglish()
  return (
    <Container>
      <Wave color="#14141B">
        <SectionHeading number={2}>
          {english ? 'Experience' : 'Experiência'}
        </SectionHeading>
        <ContainerCards>
          {data &&
            data.experience.map(workPlace => (
              <Card
                key={workPlace.id}
                tag={workPlace.tag}
                tagEng={workPlace.tag}
                title={workPlace.title}
                titleEng={workPlace.titleEng}
                description={workPlace.description}
                descriptionEng={workPlace.descriptionEng}
                techs={workPlace.techs}
                image={workPlace.image}
                period={workPlace.period}
                periodEng={workPlace.periodEng}
              />
            ))}
        </ContainerCards>
      </Wave>
    </Container>
  )
}

export default Experience
