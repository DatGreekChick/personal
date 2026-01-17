import { describe, expect, it } from 'bun:test'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CallToAction } from './CallToAction.jsx'

describe('CallToAction', () => {
  it('does not render when there is no href', () => {
    const { queryByText } = render(
      <CallToAction text='Click here to learn more.' linkText='here' />
    )

    expect(queryByText('Click here to learn more')).not.toBeInTheDocument()
  })

  it('does not render when there is no text', () => {
    const { queryByRole } = render(
      <CallToAction href='https://example.com' linkText='here' />
    )

    expect(queryByRole('link')).not.toBeInTheDocument()
  })

  it('renders the full text as a link when linkText is not found', () => {
    const { getByRole } = render(
      <CallToAction
        text='Click here to learn more.'
        href='https://example.com'
        linkText='notfound'
      />
    )

    const link = getByRole('link', { name: 'Click here to learn more.' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('renders with linkText wrapped in anchor when linkText is found', () => {
    const { getByRole, getByText } = render(
      <CallToAction
        text='Click here to learn more.'
        href='https://example.com'
        linkText='here'
      />
    )

    const link = getByRole('link', { name: 'here' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://example.com')
  })
})
