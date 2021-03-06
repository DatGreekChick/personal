import React, { useState, useRef } from 'react'
import Recaptcha from 'react-recaptcha'
import { siteKey, link } from '~/content/secrets'

export default () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
    'g-recaptcha-response': '',
  })

  const handleChange = propertyName => evt => {
    setState({
      ...state,
      [propertyName]: evt.target.value,
    })
  }

  const verifyHumanity = req =>
    setState({ ...state, 'g-recaptcha-response': req })

  const { name, email, message } = state

  const handleSubmit = () => {
    fetch(
      `${link}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(
        email
      )}&message=${encodeURIComponent(message)}`
    )
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
  ]

  let captcha = useRef(null)

  return (
    <form id='gform' onSubmit={handleSubmit}>
      {inputs.map(({ type, name, placeholder, value }) => (
        <label className='form-label' key={type}>
          <input
            className='form-input'
            type={type}
            name={name}
            required
            onChange={handleChange(name.toLowerCase())}
            placeholder={placeholder}
            value={value}
          />
          <br />
        </label>
      ))}
      <label className='form-label'>
        <textarea
          className='form-input'
          name='message'
          placeholder="We're looking for a wizard to travel with us to the Lonely Mountain"
          value={message}
          onChange={handleChange('message')}
        />
        <br />
      </label>
      <Recaptcha
        ref={captcha}
        sitekey={siteKey}
        theme='dark'
        onChange={verifyHumanity}
      />
      <button type='submit' onClick={() => captcha.reset()}>
        Submit
      </button>
    </form>
  )
}
