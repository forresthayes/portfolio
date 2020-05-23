import { Card, Title, Image } from 'rbx'
import ProjectModal from 'src/components/ProjectModal'
import { useState } from 'react'

const Project = ({ title, cover, ...props }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <Card backgroundColor="light">
      <Card.Content>
        <Title size={4}>{title}</Title>
        <Image.Container onClick={() => setIsActive((state) => !state)}>
          <Image src={cover} />
        </Image.Container>
        <ProjectModal {...{ title, isActive, setIsActive, ...props }} />
      </Card.Content>
    </Card>
  )
}

export default Project
