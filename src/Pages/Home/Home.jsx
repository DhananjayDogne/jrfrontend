import React from "react";
import "./Home.css";
import CardComponent from "./CardComponenet";


const Home = () => { 
    return (
        <div className="home">
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