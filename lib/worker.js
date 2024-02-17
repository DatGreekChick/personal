import { collection, getDocs, query } from 'firebase/firestore'

import db from '~/db/firebase'

import { EventType } from './workerTypes.js'

onmessage = async evt => {
  const { eventType } = evt.data

  if (eventType === EventType.FETCH_DATA) {
    const projects = []

    const querySnapshot = await getDocs(query(collection(db, 'projects')))
    querySnapshot.forEach(doc => projects.push(doc.data()))

    postMessage({ projects })
  }
}
