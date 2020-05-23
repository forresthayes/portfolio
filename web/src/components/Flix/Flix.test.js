import { render, cleanup } from '@testing-library/react'

import Flix from './Flix'

describe('Flix', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Flix />)
    }).not.toThrow()
  })
})
