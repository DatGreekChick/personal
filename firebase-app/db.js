import { getFirestore } from 'firebase/firestore'

import { app } from '~/firebase-app/app'

export const db = getFirestore(app)
