/* eslint no-undef: 0 no-unused-vars: 0 */

import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const fire = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  databaseURL: 'https://elenicodes.firebaseio.com',
  projectId: 'elenicodes',
})

const db = getDatabase()
export default db
