import React from "react";
import "./slide.css";
import "./Home.css";
import SlidingPhotoGallery from './slide.jsx'
const Home = () => { 
    const photos = [
        { url: '1.jpeg' },
        { url: '3.jpeg' },
        { url: '2.jpeg' },
        { url: '4.jpg' },
        // Add more photos as needed
    ];
    return (
        <div className="home">
            

            {/* Include the SlidingPhotoGallery component */}
            <div className="slids">
            <SlidingPhotoGallery photos={photos} />
            </div>
            
        </div>
    )
}

export default Home;