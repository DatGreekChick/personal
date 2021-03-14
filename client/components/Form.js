import React, { useState } from 'react'
import Recaptcha from 'react-recaptcha'
import { useToasts } from 'react-toast-notifications'

import emailjs from 'emailjs-com'

import { siteKey, serviceId, templateId, userId } from '~/content/secrets'

export default () => {
  const { addToast } = useToasts()
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  })

  emailjs.init(userId)

  const handleChange = propertyName => evt => {
    setState({
      ...state,
      [propertyName]: evt.target.value,
    })
  }

  const { name, email, message } = state

  const sendEmail = evt => {
    evt.preventDefault()

    emailjs
      .sendForm(serviceId, templateId, evt.target, userId)
      .then(() => addToast('Email sent!', { appearance: 'success' }))
      .catch(err => addToast(err.text, { appearance: 'error' }))
  }

  const inputs = [
    {
      type: 'text',
      name: 'name',
      value: name,
      placeholder: 'Bilbo Baggins',
    },
    {
      type: 'email',
      name: 'email',
      value: email,
      placeholder: 'burglar@shire.com',
    },
    {
      type: null,
      name: 'message',
      value: message,
      placeholder:
        "We're looking for a wizard to travel with us to the Lonely Mountain",
    },
  ]

  return (
    <form onSubmit={sendEmail}>
      {inputs.map(({ type, name, placeholder, value }) => (
        <label className='form-label' key={name}>
          {name !== 'message' ? (
            <input
              className='form-input'
              type={type}
              name={name}
              required
              onChange={handleChange(name.toLowerCase())}
              placeholder={placeholder}
              value={value}
            />
          ) : (
            <textarea
              className='form-input'
              name={name}
              required
              onChange={handleChange(name.toLowerCase())}
              placeholder={placeholder}
              value={value}
            />
          )}
          <br />
        </label>
      ))}
      <Recaptcha
        sitekey={siteKey}
        size='compact'
        theme='dark'
        render='explicit'
      />
      <button type='submit'>Submit</button>
    </form>
  )
}
