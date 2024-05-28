import '@testing-library/jest-dom'

import { describe, expect, it } from 'vitest'

import Input from './Input'
import { render } from '@testing-library/react'

describe('Input', () => {
  it('renders the input', () => {
    const { getByTestId } = render(
      <Input label='Example' htmlName='name' dataTestId='input-test' />
    )
    expect(getByTestId('input-test')).toBeInTheDocument()
  })
  it('renders the input with a placeholder', () => {
    const { getByPlaceholderText } = render(
      <Input
        label='Example'
        htmlName='name'
        dataTestId='input-test'
        placeholder='Placeholder'
      />
    )
    expect(getByPlaceholderText('Placeholder')).toBeInTheDocument()
  })
  it('renders the input with a value', () => {
    const { getByDisplayValue } = render(
      <Input
        label='Example'
        htmlName='name'
        dataTestId='input-test'
        value='test-example'
      />
    )
    expect(getByDisplayValue('test-example')).toBeInTheDocument()
  })
})
