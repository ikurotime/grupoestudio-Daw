import '@testing-library/jest-dom'

import { describe, expect, it } from 'vitest'

import { InputWithLabel } from './InputWithLabel'
import { render } from '@testing-library/react'

describe('InputWithLabel', () => {
  it('renders the input', () => {
    const { getByLabelText } = render(
      <InputWithLabel label='Example' name='example' />
    )
    expect(getByLabelText('Example')).toBeInTheDocument()
  })
  it('renders the input with a placeholder', () => {
    const { getByPlaceholderText } = render(
      <InputWithLabel
        label='Example'
        name='example'
        placeholder='Placeholder'
      />
    )
    expect(getByPlaceholderText('Placeholder')).toBeInTheDocument()
  })
  it('renders the input with a value', () => {
    const { getByDisplayValue } = render(
      <InputWithLabel label='Example' name='example' value='Value' />
    )
    expect(getByDisplayValue('Value')).toBeInTheDocument()
  })
  it('renders the input with a disabled state', () => {
    const { getByLabelText } = render(
      <InputWithLabel label='Example' name='example' disabled />
    )
    expect(getByLabelText('Example')).toBeDisabled()
  })
})
