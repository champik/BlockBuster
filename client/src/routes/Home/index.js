import React from "react";
import NowPlaying from "./NowPlaying";
import CinemaSlider from "./Cinemas";
import { CINEMAS } from "./constants";

const Home = () => {
    return (
        <>
            <NowPlaying />
            <div className="movie-items full-width">
                <div className="row">
                    <div className="col-md-12">
                        {CINEMAS.map((cinema, index) => {
                            return (
                                <CinemaSlider
                                    key={index}
                                    title="Movies"
                                    type={cinema.type}
                                    categories={cinema.categories}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
