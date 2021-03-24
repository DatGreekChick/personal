import React from 'react'
import { useList } from 'react-firebase-hooks/database'

import Link from '~/client/components/Link'
import Button from '~/client/components/Button'

import {
  ArticleTitle,
  DatePosted,
  Description,
  StyledHr,
  Article,
} from '~/client/styles/articles'

import db from '~/content/fire'

export default () => {
  const [snapshots, loading, error] = useList(db.ref('articles'))

  return (
    <>
      {snapshots.reverse().map(snap => {
        const article = snap.val()

        return (
          <Article key={article.title}>
            {error && <strong>Error: {error}</strong>}
            {loading && <span>Loading...</span>}
            {!loading && snapshots && (
              <>
                <ArticleTitle>{article.title}</ArticleTitle>
                <DatePosted>{article['date-posted']}</DatePosted>
                <Description>{article.description}</Description>
                <Link href={article.link}>
                  <Button text='Read More ↗' />
                </Link>
                <StyledHr />
              </>
            )}
          </Article>
        )
      })}
    </>
  )
}
