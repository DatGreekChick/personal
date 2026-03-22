import { describe, expect, it } from 'bun:test'

import { getInputs } from './formInputs'

describe('getInputs', () => {
  it('returns three fields: name, email, message', () => {
    const inputs = getInputs()

    expect(inputs).toHaveLength(3)
    expect(inputs.map(i => i.name)).toEqual(['name', 'email', 'message'])
  })

  describe('name field', () => {
    it('is a text input', () => {
      const { inputType } = getInputs()[0]
      expect(inputType).toBe('text')
    })

    it('is required', () => {
      const { options } = getInputs()[0]
      expect(options.required).toBe(true)
    })

    it('has a maxLength of 70 with a descriptive message', () => {
      const { options } = getInputs()[0]

      expect(options.maxLength.value).toBe(70)
      expect(options.maxLength.message).toBe(
        'Full name must fit within 70 characters'
      )
    })
  })

  describe('email field', () => {
    it('is an email input', () => {
      const { inputType } = getInputs()[1]
      expect(inputType).toBe('email')
    })

    it('is required', () => {
      const { options } = getInputs()[1]
      expect(options.required).toBe(true)
    })

    it('accepts valid email addresses', () => {
      const { pattern } = getInputs()[1].options

      expect(pattern.value.test('user@example.com')).toBe(true)
      expect(pattern.value.test('burglar@shire.com')).toBe(true)
    })

    it('rejects invalid email addresses', () => {
      const { pattern } = getInputs()[1].options

      expect(pattern.value.test('notanemail')).toBe(false)
      expect(pattern.value.test('@nodomain')).toBe(false)
      expect(pattern.value.test('missing@tld')).toBe(false)
    })

    it('has a descriptive pattern message', () => {
      const { pattern } = getInputs()[1].options
      expect(pattern.message).toBe('Invalid email address')
    })
  })

  describe('message field', () => {
    it('is not a standard input type (renders as textarea)', () => {
      const { inputType } = getInputs()[2]
      expect(inputType).toBeNull()
    })

    it('is required', () => {
      const { options } = getInputs()[2]
      expect(options.required).toBe(true)
    })

    it('has a maxLength of 1500 with a descriptive message', () => {
      const { options } = getInputs()[2]

      expect(options.maxLength.value).toBe(1500)
      expect(options.maxLength.message).toBe(
        'Messages cannot exceed 1500 characters'
      )
    })
  })

  it('returns a fresh array on each call', () => {
    expect(getInputs()).not.toBe(getInputs())
  })
})
