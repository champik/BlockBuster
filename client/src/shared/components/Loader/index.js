import React from "react";
import logo from "../../assets/logo.png";

import "./style.scss";

const Loader = () => {
  return (
    <div id="preloader">
      <img className="logo" src={logo} alt="" width="119" height="58" />
      <div id="status">
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
