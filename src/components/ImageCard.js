import React from 'react';

function ImageCard({ image }) {
    return (
        <div className="card">
            <img src={image.img_src} />
        </div>
    );
}

export default ImageCard;
