import '@testing-library/jest-dom'

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import StarRating from './StarRating'

describe('StarRating', () => {
  it('renders the input', () => {
    const { getAllByText } = render(<StarRating rating={5} />)
    expect(getAllByText('★')).toHaveLength(5)
    screen.debug()
  })
})
