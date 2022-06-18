import React, { useEffect, useState } from 'react'
import { onSnapshot, collection } from 'firebase/firestore'

import Link from '~/client/components/Link'
import Button from '~/client/components/Button'

import {
  Article,
  ArticleTitle,
  DatePosted,
  Description,
  StyledHr,
} from '~/client/styles/articles'

import db from '~/db/firebase'

const Articles = () => {
  const [articles, setArticles] = useState([])
  useEffect(
    () =>
      onSnapshot(collection(db, 'articles'), snapshot =>
        setArticles(snapshot.docs.map(doc => doc.data()))
      ),
    []
  )

  return articles.reverse().map((article, idx) => (
    <Article key={article.title}>
      <ArticleTitle>{article.title}</ArticleTitle>
      <DatePosted>{article['date-posted']}</DatePosted>
      <Description>{article.description}</Description>
      <Link href={article.link}>
        <Button text='Read More ↗' />
      </Link>
      {idx !== articles.length - 1 && <StyledHr />}
    </Article>
  ))
}

export default Articles
