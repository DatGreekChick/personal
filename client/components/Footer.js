import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import { StyledFooter, Copyright, Icon } from '~/client/styles/footer'

const socialLinks = [
  ['https://github.com/datgreekchick', brands('github'), '#6e5494'],
  ['https://linkedin.com/in/eleniarvanitis', brands('linkedin'), '#0077b5'],
  ['https://datgreekchick.medium.com', brands('medium'), '#00ab6c'],
  ['https://twitter.com/datgreekchick', brands('twitter'), '#1DA1F2'],
  ['mailto:eleni.arvanitis@me.com', solid('at'), '#fbbc05'],
]

const Footer = () => (
  <StyledFooter role='contentinfo'>
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
  </StyledFooter>
)

export default Footer
