/* eslint no-undef: 0, sort-imports: 0 */

import { initializeApp } from 'firebase/app'
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from 'firebase/app-check'
import { getFirestore } from 'firebase/firestore'

const fire = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  databaseURL: 'https://elenicodes.firebaseio.com',
  projectId: 'elenicodes',
  appId: process.env.FIREBASE_APP_ID,
})

self.FIREBASE_APPCHECK_DEBUG_TOKEN =
  process.env.NODE_ENV === 'development'
    ? process.env.APP_CHECK_DEBUG_TOKEN
    : false

const recaptchaToken =
  process.env.NODE_ENV === 'development'
    ? self.FIREBASE_APPCHECK_DEBUG_TOKEN
    : process.env.ENTERPRISE_RECAPTCHA_SITE_KEY

initializeAppCheck(fire, {
  provider: new ReCaptchaEnterpriseProvider(recaptchaToken),
  isTokenAutoRefreshEnabled: true, // allow auto-refresh
})

export const db = getFirestore(fire)
