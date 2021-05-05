import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['pokemon xyz']);

    /* const handleAdd = () => {
        // setCategories([...categories, 'HunterXHunter'])   // solucion numero 1
        setCategories(categs => [...categs, 'HunterXHunter'])
    } */


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {categories.map((value, index) => {
                    // return (<li key={index + value}>{value}</li>)
                    return <GifGrid key={index + value} category={value} />
                })}
            </ol>

        </>
    )
}
