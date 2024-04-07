import React, { Component, useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const userLoginData = useContext(UserContext);
  return (
    <div>
      <h1>This is About page</h1>
      <div>LoggedIn User: {userLoginData.name}</div>
    </div>
  );
};

export default About;
