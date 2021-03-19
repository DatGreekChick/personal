import React from 'react'
import Form from './Form'

import windowTrick from '~/client/window'

import '~/public/assets/styles/contact.css'

const reCaptchaMessage = `This site is protected by reCAPTCHA and
the Google Privacy Policy and Terms of Service apply.`

export default () => {
  windowTrick()

  return (
    <div className='contact'>
      <h2>Let's Work Together!</h2>
      <div className='contact-form'>
        <span>
          <Form />
          <div className='disclaimer'>{reCaptchaMessage}</div>
        </span>
      </div>
    </div>
  )
}
