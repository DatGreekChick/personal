/* eslint no-undef: 0 */

import React, { useState, useCallback } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useToasts } from 'react-toast-notifications'

import emailjs from '@emailjs/browser'

import { Submit } from '~/client/components/Button'
import { Input, TextArea } from '~/client/styles/contact'

// emailJS IDs
const serviceId = process.env.EMAILJS_SERVICE_ID
const templateId = process.env.EMAILJS_TEMPLATE_ID
const userId = process.env.EMAILJS_USER_ID

const getInputs = ({ name, email, message }) => [
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

export default () => {
  const { addToast } = useToasts()
  const { executeRecaptcha } = useGoogleReCaptcha()
  const initialState = {
    name: '',
    email: '',
    message: '',
    token: '',
  }
  const [state, setState] = useState(initialState)

  const verifyHumanity = useCallback(async () => {
    if (!executeRecaptcha) {
      console.error('Error executing reCAPTCHA')
      return
    }

    const token = await executeRecaptcha('contact')
    setState({ ...state, token })
  }, [executeRecaptcha])

  const handleChange = propertyName => evt => {
    setState({
      ...state,
      [propertyName]: evt.target.value,
    })
  }

  const sendEmail = evt => {
    evt.preventDefault()

    const emailTemplate = {
      to_name: 'Eleni',
      from_name: state.name,
      message: state.message,
      reply_to: state.email,
    }

    emailjs
      .send(serviceId, templateId, emailTemplate, userId)
      .then(() => addToast('Email sent!', { appearance: 'success' }))
      .catch(err => addToast(err.text, { appearance: 'error' }))
      .finally(() => setState(initialState))
  }

  const inputs = getInputs(state)
  return (
    <form onSubmit={sendEmail}>
      {inputs.map(({ type, name, placeholder, value }) => {
        const inputProps = {
          name,
          placeholder,
          value: value || '',
          onChange: handleChange(name.toLowerCase()),
        }

        return (
          <label key={name}>
            {name !== 'message' ? (
              <Input type={type} required {...inputProps} />
            ) : (
              <TextArea required {...inputProps} />
            )}
            <br />
          </label>
        )
      })}
      <Submit onClick={verifyHumanity} />
    </form>
  )
}
