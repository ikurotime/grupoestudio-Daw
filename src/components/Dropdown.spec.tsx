import '@testing-library/jest-dom'

import { act, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { DropDown } from './DropDown'

describe('Dropdown', () => {
  it('renders the Dropdown', () => {
    const { getByTestId } = render(<DropDown />)
    expect(getByTestId('dropdown-action')).toBeInTheDocument()
    const button = getByTestId('dropdown-action')
    act(() => {
      button.click()
    })
    screen.debug()
  })
})
