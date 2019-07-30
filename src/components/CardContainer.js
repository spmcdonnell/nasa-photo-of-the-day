import React from 'react';

import ImageCard from './ImageCard';

import style from './cardscontainer.module.css';

function CardContainer({ images }) {
    return (
        <div className={style.cards}>
            {images.map(image => (
                <ImageCard key={image.id} image={image} />
            ))}
        </div>
    );
}

export default CardContainer;
