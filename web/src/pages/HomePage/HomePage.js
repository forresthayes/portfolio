import {
  Hero,
  Title,
  Container,
  Section,
  Image,
  Column,
  Content,
  Button,
} from 'rbx'
import TypeDash from 'src/components/TypeDash'
import Flix from 'src/components/Flix'
import TakeYourPic from 'src/components/TakeYourPic'
import Skills from 'src/components/Skills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import portrait from './portrait.jpeg'

const HomePage = () => {
  return (
    <>
      <Hero color="dark">
        <Hero.Body>
          <Container textAlign="centered">
            <Image.Container
              size={128}
              style={{ display: 'inline-block', marginBottom: '1em' }}
            >
              <Image rounded src={portrait} />
            </Image.Container>
            <Title size={2}>Forrest Hayes</Title>
            <Title as="h2" size={4} subtitle style={{ marginBottom: '0.5rem' }}>
              Web Developer
            </Title>
            <Button as="a" color="dark" href="https://github.com/forresthayes">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Button>
          </Container>
        </Hero.Body>
      </Hero>
      <Column.Group centered>
        <Column size="three-fifths">
          <Section style={{ paddingBottom: '0' }}>
            <Container>
              <Title as="h3" size={4}>
                About Me
              </Title>
              <Content>
                <p>
                  I am a self-taught, full-stack web developer and a graduate of{' '}
                  <a href="https://www.sjc.edu">St. John&apos;s College</a>,
                  where I studied Liberal Arts. I&apos;m currently focusing on{' '}
                  <a href="https://reactjs.org">React</a> and{' '}
                  <a href="https://redwoodjs.com">RedwoodJS</a>.
                </p>
                <p>
                  You can see my code on{' '}
                  <a href="https://github.com/forresthayes">GitHub</a> and{' '}
                  <a href="https://exercism.io/profiles/forresthayes">
                    Exercism.io
                  </a>
                  . Email me at <strong>forresthayes</strong> at{' '}
                  <strong>pm</strong> dot <strong>me</strong>.
                </p>

                <Skills />
              </Content>
            </Container>
          </Section>
          <Section>
            <Container>
              <Title as="h3" size={4}>
                Projects
              </Title>
              <hr />

              <Column.Group centered>
                <Column>
                  <TakeYourPic />
                </Column>
                <Column>
                  <TypeDash />
                </Column>
                <Column>
                  <Flix />
                </Column>
              </Column.Group>
            </Container>
          </Section>
        </Column>
      </Column.Group>
    </>
  )
}

export default HomePage
