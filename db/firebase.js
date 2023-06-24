/* eslint no-undef: 0, sort-imports: 0 */

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const fire = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  databaseURL: 'https://elenicodes.firebaseio.com',
  projectId: 'elenicodes',
})

const db = getFirestore(fire)
export default db
