import { render, cleanup } from '@testing-library/react'

import ProjectModal from './ProjectModal'

describe('ProjectModal', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectModal />)
    }).not.toThrow()
  })
})
