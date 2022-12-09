import React, { useState, useEffect } from 'react'
import { unstable_batchedUpdates } from 'react-dom';
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
                          console.log(`Active Users after Sign In:` + activeUsers);
                      // ...
                        }).catch((error) => {
                        // Handle Errors here.
                        // eslint-disable-next-line
                        const errorCode = error.code;
                        // eslint-disable-next-line
                        const errorMessage = error.message;
                        // The email of the user's account used.
                        // eslint-disable-next-line
                        const email = error.email;
                        // The AuthCredential type that was used.
                        // eslint-disable-next-line
                        const credential = GoogleAuthProvider.credentialFromError(error);
                        // ...
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