import React, { useState } from 'react'

import '~/public/assets/styles/articles.css'
import db from '~/content/fire'

export default () => {
  const [articles, setArticles] = useState([])

  db.ref('articles').once('value', snap => {
    for (let i = snap.val().length - 1; i > -1; --i) {
      setArticles([...articles, snap.val()[i]])
    }
  })

  return (
    <div className='all-articles'>
      {articles.map(article => (
        <div key={article.title} className='article'>
          <h3 className='article-title'>{article.title}</h3>
          <p className='date-posted'>{article['date-posted']}</p>
          <p className='description'>{article.description}</p>
          <br />
          <a href={article.link} target='_blank' rel='noopener'>
            <button>Read More ↗</button>
          </a>
          <hr />
        </div>
      ))}
    </div>
  )
}
