import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import ShopPlants from "./ShopPlants";
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
            <Switch>

                <Route exact path="/">
                    <Home/>
                 </Route>

                <Route path="/about">
                    <About/>
                </Route>
                
                <Route path="/shopplants">
                    <ShopPlants/>
                </Route>
                
            </Switch>
      </div>
  );
}

export default App; 
