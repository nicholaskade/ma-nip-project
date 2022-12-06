import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Header from './Header';
import PlantPage from "./PlantPage";
import PlantList from "./PlantList";

function App() {
  return (
    <div className="App">
      <Header />
      <PlantPage/>
            <Switch>
                HOMEPAGE
                <Route exact path="/Home">
                    <Home/>
                 </Route>

                <Route path="/About">
                    <About/>
                </Route>
                
                <Route path="/PlantList">
                    <PlantList/>
                </Route>
                
            </Switch>
      </div>
  );
}

export default App; 
