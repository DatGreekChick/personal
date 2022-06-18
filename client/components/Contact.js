import React from 'react'
import Form from '~/client/components/Form'

import windowTrick from '~/client/window'

import { StyledContact, Disclaimer } from '~/client/styles/contact'
import { Header } from '~/client/styles'

const Contact = () => {
  windowTrick()

  return (
    <StyledContact>
      <Header fontSize='45'>Let&apos;s Work Together!</Header>
      <Form />
      <Disclaimer>
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </Disclaimer>
    </StyledContact>
  )
}

export default Contact
