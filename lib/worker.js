import { collection, getDocs } from 'firebase/firestore'

import db from '~/db/firebase'

import { EventType } from './workerTypes.js'

onmessage = async evt => {
  const { eventType } = evt.data

  if (eventType === EventType.FETCH_DATA) {
    const results = []

    const querySnapshot = await getDocs(collection(db, evt.data.path))
    querySnapshot.forEach(doc => results.push(doc.data()))

    postMessage({ results })
  }
}
