import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from '~/client/App'

function main() {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('main'))
}

main()

module.hot && module.hot.accept('~/client/App', main)