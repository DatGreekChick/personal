/* eslint no-undef: 0 */

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { ToastProvider } from 'react-toast-notifications'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import App from '~/client/App'

function main() {
  render(
    <AppContainer>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SECRET_KEY}>
        <ToastProvider autoDismissTimeout={3000} autoDismiss={true}>
          <App />
        </ToastProvider>
      </GoogleReCaptchaProvider>
    </AppContainer>,
    document.getElementById('main')
  )
}

main()

// eslint-disable-next-line no-undef
module.hot && module.hot.accept('~/client/App', main)
