import {
  AnimationContainer,
  Container,
  FlexBox,
  FlexItem,
  Grid,
  SubGrid
} from './styles'
import SectionHeading from '../../components/SectionHeading'
import data from '../../data/techs'
import TechIcon from '../../components/TechIcon'
import { useEnglish } from '../../contexts/EnglishContext'
import {useRef } from 'react'
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll'

interface SkillsProps {
  destinySkills: React.MutableRefObject<HTMLDivElement>
}

const Skills: React.FC<SkillsProps> = ({ destinySkills }) => {
  const { english } = useEnglish()

  const target = useRef(null)
  useAnimateOnScroll(target)

  return (
    <Container ref={destinySkills}>
      <SectionHeading number={1}>
        {english ? 'Skills' : 'Competências'}
      </SectionHeading>
      <AnimationContainer ref={target}>
        <h3>{english ? 'Industry Knowledge:' : 'Conhecimento do setor:'}</h3>

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
        <h3>
          {english ? 'Tools & Technologies:' : 'Tecnologias e Ferramentas:'}
        </h3>
        <FlexBox>
          <FlexItem>
            <h4>{english ? 'Experient' : 'Experiente'}</h4>
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
            <h4>{english ? 'Improving' : 'Aprimorando'}</h4>
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
            <h4>{english ? 'Next Steps' : 'Próximos Passos'}</h4>
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
            <h4>
              {english
                ? 'Brief Contact / Basic knowledge'
                : 'Breve Contato/Conhecimento básico'}
            </h4>
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
        <h3>Soft Skills:</h3>
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
