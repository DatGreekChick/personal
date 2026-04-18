import { FaGithub, FaLinkedin, FaMedium, FaStackOverflow } from 'react-icons/fa'

import styles from './Footer.module.css'

const SOCIAL_LINKS = [
  ['https://github.com/datgreekchick', FaGithub, '#6e5494'],
  ['https://linkedin.com/in/eleniarvanitis', FaLinkedin, '#0077b5'],
  ['https://datgreekchick.medium.com', FaMedium, '#00ab6c'],
  [
    'https://stackoverflow.com/users/9431600/datgreekchick',
    FaStackOverflow,
    '#f48024',
  ],
]

const CURRENT_YEAR = new Date().getFullYear()

export const Footer = () => (
  <footer role='contentinfo' className={styles.footer}>
    <span style={{ color: '#858686' }}>
      &copy; {`${CURRENT_YEAR} Eleni Konior`}
    </span>
    <div>
      {SOCIAL_LINKS.map(([href, SocialIcon, color]) => (
        <a
          key={href}
          href={href}
          rel='noopener noreferrer nofollow'
          target='_blank'
          tabIndex='0'
          role='presentation'
          className={styles.icon}
          style={{ '--hover-color': color }}
        >
          <SocialIcon />
        </a>
      ))}
    </div>
  </footer>
)
