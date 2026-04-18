import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import { Form } from './Form'
import styles from './Contact.module.css'
import { Link } from '../navigation'

const GOOGLE_PRIVACY_POLICY = 'https://policies.google.com/privacy?hl=en-US'
const GOOGLE_TERMS_OF_SERVICE = 'https://policies.google.com/terms?hl=en-US'

export const Contact = () => (
  <GoogleReCaptchaProvider
    reCaptchaKey={process.env.ENTERPRISE_RECAPTCHA_SITE_KEY}
    useEnterprise
  >
    <div className={styles.contact}>
      <h1 style={{ fontSize: '45pt' }}>Let&apos;s Work Together!</h1>
      <Form />
      <p className={styles.disclaimer}>
        This site is protected by reCAPTCHA and the Google{' '}
        <Link href={GOOGLE_PRIVACY_POLICY}>Privacy Policy</Link> and{' '}
        <Link href={GOOGLE_TERMS_OF_SERVICE}>Terms of Service</Link> apply.
      </p>
    </div>
  </GoogleReCaptchaProvider>
)
