import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CardColFour from "../Card/CardColFour";
import Slider from "../Slider";

const Other = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-5">
          <div className="mb-5"></div>
          <CardColFour />
          <CardColFour />
          <CardColFour />
        </div>
      </div>

      <div id="services">
        <div className="container-fluid">
          <div className="row my-5">
            <div className="mb-5">
              <h1 className="text-warning">Our Services</h1>
            </div>
            <CardColFour />
            <CardColFour />
            <CardColFour />
          </div>
        </div>
      </div>
      <div id="about">
        <div className="container-fluid">
          <div className="row my-5">
            <div className="mb-5">
              <h1 className="text-warning">About Us</h1>
            </div>
            <CardColFour />
            <CardColFour />
            <CardColFour />
          </div>
        </div>
      </div>
    </>
  );
};

export default Other;
