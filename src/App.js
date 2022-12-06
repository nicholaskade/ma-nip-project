import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Header from './Header';
import PlantPage from "./PlantPage";
// import PlantCard from "./PlantCard";

function App() {
  return (
    <div className="App">
      <Header />
            <Switch>
                
                <Route component={() => <About/>}path="/About"/>
                    
                <Route component={() => <PlantPage/>}path="/PlantPage"/>

                <Route component= {() => <Home/>}  path="/"/>
                
            </Switch>
      </div>
  );
};

export default App; 
