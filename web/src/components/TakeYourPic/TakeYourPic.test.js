import { render, cleanup } from '@testing-library/react'

import TakeYourPic from './TakeYourPic'

describe('TakeYourPic', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<TakeYourPic />)
    }).not.toThrow()
  })
})
