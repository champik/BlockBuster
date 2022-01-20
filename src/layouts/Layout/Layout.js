import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Loader from "../../shared/components/Loader";
import { useSelector } from "react-redux";
import { loadingSelector } from "../../redux/selectors";

const Layout = props => {
    const [isScrolled, setScrolled] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", isScrolledHandler);
        return () => {
            window.removeEventListener("scroll", isScrolledHandler);
        }
    }, []);

    const isScrolledHandler = () => {
        window.pageYOffset ? setScrolled(true) : setScrolled(false);
    }
    const isLoading = useSelector(loadingSelector);

    return (
        <>
            {isLoading && <Loader />}
            <Header isScrolled={isScrolled}/>
            {props.children}
            <Footer />
        </>
    );
};

export default Layout;
