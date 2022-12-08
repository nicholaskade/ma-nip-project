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

    useEffect(() => {
      async function getUsers() {
        await fetch(`http://localhost:3002/users`)
        .then(res => res.json())
        .then(userData => setActiveUsers(userData))
      };

      function authStateChange() {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            unstable_batchedUpdates(() => {
              setUser(user);
              setUserId(user.uid);
              checkUserInfo(user.uid);
              console.log(user.uid);
            });
          } else {
            setUser(null);
            setUserId("");
          };
        });
      };

      getUsers();
      authStateChange();
    }, [])

    function checkUserInfo(UID) {
      console.log(activeUsers);
      let userFilter = activeUsers.filter((activeUser) => activeUser.id === UID);
      console.log(userFilter);
        
      if (userFilter.length > 0) {
        console.log("You are an activer user!");
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
        .then(userData => console.log(`User Data Object: ${userData}`))
      }
    };

  return  (
  <div className="login">
  {user ? 
      <><p>Welcome, {user.displayName}!</p><button onClick={() => signOut(auth)}>Google Logout</button></>
          : <><p>Sign-In!</p>
      <button onClick={() =>  signInWithPopup(auth, provider)
          .then((result) => {
          // The signed-in user info.
          // eslint-disable-next-line
          const user = result.user;
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
          })}>
              Sign in with Google
          </button>
      </>}
      </div>
  )
};

export default LoginForm;