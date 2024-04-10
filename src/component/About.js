import React, { Component, useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const {loggedInUser} = useContext(UserContext);
  return (
    <div>
      <h1>This is About page</h1>
      <div>LoggedIn User: {loggedInUser}</div>
    </div>
  );
};

export default About;
