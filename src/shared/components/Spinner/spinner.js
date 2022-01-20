import React from "react";
import "./style.scss";

const Spinner = props => {
    return (
        <div id="status" style={{height: props.height}}>
            <span></span>
            <span></span>
        </div>
    );
};

export default Spinner;
