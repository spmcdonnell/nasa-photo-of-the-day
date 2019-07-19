import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
    width: 28%;
    background-color: #ececec;
    padding: 2%;
    margin-bottom: 2%;
    border-radius: 10px;
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.5);
`;

const StyledImg = styled.img`
    width: 100%;
    min-height: 315px;
`;

const StyledH3 = styled.h3`
    text-transform: uppercase;
    color: #dc0081;
`;

const StyledH4 = styled.h4`
    color: #00a07e;
`;

const CameraSpan = styled.span`
    ${props => (props.type === 'Front Hazard Avoidance Camera' ? 'color: green' : null)}
    ${props => (props.type === 'Rear Hazard Avoidance Camera' ? 'color: red' : null)}
    ${props => (props.type === 'Mast Camera' ? 'color: blue' : null)}
`;

function ImageCard({ image }) {
    return (
        <CardDiv>
            <StyledImg src={image.img_src} alt="Curiosity Rover" />
            <StyledH3>{`Taken By ${image.rover.name} Rover`}</StyledH3>
            <StyledH4>
                {`on ${image.earth_date} using the `}
                <CameraSpan type={image.camera.full_name}>{image.camera.full_name}</CameraSpan>
            </StyledH4>
        </CardDiv>
    );
}

export default ImageCard;
