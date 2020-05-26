import TechTag from 'src/components/TechTag'
import { Tag, Title } from 'rbx'

const Skills = () => {
  const skills = [
    'JavaScript',
    'React',
    'RedwoodJS',
    'Ruby',
    'Rails',
    'CSS',
    'SQL',
    'Elixir',
  ]

  const skillTags = skills.map((skill) => (
    <TechTag
      key={skill}
      name={skill}
      backgroundColor="#eef6fc"
      color="#1d72aa"
    />
  ))

  return (
    <>
      <Title as="h3" size={4}>
        Skills
      </Title>
      <Tag.Group>{skillTags}</Tag.Group>
    </>
  )
}

export default Skills
