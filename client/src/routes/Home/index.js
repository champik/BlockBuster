import React from "react";
import NowPlaying from "./NowPlaying";
import CinemaSlider from "./Cinemas";

const Home = () => {
    return (
        <>
            <NowPlaying />
            <div className="movie-items full-width">
                <div className="row">
                    <div className="col-md-12">
                        <CinemaSlider title="Movies"/>
                        <CinemaSlider title="Tv"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;