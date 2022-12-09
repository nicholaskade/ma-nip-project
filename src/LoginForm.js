import React, { useState, useEffect } from 'react'
import './App.css';

function LoginForm( { 
  // firebaseConfig, 
  userId, 
  // setLikedPlants, 
  // likedPlants, 
  setUserId, 
  onAuthStateChanged, 
  user, 
  setUser, 
  auth, 
  signInWithPopup, 
  signOut,
  provider
} ) {
  
  const [activeUsers, setActiveUsers] = useState([]);

  function getUsers() {
    fetch(`http://localhost:3002/users`)
    .then(res => res.json())
    .then(userData => setActiveUsers(userData));
  };

  useEffect(() => {
    if (userId === undefined) {
      signOut(auth);
    };
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
          setUser(user);
      } else {
        setUser(null);
        setUserId("");
      };
    });
    getUsers();
  }, []);

  function checkUserInfo(UID) {
    console.log(`Active Users: ${activeUsers}`);
    let userFilter = activeUsers.filter((activeUser) => activeUser.id === UID);
    console.log(`User Filter: ${userFilter}`);
      
    if (userFilter.length > 0) {
      console.log("You are an active user!");
      getUsers();
    } else {
      let postRequest = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(
          { "id": UID }
        )
      }
      fetch(`http://localhost:3002/users`, postRequest)
      .then(res => res.json())
      .then(userData => console.log(userData))
      getUsers();
    }
  };

  return  (
    <div id="login-container">
    {user ? 
        <>
          <a className="nav-link">Welcome, {user.displayName}! </a>
            <button onClick={() => signOut(auth)}>Google Logout</button></>
              : <>
                  <a className="nav-link">Sign-In! </a>
                    <button 
                      onClick={() =>  signInWithPopup(auth, provider)
                        .then((result) => {
                          const user = result.user;
                          console.log(`User ID: ${user.uid}`);
                          setUserId(user.uid);
                          checkUserInfo(user.uid);
                          getUsers();
                        }).catch(() => {
                          alert("There was an error with signing into your Google account. Please try again.");
                        })}
                    >
                      Sign in with Google
                    </button>
                </>
              }
    </div>
    )
  };

export default LoginForm;