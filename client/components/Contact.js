import React from 'react'

import Form from '~/client/components/Form'

import { Header } from '~/client/styles'
import { Disclaimer, StyledContact } from '~/client/styles/contact'

const Contact = () => (
  <StyledContact>
    <Header fontSize='45'>Let&apos;s Work Together!</Header>
    <Form />
    <Disclaimer>
      This site is protected by reCAPTCHA and the Google Privacy Policy and
      Terms of Service apply.
    </Disclaimer>
  </StyledContact>
)

export default Contact
