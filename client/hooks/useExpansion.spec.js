import { describe, expect, it } from 'bun:test'

import { fireEvent, render } from '@testing-library/react'

import { useExpansion } from './useExpansion'

const TestComponent = () => {
  const { toggle, isExpanded, expandedItem } = useExpansion()

  return (
    <div>
      <button onClick={toggle}>Item A</button>
      <button onClick={toggle}>Item B</button>
      <div data-testid='isExpanded'>{String(isExpanded)}</div>
      <div data-testid='expandedItem'>{expandedItem}</div>
    </div>
  )
}

describe('useExpansion', () => {
  it('toggles and tracks expanded item correctly', () => {
    const { getByText, getByTestId } = render(<TestComponent />)

    const itemA = getByText('Item A')
    const itemB = getByText('Item B')

    expect(getByTestId('isExpanded').textContent).toBe('false')

    fireEvent.click(itemA)
    expect(getByTestId('isExpanded').textContent).toBe('true')
    expect(getByTestId('expandedItem').textContent).toBe('Item A')

    fireEvent.click(itemA)
    expect(getByTestId('isExpanded').textContent).toBe('false')

    fireEvent.click(itemB)
    expect(getByTestId('isExpanded').textContent).toBe('true')
    expect(getByTestId('expandedItem').textContent).toBe('Item B')
  })
})
