import '@testing-library/jest-dom'

import { act, render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ContactDialog } from './RecommendationDialog'

describe('ContactDialog', () => {
  it('renders the input', () => {
    const { getByText } = render(
      <ContactDialog name='example' receiverId='1' />
    )
    const button = getByText('Contactar')
    expect(button).toBeInTheDocument()
    act(() => {
      button.click()
    })
    const cancelButton = getByText('Cancelar')
    const sendButton = getByText('Enviar')
    expect(sendButton).toBeInTheDocument()
    expect(cancelButton).toBeInTheDocument()
  })
})
