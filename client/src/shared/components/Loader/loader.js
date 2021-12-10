import React from "react";
import logo from "../../assets/logo.png";
import Spinner from "../Spinner";

import "./style.scss";

const Loader = () => {
    return (
        <div id="preloader">
            <img className="logo" src={logo} alt="" width="119" height="58" />
            <Spinner />
        </div>
    );
};

export default Loader;
