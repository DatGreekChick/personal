import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMediumM, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { Footer, Copyright, Icon } from '~/client/styles/footer'

const socialLinks = [
  ['https://github.com/datgreekchick', faGithubAlt, '#6e5494'],
  ['https://linkedin.com/in/eleniarvanitis', faLinkedin, '#0077b5'],
  ['https://datgreekchick.medium.com', faMediumM, '#00ab6c'],
  ['https://twitter.com/datgreekchick', faTwitter, '#1DA1F2'],
  ['mailto:eleni.arvanitis@me.com', faEnvelope, '#fbbc05'],
]

export default () => (
  <Footer role='contentinfo'>
    <Copyright>&copy; {`${new Date().getFullYear()} Eleni Konior`}</Copyright>
    <div>
      {socialLinks.map(link => (
        <Icon
          key={link[0]}
          href={link[0]}
          rel='noopener'
          target='_blank'
          tabIndex='0'
          role='presentation'
          color={link[2]}
        >
          <FontAwesomeIcon icon={link[1]} />
        </Icon>
      ))}
    </div>
  </Footer>
)
