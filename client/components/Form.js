/* eslint no-undef: 0 */

import React, { useCallback, useState } from 'react'

import emailjs from '@emailjs/browser'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import toast, { Toaster } from 'react-hot-toast'

import { Submit } from '~/client/components/Button'
import { Asterisk, Input, StyledForm, TextArea } from '~/client/styles/contact'

// emailJS IDs
const serviceId = process.env.EMAILJS_SERVICE_ID
const templateId = process.env.EMAILJS_TEMPLATE_ID
const publicId = process.env.EMAILJS_PUBLIC_ID

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

const Form = () => {
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

    const content = `${state.name}, your email has been sent!`
    emailjs
      .send(serviceId, templateId, emailTemplate, publicId)
      .then(() => toast.success(content))
      .catch(err => toast.error(err.text))
      .finally(() => setState(initialState))
  }

  const inputs = getInputs(state)
  return (
    <StyledForm onSubmit={sendEmail}>
      <Toaster duration={3000} />
      {inputs.map(({ type, name, placeholder, value }) => {
        const inputProps = {
          name,
          placeholder,
          value: value || '',
          'aria-describedby': `required-${name}`,
          onChange: handleChange(name.toLowerCase()),
        }

        return (
          <label key={name}>
            <Asterisk />
            {name.charAt(0).toUpperCase() + name.slice(1)}
            {name !== 'message' ? (
              <Input type={type} autoComplete={name} required {...inputProps} />
            ) : (
              <TextArea maxLength={1500} rows={5} required {...inputProps} />
            )}
          </label>
        )
      })}
      <span style={{ fontSize: '10pt', paddingBottom: '20px' }}>
        <Asterisk /> Required field
      </span>
      <Submit onClick={verifyHumanity} />
    </StyledForm>
  )
}

export default Form
