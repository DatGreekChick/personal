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

    describe('blocked domains', () => {
      it('rejects emails from jmailservice.com', () => {
        const { validate } = getInputs()[1].options
        expect(validate('spammer@jmailservice.com')).toBe(
          'This email domain is not allowed'
        )
      })

      it('rejects subdomains of blocked domains', () => {
        const { validate } = getInputs()[1].options
        expect(validate('spammer@mail.jmailservice.com')).toBe(
          'This email domain is not allowed'
        )
      })

      it('is case-insensitive', () => {
        const { validate } = getInputs()[1].options
        expect(validate('spammer@JMAILSERVICE.COM')).toBe(
          'This email domain is not allowed'
        )
      })

      it('allows legitimate email addresses', () => {
        const { validate } = getInputs()[1].options
        expect(validate('user@gmail.com')).toBe(true)
        expect(validate('user@example.com')).toBe(true)
      })
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

    describe('spam filtering', () => {
      it('rejects messages containing SEO spam keywords', () => {
        const { validate } = getInputs()[2].options

        expect(validate('We can improve your SEO rankings!')).toBe(
          'Your message was flagged as spam'
        )
        expect(validate('Let us build backlinks for your site')).toBe(
          'Your message was flagged as spam'
        )
        expect(validate('Boost your traffic today')).toBe(
          'Your message was flagged as spam'
        )
        expect(
          validate(
            'I can review your search volume and send traffic projections'
          )
        ).toBe('Your message was flagged as spam')
        expect(
          validate('I can identify high-value keywords in your industry')
        ).toBe('Your message was flagged as spam')
      })

      it('is case-insensitive', () => {
        const { validate } = getInputs()[2].options
        expect(validate('We specialize in Search Engine Optimization')).toBe(
          'Your message was flagged as spam'
        )
      })

      it('allows legitimate messages', () => {
        const { validate } = getInputs()[2].options
        expect(validate('Hi, I love your portfolio!')).toBe(true)
        expect(validate("I'd like to discuss a project with you")).toBe(true)
      })
    })
  })

  it('returns a fresh array on each call', () => {
    expect(getInputs()).not.toBe(getInputs())
  })
})
