import React from 'react'
import Form from '~/client/components/Form'

import windowTrick from '~/client/window'

import { Contact, ContactForm, H2, Disclaimer } from '~/client/styles/contact'

export default () => {
  windowTrick()

  return (
    <Contact>
      <H2>Let&apos;s Work Together!</H2>
      <ContactForm>
        <span>
          <Form />
          <Disclaimer>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </Disclaimer>
        </span>
      </ContactForm>
    </Contact>
  )
}
