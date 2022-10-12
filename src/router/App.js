import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Mood from "../pages/Mood";
import NotFound from "../pages/NotFound";
import SpotifyRedirect from "../pages/SpotifyRedirect";
import SongError from "../pages/error";


function App() {

  return (
     
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route exact path="/"> <Home /> </Route>
                  <Route exact path="/redirect"> <SpotifyRedirect /></Route>
                  <Route exact path="/yourmood"> <Mood /></Route>
                  <Route exaxt path="/songerror"> <SongError /></Route>
                  <Route> <NotFound /> </Route>
              </Routes>
          </div>
      </BrowserRouter>
  
  );
}

export default App;
