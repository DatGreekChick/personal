import { useEffect, useState } from 'react'

import { EventType } from '~/lib/workerTypes'

const WORKER = new Worker(new URL('~/lib/worker.js', import.meta.url))

const useWorker = path => {
  const [results, setResults] = useState([])

  useEffect(() => {
    if (!window.Worker) return

    WORKER.postMessage({ eventType: EventType.FETCH_DATA, path })
  }, [])

  useEffect(() => {
    if (!window.Worker) return

    // Set up event listener for messages from the worker
    WORKER.onmessage = event => setResults(event.data.results)

    return () => WORKER.terminate()
  }, [])

  return { results }
}

export default useWorker
