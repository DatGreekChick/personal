import React from 'react'
import { useList } from 'react-firebase-hooks/database'

import Link from '~/client/components/Link'
import Button from '~/client/components/Button'
import Loading from '~/client/components/Loading'

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

  // store the records in an array, otherwise using snapshots.reverse() will
  // cause the records to switch order every time the route is clicked
  const reversed = []
  snapshots.forEach(snap => reversed.push(snap))

  return reversed.reverse().map(snap => {
    const article = snap.val()

    return (
      <Article key={article.title}>
        {error && <strong>Error: {error}</strong>}
        {loading && <Loading />}
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
  })
}
