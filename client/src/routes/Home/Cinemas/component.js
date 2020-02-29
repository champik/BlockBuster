import React from "react";

import Slider from "react-slick";
import { Link } from "react-router-dom";

import { SLIDER_SETTINGS } from "./constants";
import Spinner from "../../../shared/components/Spinner";

import MdStar from "react-ionicons/lib/MdStar";
import IosArrowForward from "react-ionicons/lib/IosArrowForward";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.scss";

const Cinemas = props => {
    const { title, categories, movies, activeCategory, setactiveCategory, isLoading } = props;
    return (
        <>
            <div className="title-hd">
                <h2>{title}</h2>
                <Link to="movie" className="viewall">
                    View all <IosArrowForward fontSize="15px" />
                </Link>
            </div>
            <div className="movies-filter">
                <ul className="tab-links">
                    {categories.map(category => {
                        return (
                            <li key={category.id}>
                                <button
                                    className={
                                        activeCategory === category.slag
                                            ? "active"
                                            : null
                                    }
                                    onClick={() =>
                                        setactiveCategory(category.slag)
                                    }
                                >
                                    #{category.title}
                                </button>
                            </li>
                        );
                    })}
                </ul>
                {isLoading ? (
                    <Spinner height="408px"/>
                ) : (
                    <Slider {...SLIDER_SETTINGS} className="slick-multiItem2">
                        {movies &&
                            movies.map(movie => {
                                return (
                                    <div className="movie-item" key={movie.id}>
                                        <Link to={`movie/${movie.id}`}>
                                            <div className="mv-img">
                                                <img
                                                    src={`${process.env.REACT_APP_POSTER_URL}${movie.poster}`}
                                                    alt="poster"
                                                />
                                            </div>
                                            <div className="hvr-inner redbtn">
                                                Read more
                                                <i className="ion-android-arrow-dropright"></i>
                                            </div>
                                            <div className="title-in">
                                                <h6>{movie.title}</h6>
                                                <div className="mv-details">
                                                    <p>
                                                        <i>
                                                            <MdStar />
                                                        </i>
                                                        <span>
                                                            {movie.rating}
                                                        </span>
                                                        /10
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                    </Slider>
                )}
            </div>
        </>
    );
};

export default Cinemas;
