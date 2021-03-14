import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { ToastProvider } from 'react-toast-notifications'

import App from '~/client/App'

function main() {
  render(
    <AppContainer>
      <ToastProvider autoDismissTimeout={3000} autoDismiss={true}>
        <App />
      </ToastProvider>
    </AppContainer>,
    document.getElementById('main')
  )
}

main()

module.hot && module.hot.accept('~/client/App', main)
