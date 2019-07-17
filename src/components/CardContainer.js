import React from 'react';
import ImageCard from './ImageCard';

function CardContainer({ images }) {
    return (
        <div className="cards">
            {images.map(image => (
                <ImageCard key={image.id} image={image} />
            ))}
        </div>
    );
}

export default CardContainer;
