import React from "react";
import LoginForm from "./LoginForm";


function Home( { firebaseConfig, setUserId } ) {
  return (
    <div>
       <LoginForm firebaseConfig={firebaseConfig} setUserId={setUserId}/>
      <h1>Home!</h1>
    </div>
  )
}

export default Home;