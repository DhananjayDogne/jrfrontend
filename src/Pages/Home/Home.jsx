import React from "react";
import "./slide.css";
import "./Home.css";
import CardComponent from "./CardComponenet";


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
                <SlidingPhotoGallery photos={photos} loop={ true} />
            </div>
            <h1>Services  </h1>
            <div className="features">
                <CardComponent
                    heading="HIK Form"
                    targetLocation="/"
                />
                <CardComponent
                    heading="Geo Tagging"
                    targetLocation="/"
                />
                <CardComponent
                    heading="Anamoly Detection"
                    targetLocation="/"
                />
                <CardComponent
                    heading="Camera Tempering"
                    targetLocation="/"
                />
                <CardComponent
                    heading="Heat Map Analysis"
                    targetLocation="/"
                />
                <CardComponent
                    heading="Timestamp Analysis"
                    targetLocation="/"
                />
            </div> 
            

           
            
        </div>
    )
}

export default Home;