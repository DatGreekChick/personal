import { Form } from '~/client/components/Form'
import { Link } from '~/client/components/Link'

import { Header } from '~/client/styles'
import { Disclaimer, StyledContact } from '~/client/styles/contact'

const GOOGLE_PRIVACY_POLICY = 'https://policies.google.com/privacy?hl=en-US'
const GOOGLE_TERMS_OF_SERVICE = 'https://policies.google.com/terms?hl=en-US'

export const Contact = () => (
  <StyledContact>
    <Header fontSize='45'>Let&apos;s Work Together!</Header>
    <Form />
    <Disclaimer>
      This site is protected by reCAPTCHA and the Google{' '}
      <Link href={GOOGLE_PRIVACY_POLICY}>Privacy Policy</Link> and{' '}
      <Link href={GOOGLE_TERMS_OF_SERVICE}>Terms of Service</Link> apply.
    </Disclaimer>
  </StyledContact>
)
