import styles from './Articles.module.css'
import btnStyles from '../../button.module.css'
import { Loading } from '../fallbacks'
import { Link } from '../navigation'
import { useFetchArticlesQuery } from '../../../api'

export const Articles = () => {
  const { data: articles } = useFetchArticlesQuery()

  return (
    <>
      {!articles && <Loading />}
      {articles &&
        articles
          .slice()
          .reverse()
          .map((article, idx) => (
            <div key={article.title} className={styles.article}>
              <h3 style={{ color: '#e0bf9f', fontSize: '18pt' }}>
                {article.title}
              </h3>
              <p style={{ fontStyle: 'italic' }}>{article['date-posted']}</p>
              <p style={{ fontSize: '14pt' }}>{article.description}</p>
              <Link href={article.link}>
                <button className={btnStyles.btn}>Read More ↗</button>
              </Link>
              {idx !== articles.length - 1 && <hr className={styles.hr} />}
            </div>
          ))}
    </>
  )
}
