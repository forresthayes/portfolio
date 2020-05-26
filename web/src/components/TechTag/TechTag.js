import { Tag } from 'rbx'

const TechTag = ({ name, backgroundColor, color }) => {
  return (
    <Tag style={{ backgroundColor, color }} size="medium">
      {name}
    </Tag>
  )
}

export default TechTag
