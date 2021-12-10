import React from "react";
import Trending from "./Trending";
import CinemaSlider from "./Cinemas";
import { CINEMAS } from "./constants";

const Home = () => {
    return (
        <>
            <Trending />
            <div className="movie-items full-width">
                <div className="row">
                    <div className="col-md-12">
                        {CINEMAS.map((cinema, index) => {
                            return (
                                <CinemaSlider
                                    key={index}
                                    title={cinema.name}
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
