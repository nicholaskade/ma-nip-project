import React from "react";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Header from './Header';
import PlantPage from "./PlantPage";

const firebaseConfig = {
  apiKey: "AIzaSyAWmawGApht_8mW5qaObm5vCjwKVrQT3no",
  authDomain: "fern-5ce41.firebaseapp.com",
  projectId: "fern-5ce41",
  storageBucket: "fern-5ce41.appspot.com",
  messagingSenderId: "425307060470",
  appId: "1:425307060470:web:f4edbf41f49b94382954d7",
  measurementId: "G-P52E1RLWM2"
};

function App() {
  const [userId, setUserId] = useState("");

  return (
    <div className="App">
      <Header />
            <Switch>
                
                <Route path="/About">
                  <About />
                </Route>
                    
                <Route path="/PlantPage"> 
                  <PlantPage userId={userId}/>
                </Route>

                <Route path="/">
                  <Home firebaseConfig={firebaseConfig} setUserId={setUserId}/>
                </Route>
                
            </Switch>
      </div>
  );
};

export default App; 
