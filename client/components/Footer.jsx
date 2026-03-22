import { styled } from 'styled-components'

import {
  FaAt,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaStackOverflow,
} from 'react-icons/fa'

const SOCIAL_LINKS = [
  ['https://github.com/datgreekchick', FaGithub, '#6e5494'],
  ['https://linkedin.com/in/eleniarvanitis', FaLinkedin, '#0077b5'],
  ['https://datgreekchick.medium.com', FaMedium, '#00ab6c'],
  [
    'https://stackoverflow.com/users/9431600/datgreekchick',
    FaStackOverflow,
    '#f48024',
  ],
  ['mailto:eleni.arvanitis@me.com', FaAt, '#fbbc05'],
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
  z-index: 3;
`

const Icon = styled.a`
  padding-left: 12px;

  &:hover {
    color: ${props => props.color};
  }
`

export const Footer = () => (
  <StyledFooter role='contentinfo'>
    <span style={{ color: '#858686' }}>
      &copy; {`${new Date().getFullYear()} Eleni Konior`}
    </span>
    <div>
      {SOCIAL_LINKS.map(([href, SocialIcon, color]) => (
        <Icon
          key={href}
          href={href}
          rel='noopener noreferrer nofollow'
          target='_blank'
          tabIndex='0'
          role='presentation'
          color={color}
        >
          <SocialIcon />
        </Icon>
      ))}
    </div>
  </StyledFooter>
)
