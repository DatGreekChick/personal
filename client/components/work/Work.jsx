import styles from './Work.module.css'
import btnStyles from '../../button.module.css'
import { Loading } from '../fallbacks'
import { Link } from '../navigation'
import { useExpansion } from '../../hooks'
import { useFetchProjectsQuery } from '../../../api'

const determineProjectButtonText = link =>
  link.includes('github')
    ? 'code'
    : link.includes('youtube')
      ? 'youtube'
      : 'demo'

export const Work = () => {
  const { toggle, isExpanded, expandedItem } = useExpansion()
  const { data: projects } = useFetchProjectsQuery()

  return (
    <>
      <button className={btnStyles.btnCenter}>
        <Link href='/assets/EleniArvanitisKoniorResume.pdf'>View Resume</Link>
      </button>
      {!projects && <Loading />}
      {projects &&
        projects.map(({ name, role, description, technologies, links }) => (
          <div key={name} className={styles.projectStyle}>
            <span className={styles.lines} onClick={toggle}>
              {name.toUpperCase()}
            </span>
            {isExpanded && expandedItem === name.toUpperCase() && (
              <div className={styles.detail}>
                <p className={styles.role}>{role}</p>
                <p className={styles.description}>{description}</p>
                <br />
                {technologies.map(technology => (
                  <span key={technology} className={styles.tech}>
                    {technology.toUpperCase()}
                  </span>
                ))}
                <br />
                {links.map((link, i) => (
                  <Link key={`${name}-${link}${i}`} href={link}>
                    <button className={btnStyles.btnProject}>
                      {determineProjectButtonText(link)}
                    </button>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
    </>
  )
}
