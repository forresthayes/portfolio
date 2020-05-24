import { Modal, Delete, Button, Content, Tag } from 'rbx'
import TechTag from 'src/components/TechTag'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const ProjectModal = ({
  isActive,
  setIsActive,
  title,
  slides,
  description,
  tags,
  links,
}) => {
  const [value, setValue] = useState(0)
  const close = () => setIsActive(false)
  const onChange = (value) => setValue(value)
  const images = slides.map((i) => <img key={i} src={i} />)
  const techTags = tags.map((tag) => <TechTag key={tag} name={tag} />)

  return (
    <Modal active={isActive} closeOnBlur closeOnEsc onClose={close}>
      <Modal.Background />
      <Modal.Card>
        <Modal.Card.Head>
          <Modal.Card.Title>{title}</Modal.Card.Title>
          <Delete />
        </Modal.Card.Head>
        <Modal.Card.Body>
          <Carousel
            slides={images}
            value={value}
            onChange={onChange}
            arrowLeft={<FontAwesomeIcon icon={faChevronLeft} size="2x" />}
            arrowLeftDisabled={
              <FontAwesomeIcon
                icon={faChevronLeft}
                size="2x"
                color="lightgrey"
              />
            }
            arrowRight={<FontAwesomeIcon icon={faChevronRight} size="2x" />}
            arrowRightDisabled={
              <FontAwesomeIcon
                icon={faChevronRight}
                size="2x"
                color="lightgrey"
              />
            }
            addArrowClickHandler
            dots
          />
          <Content style={{ marginTop: '1.5rem' }}>
            <p>{description}</p>
          </Content>
          <Tag.Group>{techTags}</Tag.Group>
        </Modal.Card.Body>
        <Modal.Card.Foot
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Button onClick={close}>Close</Button>
          <Button.Group>
            <Button href={links.live}>Live Link</Button>
            <Button href={links.github}>GitHub</Button>
          </Button.Group>
        </Modal.Card.Foot>
      </Modal.Card>
    </Modal>
  )
}

export default ProjectModal
