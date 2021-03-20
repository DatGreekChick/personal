import React from 'react'
import { useList } from 'react-firebase-hooks/database'

import Link from '~/client/components/Link'
import Button from '~/client/components/Button'

import '~/public/assets/styles/articles.css'

import db from '~/content/fire'

export default () => {
  const [snapshots, loading, error] = useList(db.ref('articles'))

  return (
    <div className='all-articles'>
      {snapshots.reverse().map(snap => {
        const article = snap.val()

        return (
          <div key={article.title} className='article'>
            {error && <strong>Error: {error}</strong>}
            {loading && <span>Loading...</span>}
            {!loading && snapshots && (
              <>
                <h3 className='article-title'>{article.title}</h3>
                <p className='date-posted'>{article['date-posted']}</p>
                <p className='description'>{article.description}</p>
                <br />
                <Link href={article.link}>
                  <Button text='Read More ↗' />
                </Link>
                <hr />
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}
