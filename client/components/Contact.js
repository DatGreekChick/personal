import React from 'react'
import Form from './Form'

import windowTrick from '~/client/window'

import '~/public/assets/styles/contact.css'
import { Contact, ContactForm, H2, Disclaimer } from '~/client/styles/contact'

const reCaptchaMessage = `This site is protected by reCAPTCHA and
the Google Privacy Policy and Terms of Service apply.`

export default () => {
  windowTrick()

  return (
    <Contact>
      <H2>Let's Work Together!</H2>
      <ContactForm>
        <span>
          <Form />
          <Disclaimer>{reCaptchaMessage}</Disclaimer>
        </span>
      </ContactForm>
    </Contact>
  )
}
