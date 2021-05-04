import Card from '../../components/Card'
import SubHeadline from '../../components/SubHeadline'
import { Container, ContainerCards } from './styles'
// import data from '../../data/portifolio.json'
// import MockupSushiBowl from '../../assets/mockupSushiBowl.png'
// import MockupTMobile from '../../assets/mockupTMobile.png'
// import MockupScaryPages from '../../assets/mockupScaryPages.png'
// import MockupLacca from '../../assets/mockupLacca.png'
// import MockupAtma from '../../assets/mockupAtma.png'
// import MockupEdex from '../../assets/MockupEdex.png'
// import MockupMira from '../../assets/mockupMira.png'
// import MockupIntegracao from '../../assets/mockupIntegracao.png'

const Portifolio: React.FC = () => {
  return (
    <Container>
      <SubHeadline>Portifólio</SubHeadline>
      <p>Conheça um pouco sobre alguns dos projetos que já realizei:</p>

      {/* <ContainerCards>
        <Card
          tag="PROJETO"
          title={data.portifolio[0].title}
          description={data.portifolio[0].description}
          descriptionEng={data.portifolio[0].descriptionEng}
          techs={data.portifolio[0].techs}
          link={data.portifolio[0].link}
          image={MockupSushiBowl}
        />
        <Card
          tag="PROJETO"
          title={data.portifolio[1].title}
          description={data.portifolio[1].description}
          descriptionEng={data.portifolio[1].descriptionEng}
          techs={data.portifolio[1].techs}
          link={data.portifolio[1].link}
          image={MockupTMobile}
        />
        <Card
          tag="PROJETO"
          title={data.portifolio[2].title}
          description={data.portifolio[2].description}
          descriptionEng={data.portifolio[2].descriptionEng}
          techs={data.portifolio[2].techs}
          link={data.portifolio[2].link}
          image={MockupScaryPages}
        />
        <Card
          tag="PROJETO"
          title={data.portifolio[3].title}
          description={data.portifolio[3].description}
          descriptionEng={data.portifolio[3].descriptionEng}
          techs={data.portifolio[3].techs}
          link={data.portifolio[3].link}
          image={MockupLacca}
        />
        <Card
          tag="PROJETO"
          title={data.portifolio[4].title}
          description={data.portifolio[4].description}
          descriptionEng={data.portifolio[4].descriptionEng}
          techs={data.portifolio[4].techs}
          link={data.portifolio[4].link}
          image={MockupAtma}
        />
        <Card
          tag="PROJETO"
          title={data.portifolio[5].title}
          description={data.portifolio[5].description}
          descriptionEng={data.portifolio[5].descriptionEng}
          techs={data.portifolio[5].techs}
          link={data.portifolio[5].link}
          image={MockupEdex}
        />
        <Card
          tag="PROJETO"
          title={data.portifolio[6].title}
          description={data.portifolio[6].description}
          descriptionEng={data.portifolio[6].descriptionEng}
          techs={data.portifolio[6].techs}
          link={data.portifolio[6].link}
          image={MockupMira}
        />
        <Card
          tag="PROJETO"
          title={data.portifolio[7].title}
          description={data.portifolio[7].description}
          descriptionEng={data.portifolio[7].descriptionEng}
          techs={data.portifolio[7].techs}
          link={data.portifolio[7].link}
          image={MockupIntegracao}
        />
      </ContainerCards> */}
    </Container>
  )
}

export default Portifolio
