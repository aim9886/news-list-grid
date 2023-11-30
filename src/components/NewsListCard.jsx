import React from 'react'
import { Link } from 'react-router-dom';
const NewsListCard = ({ article, grid, id }) => {

  return (
    <article className={grid ? "card grid-card" : "card"}>
      <div className='card-img'>
        <img src={article.urlToImage || ""} alt="" />
      </div>
      <div className='card-content'>
        <h4>{article.title}</h4>
        <p>{article.description}</p>
        <Link to={`/news/${article.title}`} state={{ ...article }}>read more</Link>
      </div>
    </article>
  )
}

export default NewsListCard