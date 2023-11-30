import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './NewsList.css'

import NewsListCard from './NewsListCard';
import View from './View';
const NewsList = () => {
    const [articles, setArticles] = useState([])
    const [grid, setGrid] = useState(false)
    useEffect(() => {
        async function fetchNewsArticles() {
            try {
                let { data } = await axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=a86c60d8146d469699ff35a46209e0f1');
                console.log(data)
                setArticles([...data.articles])
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchNewsArticles()
    }, [])
    if (articles.length === 0) {
        return <h1 style={{ textAlign: 'center' }}>loading ...</h1>
    } else {
        return (
            <main>
                <View grid={grid} setGrid={setGrid} />
                <div className={grid ? "grid-container" : ""}>
                    {
                        articles.map((article, index) => {
                            return <NewsListCard key={index}
                                article={article} grid={grid} id={index} />
                        })
                    }
                </div>

            </main>
        )
    }
}

export default NewsList