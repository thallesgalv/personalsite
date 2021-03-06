import { useEnglish } from '../../contexts/EnglishContext'
import data from '../../data/experience'
import { Container, ContainerCards } from './styles'
import SectionHeading from '../../components/SectionHeading'
import Wave from '../../components/Wave'
import Card from '../../components/Card'

interface ExperienceProps {
  destinyExperience: React.MutableRefObject<HTMLDivElement>
}

const Experience: React.FC<ExperienceProps> = ({ destinyExperience }) => {
  const { english } = useEnglish()
  return (
    <Container ref={destinyExperience}>
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
                verticalAnimation
              />
            ))}
        </ContainerCards>
      </Wave>
    </Container>
  )
}

export default Experience
