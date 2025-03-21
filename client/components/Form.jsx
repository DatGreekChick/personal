/* eslint no-undef: 0 */

import { useCallback, useState, useTransition } from 'react'

import { send } from '@emailjs/browser'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import toast, { Toaster } from 'react-hot-toast'

import {
  Asterisk,
  Input,
  StyledForm,
  SubmitButton,
  TextArea,
} from '~/client/styles'

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

export const Form = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const initialState = {
    name: '',
    email: '',
    message: '',
    token: '',
  }
  const [state, setState] = useState(initialState)
  const [isPending, startTransition] = useTransition()

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

  const handleTextAreaInput = evt => {
    const textarea = evt.target
    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
  }

  const sendEmail = evt => {
    evt.preventDefault()

    const emailTemplate = {
      to_name: 'Eleni',
      from_name: state.name,
      message: state.message,
      reply_to: state.email,
    }

    const emailJsOptions = {
      publicKey: publicId,
      limitRate: { throttle: 10000 }, // 10s
    }

    startTransition(() =>
      send(serviceId, templateId, emailTemplate, emailJsOptions)
        .then(() => toast.success(`${state.name}, your email has been sent!`))
        .catch(err => toast.error(err.text || 'Failed to send email'))
        .finally(() => setState(initialState))
    )
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
          disabled: isPending,
        }

        return (
          <label key={name}>
            <Asterisk />
            {name.charAt(0).toUpperCase() + name.slice(1)}
            {name !== 'message' ? (
              <Input type={type} autoComplete={name} required {...inputProps} />
            ) : (
              <TextArea
                maxLength={1500}
                rows={2}
                onInput={handleTextAreaInput}
                required
                {...inputProps}
              />
            )}
          </label>
        )
      })}
      <span style={{ fontSize: '10pt', paddingBottom: '20px' }}>
        <Asterisk /> Required field
      </span>
      <SubmitButton type='submit' disabled={isPending} onClick={verifyHumanity}>
        {isPending ? 'Submitting...' : 'Submit'}
      </SubmitButton>
    </StyledForm>
  )
}
