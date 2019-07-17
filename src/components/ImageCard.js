import React from 'react';
import style from './imagecard.module.css';

function ImageCard({ image }) {
    return (
        <div className={style.card}>
            <img className={style.marsImg} src={image.img_src} alt="Curiosity Rover" />
            <h3>{`Taken By ${image.rover.name} Rover`}</h3>
            <h4>{`on ${image.earth_date} using the ${image.camera.full_name}`}</h4>
        </div>
    );
}

export default ImageCard;
