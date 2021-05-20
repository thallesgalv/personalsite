import { useRef } from 'react'
import { useEnglish } from '../../contexts/EnglishContext'
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll'
import {
  AnimationContainer,
  Container,
  FlexBox,
  FlexItem,
  Grid,
  SubGrid
} from './styles'
import data from '../../data/techs'
import SectionHeading from '../../components/SectionHeading'
import TechIcon from '../../components/TechIcon'


interface SkillsProps {
  destinySkills: React.MutableRefObject<HTMLDivElement>
}

const Skills: React.FC<SkillsProps> = ({ destinySkills }) => {
  const { english } = useEnglish()

  const target = useRef(null)
  useAnimateOnScroll(target)

  return (
    <Container ref={destinySkills} >
      <SectionHeading number={1}>
        {english ? 'Skills' : 'Competências'}
      </SectionHeading>
      <AnimationContainer ref={target}>
        <h4>{english ? 'Industry Knowledge:' : 'Conhecimento do setor:'}</h4>

        <Grid>
          {data &&
            data.techs
              .filter(tech => tech.category === 'industryKnowledge')
              .map(i => (
                <TechIcon
                  key={i.id}
                  title={i.title}
                  color={i.color}
                  titleEng={i.titleEng}
                  icon={i.icon}
                />
              ))}
        </Grid>
        <h4>
          {english ? 'Tools & Technologies:' : 'Tecnologias e Ferramentas:'}
        </h4>
        <FlexBox>
          <FlexItem>
            <h5>{english ? 'Experient' : 'Experiente'}</h5>
            <Grid>
              {data &&
                data.techs
                  .filter(tech => tech.category === 'experient')
                  .map(i => (
                    <TechIcon
                      key={i.id}
                      title={i.title}
                      color={i.color}
                      titleEng={i.titleEng}
                      icon={i.icon}
                    />
                  ))}
            </Grid>
          </FlexItem>
          <FlexItem>
            <h5>{english ? 'Improving' : 'Aprimorando'}</h5>
            <Grid>
              {data &&
                data.techs
                  .filter(tech => tech.category === 'improving')
                  .map(i => (
                    <TechIcon
                      key={i.id}
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
            <h5>{english ? 'Next Steps' : 'Próximos Passos'}</h5>
            <SubGrid>
              {data &&
                data.techs
                  .filter(tech => tech.category === 'nextSteps')
                  .map(i => (
                    <TechIcon
                      key={i.id}
                      title={i.title}
                      color={i.color}
                      titleEng={i.titleEng}
                      icon={i.icon}
                    />
                  ))}
            </SubGrid>
          </FlexItem>
          <FlexItem>
            <h5>
              {english
                ? 'Brief Contact / Basic knowledge'
                : 'Breve Contato/Conhecimento básico'}
            </h5>
            <SubGrid>
              {data &&
                data.techs
                  .filter(tech => tech.category === 'briefContact')
                  .map(i => (
                    <TechIcon
                      key={i.id}
                      title={i.title}
                      color={i.color}
                      titleEng={i.titleEng}
                      icon={i.icon}
                    />
                  ))}
            </SubGrid>
          </FlexItem>
        </FlexBox>
        <h4>Soft Skills:</h4>
        <Grid>
          {data &&
            data.techs
              .filter(tech => tech.category === 'softSkills')
              .map(i => (
                <TechIcon
                  key={i.id}
                  title={i.title}
                  color={i.color}
                  titleEng={i.titleEng}
                  icon={i.icon}
                />
              ))}
        </Grid>
      </AnimationContainer>
    </Container>
  )
}

export default Skills
