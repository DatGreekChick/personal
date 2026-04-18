import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import { Form, Link } from '.'
import { Disclaimer, Header, StyledContact } from '../styles'

const GOOGLE_PRIVACY_POLICY = 'https://policies.google.com/privacy?hl=en-US'
const GOOGLE_TERMS_OF_SERVICE = 'https://policies.google.com/terms?hl=en-US'

export const Contact = () => (
  <GoogleReCaptchaProvider
    reCaptchaKey={process.env.ENTERPRISE_RECAPTCHA_SITE_KEY}
    useEnterprise
  >
    <StyledContact>
      <Header fontSize='45'>Let&apos;s Work Together!</Header>
      <Form />
      <Disclaimer>
        This site is protected by reCAPTCHA and the Google{' '}
        <Link href={GOOGLE_PRIVACY_POLICY}>Privacy Policy</Link> and{' '}
        <Link href={GOOGLE_TERMS_OF_SERVICE}>Terms of Service</Link> apply.
      </Disclaimer>
    </StyledContact>
  </GoogleReCaptchaProvider>
)
