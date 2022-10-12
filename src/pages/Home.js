import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
    const CLIENT_ID = "8eb9d04fdee24bc78ead10a93c05bcd4"
    const REDIRECT_URL = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    
    

    const handleLogin = () => {
        window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URL}&response_type=token&show_dialog=true`;
    };

    const handleDemoLogin = () => {
        window.location = "demo";
    };

    return (

        <div>
            <Navbar />
            <div className="d-flex tan justify-content-center align-items-center text-center content-body">
                <div>
                    <h1 className="title-medium mt-5">Mood Tracker</h1>
                    <h2 className="bold">How are you?</h2>
                    <h3 className="px-3">
                        A mood tracker based on your recently played music.
                    </h3>
                    <div className="text-center mt-4">
                        <button className="btn-green" onClick={handleLogin}>
                            {" "}
                            Connect with Spotify{" "}
                        </button>
                    </div>
                    <p className="mt-3">— Don't have a Spotify account? —</p>
                    <div className="text-center">
                        <button className="btn-grey" onClick={handleDemoLogin}>
                            {" "}
                            View A Demo{" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default Home;