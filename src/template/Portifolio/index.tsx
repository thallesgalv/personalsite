import Card from '../../components/Card'
import SubHeadline from '../../components/SubHeadline'
import { Container, ContainerCards } from './styles'
import data from '../../data/portifolio'
import { useEnglish } from '../../contexts/EnglishContext'

interface PortifolioProps {
  destinyPortifolio: React.MutableRefObject<HTMLDivElement>
}

const Portifolio: React.FC<PortifolioProps> = ({ destinyPortifolio }) => {
  const { english } = useEnglish()
  return (
    <Container ref={destinyPortifolio}>
      <SubHeadline>{english ? 'Portifolio' : 'Portifólio'}</SubHeadline>
      <p>
        {english
          ? 'See a little about some of my projects:'
          : 'Conheça um pouco sobre alguns dos projetos que já realizei:'}
      </p>

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
