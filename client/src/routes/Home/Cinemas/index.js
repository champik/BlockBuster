import React from "react";
import Cinemas from "./component";

const CinemasContainer = props => {
    const { title } = props;
    return <Cinemas title={title} />;
};

export default CinemasContainer;
