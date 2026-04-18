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

// Warm up Firebase during idle time so it's ready before the user navigates
// to a data route, without blocking the home page critical path
const idle = globalThis.requestIdleCallback ?? (fn => setTimeout(fn, 0))
idle(() => import('./firebase-app'))
