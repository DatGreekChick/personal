import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Footer, Copyright, Icon } from '~/client/styles/footer'

import { socialLinks } from '~/content/secrets'

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
