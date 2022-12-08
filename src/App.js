import React from "react";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// import MyPlants from "./MyPlants";
import MyPlantPage from "./MyPlantPage";

const firebaseConfig = {
  apiKey: "AIzaSyAWmawGApht_8mW5qaObm5vCjwKVrQT3no",
  authDomain: "fern-5ce41.firebaseapp.com",
  projectId: "fern-5ce41",
  storageBucket: "fern-5ce41.appspot.com",
  messagingSenderId: "425307060470",
  appId: "1:425307060470:web:f4edbf41f49b94382954d7",
  measurementId: "G-P52E1RLWM2",
};

function App() {
  initializeApp(firebaseConfig);
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  const auth = getAuth(firebaseApp);

  const [user, setUser] = useState(false);
  const [userId, setUserId] = useState("");
  const [likedPlants, setLikedPlants] = useState([]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/About">
          <About />
        </Route>

        <Route path="/PlantPage">
          <PlantPage
            userId={userId}
            setLikedPlants={setLikedPlants}
            likedPlants={likedPlants}
          />
        </Route>

        <Route path="/MyPlantPage">
          <MyPlantPage />
        </Route>

        <Route path="/">
          <Home
            firebaseConfig={firebaseConfig}
            setUserId={setUserId}
            userId={userId}
            setLikedPlants={setLikedPlants}
            likedPlants={likedPlants}
            onAuthStateChanged={onAuthStateChanged}
            user={user}
            setUser={setUser}
            auth={auth}
            signInWithPopup={signInWithPopup}
            signOut={signOut}
            provider={provider}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
