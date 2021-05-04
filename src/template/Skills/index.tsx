import { Container, FlexBox, FlexItem, Grid, SubGrid } from './styles'
import SectionHeading from '../../components/SectionHeading'
import data from '../../data/techs.json'
import TechIcon from '../../components/TechIcon'
import { useEnglish } from '../../contexts/EnglishContext'

const Skills: React.FC = () => {
  const { english } = useEnglish()
  return (
    <Container>
      <SectionHeading number={1}>
        {english ? 'Skills' : 'Competências'}
      </SectionHeading>
      <h3>{english ? 'Industry Knowledge:' : 'Conhecimento do setor:'}</h3>
      <Grid>
        {data &&
          data.techs
            .filter(tech => tech.category === 'industryKnowledge')
            .map(i => (
              <TechIcon
                title={i.title}
                color={i.color}
                titleEng={i.titleEng}
                icon={i.icon}
              />
            ))}
      </Grid>
      <h3>
        {english ? 'Tools & Technologies:' : 'Tecnologias e Ferramentas:'}
      </h3>
      <FlexBox>
        <FlexItem>
          <h4>Experiente</h4>
          <Grid>
            {data &&
              data.techs
                .filter(tech => tech.category === 'experient')
                .map(i => (
                  <TechIcon
                    title={i.title}
                    color={i.color}
                    titleEng={i.titleEng}
                    icon={i.icon}
                  />
                ))}
          </Grid>
        </FlexItem>
        <FlexItem>
          <h4>Aprimorando</h4>
          <Grid>
            {data &&
              data.techs
                .filter(tech => tech.category === 'improving')
                .map(i => (
                  <TechIcon
                    title={i.title}
                    color={i.color}
                    titleEng={i.titleEng}
                    icon={i.icon}
                  />
                ))}
          </Grid>
        </FlexItem>
      </FlexBox>
      <FlexBox>
        <FlexItem>
          <h4>Próximos Passos</h4>
          <SubGrid>
            {data &&
              data.techs
                .filter(tech => tech.category === 'nextSteps')
                .map(i => (
                  <TechIcon
                    title={i.title}
                    color={i.color}
                    titleEng={i.titleEng}
                    icon={i.icon}
                  />
                ))}
          </SubGrid>
        </FlexItem>
        <FlexItem>
          <h4>Breve Contato</h4>
          <SubGrid>
            {data &&
              data.techs
                .filter(tech => tech.category === 'briefContact')
                .map(i => (
                  <TechIcon
                    title={i.title}
                    color={i.color}
                    titleEng={i.titleEng}
                    icon={i.icon}
                  />
                ))}
          </SubGrid>
        </FlexItem>
      </FlexBox>
      <h3>Soft Skills:</h3>
      <Grid>
        {data &&
          data.techs
            .filter(tech => tech.category === 'softSkills')
            .map(i => (
              <TechIcon
                title={i.title}
                color={i.color}
                titleEng={i.titleEng}
                icon={i.icon}
              />
            ))}
      </Grid>
    </Container>
  )
}

export default Skills
