import React from 'react'
import Form from '~/client/components/Form'

import windowTrick from '~/client/window'

import { StyledContact, ContactForm, Disclaimer } from '~/client/styles/contact'
import { Header } from '~/client/styles'

const Contact = () => {
  windowTrick()

  return (
    <StyledContact>
      <Header fontSize='60'>Let&apos;s Work Together!</Header>
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
