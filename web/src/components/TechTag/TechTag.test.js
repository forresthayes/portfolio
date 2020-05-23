import { render, cleanup } from '@testing-library/react'

import TechTag from './TechTag'

describe('TechTag', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<TechTag />)
    }).not.toThrow()
  })
})
