import React, { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import './App.css';

function LoginForm( {firebaseConfig, setUserId} ) {
        // import { getAnalytics } from "firebase/analytics";

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    const firebaseApp = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
        prompt: "select_account"
    });
    const auth = getAuth(firebaseApp);

  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            setUser(user);
            setUserId(user.uid);
            // ...
          } else {
            // User is signed out
            // ...
            setUser(null);
            setUserId("");
            }
          }
        );

  return <>
    {user ? 
        <><p>Welcome, {user.displayName}!</p><button onClick={() => signOut(auth)}>Google Logout</button></>
            : <><p>Enjoy</p>
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
    </>
};

export default LoginForm;