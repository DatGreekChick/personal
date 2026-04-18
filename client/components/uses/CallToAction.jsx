import styles from './Uses.module.css'

export const CallToAction = ({ text = '', href, linkText }) => {
  if (!href || !text) return null

  const index = linkText ? text.indexOf(linkText) : -1

  if (linkText && index !== -1) {
    const before = text.slice(0, index)
    const after = text.slice(index + linkText.length)

    return (
      <p className={styles.callToActionText}>
        {before}
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={linkText}
          className={styles.callToActionAnchor}
        >
          {linkText}
        </a>
        {after}
      </p>
    )
  }

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={text}
      className={styles.callToActionAnchor}
    >
      {text}
    </a>
  )
}
