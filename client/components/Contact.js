import React from 'react'
import Form from './Form'

import windowTrick from '~/client/window'

import '~/public/assets/styles/contact.css'

export default () => {
  windowTrick()

  return (
    <div className='contact'>
      <h2>Let's Work Together!</h2>
      <div className='contact-form'>
        <span>
          <Form />
        </span>
      </div>
    </div>
  )
}
