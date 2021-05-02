import Card from '../../components/Card'
import SubHeadline from '../../components/SubHeadline'
import { Container, ContainerCards } from './styles'
import data from '../../data/portifolio.json'
import MockupSushiBowl from '../../assets/mockupSushiBowl.png'
import MockupTMobile from '../../assets/mockupTMobile.png'
import MockupScaryPages from '../../assets/mockupScaryPages.png'
import MockupLacca from '../../assets/mockupLacca.png'
import MockupAtma from '../../assets/mockupAtma.png'
import MockupEdex from '../../assets/MockupEdex.png'
import MockupMira from '../../assets/mockupMira.png'
import MockupIntegracao from '../../assets/mockupIntegracao.png'

const Portifolio: React.FC = () => {
  return (
    <Container>
      <SubHeadline>Portifólio</SubHeadline>
      <p>Conheça um pouco sobre alguns dos projetos que já realizei:</p>

      <ContainerCards>
        <Card
          tag="Projeto"
          title={data.portifolio[0].name}
          description={data.portifolio[0].description}
          techs={data.portifolio[0].techs}
          link={data.portifolio[0].link}
          image={MockupSushiBowl}
        />
        <Card
          tag="Projeto"
          title={data.portifolio[1].name}
          description={data.portifolio[1].description}
          techs={data.portifolio[1].techs}
          link={data.portifolio[1].link}
          image={MockupTMobile}
        />
        <Card
          tag="Projeto"
          title={data.portifolio[2].name}
          description={data.portifolio[2].description}
          techs={data.portifolio[2].techs}
          link={data.portifolio[2].link}
          image={MockupScaryPages}
        />
        <Card
          tag="Projeto"
          title={data.portifolio[3].name}
          description={data.portifolio[3].description}
          techs={data.portifolio[3].techs}
          link={data.portifolio[3].link}
          image={MockupLacca}
        />
        <Card
          tag="Projeto"
          title={data.portifolio[4].name}
          description={data.portifolio[4].description}
          techs={data.portifolio[4].techs}
          link={data.portifolio[4].link}
          image={MockupAtma}
        />
        <Card
          tag="Projeto"
          title={data.portifolio[5].name}
          description={data.portifolio[5].description}
          techs={data.portifolio[5].techs}
          link={data.portifolio[5].link}
          image={MockupEdex}
        />
        <Card
          tag="Projeto"
          title={data.portifolio[6].name}
          description={data.portifolio[6].description}
          techs={data.portifolio[6].techs}
          link={data.portifolio[6].link}
          image={MockupMira}
        />
        <Card
          tag="Projeto"
          title={data.portifolio[7].name}
          description={data.portifolio[7].description}
          techs={data.portifolio[7].techs}
          link={data.portifolio[7].link}
          image={MockupIntegracao}
        />
      </ContainerCards>
    </Container>
  )
}

export default Portifolio
