import { styled } from 'styled-components'

import { useFetchArticlesQuery } from '~/api/index'

import { Button } from '~/client/components/Button'
import { Link } from '~/client/components/Link'
import { Loading } from '~/client/components/Loading'

const StyledHr = styled.hr`
  border-color: #e0bf9f;
  margin-top: 4%;
`

const Article = styled.div`
  padding: 0.5% 20%;

  @media (min-width: 0px) and (max-width: 319px) {
    padding: 2% 0 0 6%;
  }

  @media (min-width: 320px) and (max-width: 1024px) {
    padding: 2% 8%;
  }
`

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
            <Article key={article.title}>
              <h3 style={{ color: '#e0bf9f', fontSize: '18pt' }}>
                {article.title}
              </h3>
              <p style={{ fontStyle: 'italic' }}>{article['date-posted']}</p>
              <p style={{ fontSize: '14pt' }}>{article.description}</p>
              <Link href={article.link}>
                <Button text='Read More ↗' />
              </Link>
              {idx !== articles.length - 1 && <StyledHr />}
            </Article>
          ))}
    </>
  )
}
