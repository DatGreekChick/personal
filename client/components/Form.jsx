/* eslint no-undef: 0 */

import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

import { send } from '@emailjs/browser'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import toast, { Toaster } from 'react-hot-toast'

import {
  createEmailTemplate,
  EMAIL_JS_OPTIONS,
  getInputs,
  SERVICE_ID,
  TEMPLATE_ID,
} from '~/client/lib'
import {
  Asterisk,
  Input,
  StyledForm,
  SubmitButton,
  TextArea,
} from '~/client/styles'

export const Form = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm({
    defaultValues: { name: '', email: '', message: '' },
  })

  const verifyHumanity = useCallback(async () => {
    if (!executeRecaptcha) return

    await executeRecaptcha('contact')
  }, [executeRecaptcha])

  const handleTextAreaInput = evt => {
    const textarea = evt.target
    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
  }

  const sendEmail = async data => {
    await verifyHumanity()

    const emailTemplate = createEmailTemplate(data)
    await send(SERVICE_ID, TEMPLATE_ID, emailTemplate, EMAIL_JS_OPTIONS)
      .then(() => toast.success(`${data.name}, your email has been sent!`))
      .catch(err => toast.error(err.text || 'Failed to send email'))
      .finally(() => reset())
  }

  const inputs = getInputs()
  return (
    <StyledForm onSubmit={handleSubmit(sendEmail)}>
      <Toaster duration={3000} />
      {inputs.map(({ inputType, name, placeholder, options }) => (
        <label key={name}>
          <Asterisk /> {name.charAt(0).toUpperCase() + name.slice(1)}
          {name !== 'message' ? (
            <Input
              {...register(name, options)}
              type={inputType}
              autoComplete={name}
              disabled={isSubmitting}
              placeholder={placeholder}
              aria-describedby={`required-${name}`}
            />
          ) : (
            <TextArea
              {...register(name, options)}
              name={name}
              disabled={isSubmitting}
              placeholder={placeholder}
              onInput={handleTextAreaInput}
              aria-describedby={`required-${name}`}
            />
          )}
        </label>
      ))}
      <span style={{ fontSize: '10pt', paddingBottom: '20px' }}>
        <Asterisk /> Required field
      </span>
      <SubmitButton type='submit' disabled={isPending}>
        {isPending ? 'Submitting...' : 'Submit'}
      </SubmitButton>
    </StyledForm>
  )
}
