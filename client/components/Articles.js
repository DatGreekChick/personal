import React from 'react'

import { useFetchArticlesQuery } from '~/api/index'

import Link from '~/client/components/Link'
import Button from '~/client/components/Button'

import {
  Article,
  ArticleTitle,
  DatePosted,
  Description,
  StyledHr,
} from '~/client/styles/articles'

const Articles = () => {
  const { data: articles } = useFetchArticlesQuery()

  return (
    articles &&
    articles
      .slice()
      .reverse()
      .map((article, idx) => (
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
  )
}

export default Articles
