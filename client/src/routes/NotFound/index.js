import React from "react";
import { Link } from "react-router-dom";
import logo from "../../shared/assets/logo.png";
import errImg from "../../shared/assets/err-img.png";

import "./style.scss";

const NotFound = () => {
  return (
    <div className="page-single-2">
      <div className="container">
        <div className="middle-content">
          <Link to="/" className="md-logo">
            <img src={logo} alt="BlockBuster" />
          </Link>
          <img src={errImg} alt="404" />
          <h1>Page not found</h1>
          <Link to="/" className="redbtn">
            go home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
