import React, { useState, useEffect } from 'react'   //'rafc' comando inicial para crear componentes
import { GifGridItem } from './GifGridItem';
import { handleGetGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        handleGetGifs(category).then(imgs => setImages(imgs))
    }, [category])

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {

                    images.map(img => (
                        <GifGridItem key={img.id} img={img} />
                    ))

                }
            </div>
        </>
    )
}
