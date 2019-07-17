import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardContainer from './components/CardContainer';

function App() {
    const [images, setImages] = useState([]);
    const API = 'XO8U8Rqr93m5ImUPVggaeCAZd1mMRkpZlrYYsJn4';

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${API}`)
            .then(res => {
                setImages(res.data.photos);
            })
            .catch(err => console.log('There is an error:', err));
    }, []);

    return (
        <div className="App">
            <p>Read through the instructions in the README.md file to build your NASA app! Have fun 🚀!</p>
            <CardContainer images={images} />
        </div>
    );
}

export default App;
