import { render, cleanup } from '@testing-library/react'

import Skills from './Skills'

describe('Skills', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Skills />)
    }).not.toThrow()
  })
})
