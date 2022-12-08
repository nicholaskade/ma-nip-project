import React from "react";

function About() {
  return (
    <div>
      <h1 class="h1">Start building your home greenhouse today! </h1>

      <h3 class="h3">
        At Fern, our mission is to inspire green spaces by connecting people
        with plants.
        <br></br>
        We believe a strong relationship with plants will lead to greener, more
        sustainable lifestyles.
        <br></br>
        Through Fern, you can keep your plants happy and healthy with our
        easy-to-use personalized plant care guide.
        <img src={require("./giphy.gif")} class="home-gif" alt="my-gif" />
      </h3>
    </div>
  );
}

export default About;
