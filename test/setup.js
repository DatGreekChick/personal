import { afterAll, afterEach, beforeAll, expect } from 'bun:test'

import React from 'react'
import { GlobalRegistrator } from '@happy-dom/global-registrator'
import '@testing-library/jest-dom'
import * as matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'

import { server } from '../mocks/server'

// Make React available globally so older JSX transforms that compile to
// `React.createElement` don't require "import React from 'react'" in every file.
// Tests can still use the automatic runtime if available, but this provides
// compatibility with projects that compile JSX to `React.createElement`.
globalThis.React = React

GlobalRegistrator.register()

expect.extend(matchers)

// Start MSW before all tests and clean up after
beforeAll(() => server.listen())

afterEach(() => {
  server.resetHandlers()
  cleanup()
})

afterAll(() => server.close())
