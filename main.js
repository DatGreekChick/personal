import { createRoot } from 'react-dom/client'

import { ApiProvider } from '@reduxjs/toolkit/query/react'

import { App } from './client/App'

import { api } from './api'

function main() {
  const container = document.getElementById('main')
  const root = createRoot(container)

  root.render(
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  )
}

main()
