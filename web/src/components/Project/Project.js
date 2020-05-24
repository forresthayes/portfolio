import { Card, Title, Image } from 'rbx'
import ProjectModal from 'src/components/ProjectModal'
import { useState } from 'react'

const Project = ({ title, cover, ...props }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <Card backgroundColor="light" className="project hvr-box-shadow-outset">
      <Card.Content onClick={() => setIsActive(true)}>
        <Title size={4}>{title}</Title>
        <Image.Container>
          <Image src={cover} />
        </Image.Container>
      </Card.Content>
      <ProjectModal {...{ title, isActive, setIsActive, ...props }} />
    </Card>
  )
}

export default Project
