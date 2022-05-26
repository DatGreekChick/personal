/* eslint no-undef: 0 */

import React from 'react'
import { createRoot } from 'react-dom/client'
import { ToastProvider } from 'react-toast-notifications'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import App from '~/client/App'

function main() {
  const container = document.getElementById('main')
  const root = createRoot(container)

  root.render(
    <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITE_KEY}>
      <ToastProvider autoDismissTimeout={3000} autoDismiss={true}>
        <App />
      </ToastProvider>
    </GoogleReCaptchaProvider>
  )
}

main()

// eslint-disable-next-line no-undef
import.meta.webpackHot && import.meta.webpackHot.accept('~/client/App', main)
