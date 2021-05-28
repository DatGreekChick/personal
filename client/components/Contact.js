import React, { lazy, Suspense } from 'react'
import Loading from './Loading'
const Form = lazy(() => import('./Form'))

import windowTrick from '~/client/window'

import { Contact, ContactForm, H2, Disclaimer } from '~/client/styles/contact'

const reCaptchaMessage = `This site is protected by reCAPTCHA and
the Google Privacy Policy and Terms of Service apply.`

export default () => {
  windowTrick()

  return (
    <Contact>
      <H2>Let&apos;s Work Together!</H2>
      <ContactForm>
        <span>
          <Suspense fallback={<Loading />}>
            <Form />
          </Suspense>
          <Disclaimer>{reCaptchaMessage}</Disclaimer>
        </span>
      </ContactForm>
    </Contact>
  )
}
