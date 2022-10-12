import React from "react";
import Navbar from "../components/Navbar";

const SongError = () => {
    return (
        <>
            <Navbar />
            <div className="tan d-flex justify-content-center align-items-center text-center content-body">
                <div className="container">
                    <h3 className="mt-3">
                        Sorry, there was an error loading your songs.
                    </h3>
                    <h4>
                        
                    </h4>
                    <h4 className="mt-3">
                        You may not have listened to enough songs or you may be in a private session.
                        Try again!
                    </h4>
                </div>
            </div>
        </>
    );
};

export default SongError;






