import { initializeApp } from 'firebase/app'
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from 'firebase/app-check'

self.FIREBASE_APPCHECK_DEBUG_TOKEN =
  process.env.NODE_ENV === 'development'
    ? process.env.APP_CHECK_DEBUG_TOKEN
    : false

const recaptchaToken =
  process.env.NODE_ENV === 'development'
    ? self.FIREBASE_APPCHECK_DEBUG_TOKEN
    : process.env.ENTERPRISE_RECAPTCHA_SITE_KEY

export const app = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  databaseURL: 'https://elenicodes.firebaseio.com',
  projectId: 'elenicodes',
  appId: process.env.FIREBASE_APP_ID,
})

initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider(recaptchaToken),
  isTokenAutoRefreshEnabled: true, // allow auto-refresh
})
