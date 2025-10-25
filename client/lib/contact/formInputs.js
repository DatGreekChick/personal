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
    },
  },
]
