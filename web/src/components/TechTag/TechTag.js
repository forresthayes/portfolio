import { Tag } from 'rbx'

const TechTag = ({ name }) => {
  return (
    <Tag style={{ backgroundColor: '#ebfffc', color: '#00947e' }} size="medium">
      {name}
    </Tag>
  )
}

export default TechTag
