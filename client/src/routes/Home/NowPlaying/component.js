import React from "react";
import Slider from "react-slick";
import { NavLink, Link } from "react-router-dom";
import moment from "moment";
import ModalVideo from "react-modal-video";

import IosPlay from "react-ionicons/lib/IosPlay";
import MdHeart from "react-ionicons/lib/MdHeart";
import MdShare from "react-ionicons/lib/MdShare";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoGoogleplus from "react-ionicons/lib/LogoGoogleplus";
import LogoYoutube from "react-ionicons/lib/LogoYoutube";
import MdStar from "react-ionicons/lib/MdStar";
import IosArrowBack from "react-ionicons/lib/IosArrowBack";
import IosArrowForward from "react-ionicons/lib/IosArrowForward";

import "react-modal-video/scss/modal-video.scss";

const nowPlaying = props => {
    const { nowPlaying, trailer, setTrailer, image, setImage } = props;
    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <button onClick={onClick} className="slick-arrow slick-prev">
                <IosArrowBack fontSize="60px" />
            </button>
        );
    }

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <button onClick={onClick} className="slick-arrow slick-next">
                <IosArrowForward fontSize="60px" />
            </button>
        );
    }

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        draggable: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        afterChange: index => setImage(index),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };
    return (
        <div className="slider" style={image && {backgroundImage: 'url(' + process.env.REACT_APP_IMAGE_URL + image + ')'}}>
            <div className="container">
                <Slider {...settings}>
                    {nowPlaying &&
                        nowPlaying.map(movie => {
                            return (
                                <div key={movie.id} className="movie-item">
                                    <div className="d-flex">
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <div className="title-in">
                                                <div className="cate">
                                                    {movie.genres.map(genre => {
                                                        return (
                                                            <span
                                                                key={genre.id}
                                                            >
                                                                <NavLink to="/movies">
                                                                    {genre.name}
                                                                </NavLink>
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                                <h1>
                                                    <Link
                                                        to={`movie/${movie.id}`}
                                                    >
                                                        {movie.title}{" "}
                                                    </Link>
                                                </h1>
                                                <h2>{movie.tagline}</h2>
                                                <div className="social-btn">
                                                    <button
                                                        className="parent-btn"
                                                        type="button"
                                                        onClick={() =>
                                                            setTrailer(
                                                                movie.trailer
                                                            )
                                                        }
                                                    >
                                                        <i>
                                                            <IosPlay />
                                                        </i>{" "}
                                                        Watch Trailer
                                                    </button>
                                                    <a
                                                        href="/"
                                                        className="parent-btn"
                                                    >
                                                        <i>
                                                            <MdHeart fontSize="20px" />
                                                        </i>{" "}
                                                        Add to Favorite
                                                    </a>
                                                    <div className="hover-bnt">
                                                        <a
                                                            href="/"
                                                            className="parent-btn"
                                                        >
                                                            <i>
                                                                <MdShare fontSize="20px" />
                                                            </i>{" "}
                                                            share
                                                        </a>
                                                        <div className="hvr-item">
                                                            <a
                                                                href="/"
                                                                className="hvr-grow"
                                                            >
                                                                <i>
                                                                    <LogoFacebook />
                                                                </i>
                                                            </a>
                                                            <a
                                                                href="/"
                                                                className="hvr-grow"
                                                            >
                                                                <i>
                                                                    <LogoTwitter />
                                                                </i>
                                                            </a>
                                                            <a
                                                                href="/"
                                                                className="hvr-grow"
                                                            >
                                                                <i>
                                                                    <LogoGoogleplus />
                                                                </i>
                                                            </a>
                                                            <a
                                                                href="/"
                                                                className="hvr-grow"
                                                            >
                                                                <i>
                                                                    <LogoYoutube />
                                                                </i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mv-details">
                                                    <p>
                                                        <i>
                                                            <MdStar />
                                                        </i>
                                                        <span>
                                                            {movie.rating}
                                                        </span>{" "}
                                                        /10
                                                    </p>
                                                    <ul className="mv-infor">
                                                        <li>
                                                            Run Time:{" "}
                                                            {movie.runtime}’
                                                        </li>
                                                        <li>
                                                            Release:{" "}
                                                            {moment(
                                                                movie.releaseDate
                                                            ).format(
                                                                "DD MMMM YYYY"
                                                            )}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <Link
                                                    to={`movie/${movie.id}`}
                                                    className="item item-1 redbtn"
                                                >
                                                    more detail
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12 col-xs-12">
                                            <div className="mv-img-2">
                                                <Link to={`movie/${movie.id}`}>
                                                    <img
                                                        src={`${process.env.REACT_APP_POSTER_URL}${movie.poster}`}
                                                        alt="poster"
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </Slider>
            </div>
            <ModalVideo
                channel="youtube"
                isOpen={Boolean(trailer)}
                videoId={trailer}
                onClose={() => setTrailer()}
            />
        </div>
    );
};
export default nowPlaying;
