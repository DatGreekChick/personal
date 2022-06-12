import React from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { ToastProvider } from 'react-toast-notifications'
import { ThemeProvider } from 'styled-components'

import App from '~/client/App'
import GlobalStyle from '~/client/styles/GlobalStyles'

function main() {
  const container = document.getElementById('main')
  const root = createRoot(container)

  root.render(
    // eslint-disable-next-line no-undef
    <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITE_KEY}>
      <ToastProvider autoDismissTimeout={3000} autoDismiss={true}>
        <ThemeProvider theme={{ fontFamily: 'Open Sans, sans-serif' }}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </ToastProvider>
    </GoogleReCaptchaProvider>
  )
}

main()

// eslint-disable-next-line no-undef
import.meta.webpackHot && import.meta.webpackHot.accept('~/client/App', main)
