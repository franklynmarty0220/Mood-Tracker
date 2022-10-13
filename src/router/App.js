import React from "react";

import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Mood from "../pages/Mood";
import YourMoodDemo from "../pages/MoodDemo";
import NotFound from "../pages/NotFound";
import SpotifyRedirect from "../pages/SpotifyRedirect";
import SongError from "../pages/error";

import "./App.css";


function App() {

  return (
    <div className="app"> 
      <BrowserRouter>
              <Routes>
                    <Route path="/" element={<Home />} exact={true} />
                    <Route path="/redirect" element={<SpotifyRedirect />} />
                    <Route path="/yourmood" element={<Mood />} />
                    <Route path="/demo" element={<YourMoodDemo />} />
                    <Route path="/songerror" component={<SongError />} />
                    <Route component={NotFound} />
              </Routes>
      </BrowserRouter>
    </div>  
  
  );
}

export default App;
