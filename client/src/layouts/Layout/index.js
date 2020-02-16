import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Loader from "../../shared/components/Loader";
import { useSelector } from "react-redux";
import { loadingSelector } from "../../redux/selectors";

const Layout = props => {
    const isLoading = useSelector(loadingSelector);
    return (
        <>
            {isLoading && <Loader />}
            <Header />
            {props.children}
            <Footer />
        </>
    );
};

export default Layout;
