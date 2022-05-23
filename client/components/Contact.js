import React from 'react'
import Form from '~/client/components/Form'

import windowTrick from '~/client/window'

import {
  StyledContact,
  ContactForm,
  H2,
  Disclaimer,
} from '~/client/styles/contact'

const Contact = () => {
  windowTrick()

  return (
    <StyledContact>
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
    </StyledContact>
  )
}

export default Contact
