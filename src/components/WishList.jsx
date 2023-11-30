import React, { useEffect, useState } from 'react'
import View from './View'
import NewsListCard from './NewsListCard'

const WishList = () => {
    const [grid, setGrid] = useState(false)
    const [wlLength, setWLLength] = useState(0)
    const [wishListItems, setWishListItems] = useState([])

    useEffect(() => {
        // setWLLength(window.localStorage.length);
        let list = [];
        let length = window.localStorage.length
        console.log(length)
        for (let i = 0; i < length; i++) {
            let key = window.localStorage.key(i)
            let data = window.localStorage.getItem(key);
            console.log(key, data)
            list.push(JSON.parse(data))
        }
        console.log(list)
        setWishListItems([...list])
    }, [])
    return (
        <main>
            <View grid={grid} setGrid={setGrid} />
            <div className={grid ? "grid-container" : ""}>
                {
                    wishListItems.map((article, index) => {
                        return <NewsListCard key={index}
                            article={article} grid={grid} />
                    })
                }
            </div>

        </main>
    )
}

export default WishList