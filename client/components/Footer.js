import React from 'react'
import { styled } from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

const SOCIAL_LINKS = [
  ['https://github.com/datgreekchick', faGithub, '#6e5494'],
  ['https://linkedin.com/in/eleniarvanitis', faLinkedin, '#0077b5'],
  ['https://datgreekchick.medium.com', faMedium, '#00ab6c'],
  [
    'https://stackoverflow.com/users/9431600/datgreekchick',
    faStackOverflow,
    '#f48024',
  ],
  ['mailto:eleni.arvanitis@me.com', faAt, '#fbbc05'],
]

const StyledFooter = styled.footer`
  position: fixed;
  margin-bottom: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 1);
  z-index: 2;
`

const Icon = styled.a`
  padding-left: 12px;

  &:hover {
    color: ${props => props.color};
  }
`

const Footer = () => (
  <StyledFooter role='contentinfo'>
    <span style={{ color: '#858686' }}>
      &copy; {`${new Date().getFullYear()} Eleni Konior`}
    </span>
    <div>
      {SOCIAL_LINKS.map(link => (
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
