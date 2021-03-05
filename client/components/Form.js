import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
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
      <ReCAPTCHA
        ref='recaptcha'
        sitekey={siteKey}
        theme='dark'
        onChange={verifyHumanity}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}
