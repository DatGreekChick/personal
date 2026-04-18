import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router'

import { FiCheck, FiCopy } from 'react-icons/fi'

import { CallToAction } from './CallToAction'
import styles from './Uses.module.css'
import { Link } from '../navigation'
import { scrollToSection } from '../../lib/scroll'

const CTA_LINKS = {
  podcasts:
    'https://podcasts.apple.com/us/podcast/299-eleni-konior-senior-staff-software-engineer-at/id1464180320?i=1000743464724',
}

const renderItems = items => {
  const sortedItems = [...items].sort((a, b) => a.title.localeCompare(b.title))

  return sortedItems.map((item, index) => (
    <Fragment key={item.title}>
      {item.items ? (
        <Fragment>
          <h3 className={styles.h3} style={index === 0 ? { marginTop: 0 } : {}}>
            {item.title}
          </h3>
          {renderItems(item.items)}
        </Fragment>
      ) : (
        <ul style={{ margin: 0 }}>
          <li>
            <Link href={item.link} className={styles.link}>
              {item.title}
            </Link>
            {item.description && ` - ${item.description}`}
          </li>
        </ul>
      )}
    </Fragment>
  ))
}

export const UsesSection = ({ section }) => {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()

  const sectionTitle = section.title.toLowerCase().split(' ').join('-')
  const hash = `#${sectionTitle}`

  const handleClick = sectionTitle => evt => {
    evt.preventDefault()

    navigator.clipboard.writeText(`${location.href}${hash}`).then(() => {
      setIsVisible(true)

      navigate(hash)
      scrollToSection(sectionTitle)
      setTimeout(() => setIsVisible(false), 1000)
    })
  }

  return (
    <section id={sectionTitle}>
      <h2>
        <a
          href={hash}
          className={styles.routerLink}
          onClick={handleClick(sectionTitle)}
        >
          {section.title}
          <span
            className={[styles.icon, isVisible && styles.iconVisible]
              .filter(Boolean)
              .join(' ')}
          >
            {isVisible ? <FiCheck /> : <FiCopy />}
          </span>
        </a>
      </h2>
      {section.description && (
        <p className={styles.paragraph}>{section.description}</p>
      )}
      {section.title.toLowerCase() === 'podcasts' && (
        <CallToAction
          text="Check out my appearance on the 'Code with Jason' podcast!"
          href={CTA_LINKS.podcasts}
          linkText={'Code with Jason'}
        />
      )}
      {renderItems(section.items)}
    </section>
  )
}
