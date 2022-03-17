/* eslint no-undef: 0 */

import React from 'react'
import { render } from 'react-dom'
import { ToastProvider } from 'react-toast-notifications'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import App from '~/client/App'

function main() {
  render(
    <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITE_KEY}>
      <ToastProvider autoDismissTimeout={3000} autoDismiss={true}>
        <App />
      </ToastProvider>
    </GoogleReCaptchaProvider>,
    document.getElementById('main')
  )
}

main()
