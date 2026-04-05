const BLOCKED_DOMAINS = ['jmailservice.com']

const SEO_SPAM_KEYWORDS = [
  'seo',
  'search engine optimization',
  'backlink',
  'link building',
  'organic traffic',
  'search ranking',
  'domain authority',
  'keyword research',
]

export const getInputs = () => [
  {
    inputType: 'text',
    name: 'name',
    placeholder: 'Bilbo Baggins',
    options: {
      required: true,
      maxLength: {
        value: 70,
        message: 'Full name must fit within 70 characters',
      },
    },
  },
  {
    inputType: 'email',
    name: 'email',
    placeholder: 'burglar@shire.com',
    options: {
      required: true,
      pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email address' },
      validate: value => {
        const domain = value.toLowerCase().split('@')[1] ?? ''
        const blocked = BLOCKED_DOMAINS.some(
          b => domain === b || domain.endsWith(`.${b}`)
        )
        return !blocked || 'This email domain is not allowed'
      },
    },
  },
  {
    inputType: null,
    name: 'message',
    placeholder:
      "We're looking for a wizard to travel with us to the Lonely Mountain",
    options: {
      required: true,
      maxLength: {
        value: 1500,
        message: 'Messages cannot exceed 1500 characters',
      },
      validate: value => {
        const lower = value.toLowerCase()
        const isSpam = SEO_SPAM_KEYWORDS.some(keyword =>
          lower.includes(keyword)
        )
        return !isSpam || 'Your message was flagged as spam'
      },
    },
  },
]
