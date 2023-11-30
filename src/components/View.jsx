import React from 'react';
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

const View = ({ grid, setGrid }) => {
    const toggleView = () => {
        setGrid((prev) => {
            return !prev
        })
    }
    return (
        <section className='view'>
            <div className='gridlist'>
                <span className={grid == false && 'chosenView'} onClick={toggleView}>
                    <FaList />
                </span>
                <span className={grid == true && 'chosenView'} onClick={toggleView}>
                    <IoGrid />
                </span></div>
        </section>
    )
}

export default View