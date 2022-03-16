import firebase from 'firebase/compat/app'
import { getDatabase } from 'firebase/database'

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  databaseURL: 'https://elenicodes.firebaseio.com',
  projectId: 'elenicodes',
})

const db = getDatabase()
export default db
