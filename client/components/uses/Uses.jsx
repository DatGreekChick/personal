import { useEffect } from 'react'

import { UsesSection } from './UsesSection'
import styles from './Uses.module.css'
import { Loading } from '../fallbacks'
import { scrollToSection } from '../../lib/scroll'
import { useFetchUsesQuery } from '../../../api'

export const Uses = () => {
  const { data: sections } = useFetchUsesQuery()

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      setTimeout(() => scrollToSection(hash), 1000)
    }
  }, [])

  return (
    <div className={styles.uses}>
      <h1 style={{ fontSize: '35pt' }}>What I Use</h1>
      <p className={styles.paragraph}>
        Most of the listed items are items I also use at work but some reflect
        my personal use.
      </p>
      {!sections && <Loading />}
      {sections &&
        sections.map(section => (
          <UsesSection key={section.title} section={section} />
        ))}
    </div>
  )
}
