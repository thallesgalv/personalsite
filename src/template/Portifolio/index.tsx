import Card from '../../components/Card'
import SubHeadline from '../../components/SubHeadline'
import { Container, ContainerCards } from './styles'
import data from '../../data/portifolio'
import { useEnglish } from '../../contexts/EnglishContext'

const Portifolio: React.FC = () => {
  const { english } = useEnglish()
  return (
    <Container>
      <SubHeadline>Portifólio</SubHeadline>
      <p>Conheça um pouco sobre alguns dos projetos que já realizei:</p>

      <ContainerCards>
        {data.portifolio.map(item => (
          <Card
            key={item.id}
            tag={english ? 'PROJECT' : 'PROJETO'}
            tagEng={english ? 'PROJECT' : 'PROJETO'}
            title={item.title}
            titleEng={item.title}
            description={item.description}
            descriptionEng={item.descriptionEng}
            techs={item.techs}
            link={item.link}
            image={item.image}
          />
        ))}
      </ContainerCards>
    </Container>
  )
}

export default Portifolio
