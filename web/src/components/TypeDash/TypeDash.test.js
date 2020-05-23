import { render, cleanup } from '@testing-library/react'

import TypeDash from './TypeDash'

describe('TypeDash', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<TypeDash />)
    }).not.toThrow()
  })
})
