import { createRoot } from 'react-dom/client'

import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { ThemeProvider } from 'styled-components'

import App from '~/client/App'
import GlobalStyle from '~/client/styles/GlobalStyles'

import { firebaseApi } from '~/api/index'

function main() {
  const container = document.getElementById('main')
  const root = createRoot(container)

  root.render(
    <ApiProvider api={firebaseApi}>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITE_KEY}>
        <ThemeProvider theme={{ fontFamily: 'Open Sans, sans-serif' }}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </GoogleReCaptchaProvider>
    </ApiProvider>
  )
}

main()

import.meta.webpackHot && import.meta.webpackHot.accept('~/client/App', main)
