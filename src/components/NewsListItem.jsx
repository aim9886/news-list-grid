import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './NewsListItem.css'
import { FaHeart } from 'react-icons/fa';
import { userData } from '../App';

const NewsListItem = () => {
    const data = useLocation().state;
    const [article, setArticle] = useState({ ...data });
    // console.log(article)
    const { wlItems, setWLItems } = useContext(userData)
    const [addToWL, setAddToWl] = useState(false)

    useEffect(() => {
        console.log("Wlitems", wlItems)
        if (wlItems.indexOf(article.title) !== -1) {
            setAddToWl(true)
        }
    }, [wlItems])
    function addToWishList() {
        if (!addToWL) {
            window.localStorage.setItem(article.title, JSON.stringify(article))
            // window.localStorage.setItem("one", 1)
            setWLItems((prev) => {
                return [...prev, article.title]
            })
        } else {
            window.localStorage.removeItem(article.title)
            setWLItems((prev) =>
                prev.filter((title) => {
                    return title !== article.title
                })
            )
        }
        setAddToWl((prev) => {
            return !prev
        })
    }
    return (
        <main>
            <div className='article-header'>
                <span className={addToWL && "bg-red"} onClick={addToWishList}>
                    <FaHeart />
                </span>
            </div>
            <div className='article-img'>
                <img src={article.urlToImage} alt="" />
            </div>
            <h3 className='article-title'>{article.title}</h3>
            <div className='article-dateAuthor'>
                <span>By {article.author}</span>
                <span>{new Date(article.publishedAt).toDateString()}</span>
            </div>
            <div className='article-desc'>
                <p>{article.description}</p>
            </div>
            <div className='article-link'>
                <p>Read the Complete Article </p>
                <a href={article.url}>{article.url}</a>
            </div>

        </main>
    )
}

export default NewsListItem