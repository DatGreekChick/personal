import React from 'react'
import { styled } from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const SOCIAL_LINKS = [
  ['https://github.com/datgreekchick', brands('github'), '#6e5494'],
  ['https://linkedin.com/in/eleniarvanitis', brands('linkedin'), '#0077b5'],
  ['https://datgreekchick.medium.com', brands('medium'), '#00ab6c'],
  [
    'https://stackoverflow.com/users/9431600/datgreekchick',
    brands('stack-overflow'),
    '#f48024',
  ],
  ['mailto:eleni.arvanitis@me.com', solid('at'), '#fbbc05'],
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
