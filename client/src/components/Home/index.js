import React from "react";
import Slider from "react-slick";
import { NavLink, Link } from "react-router-dom";

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

import poster from "../../shared/assets/poster.jpg";

import poster1 from "../../shared/assets/mv-it1.jpg";
import poster2 from "../../shared/assets/mv-it2.jpg";
import poster3 from "../../shared/assets/mv-it3.jpg";
import poster4 from "../../shared/assets/mv-it4.jpg";
import poster5 from "../../shared/assets/mv-it5.jpg";
import poster6 from "../../shared/assets/mv-it6.jpg";
import poster7 from "../../shared/assets/mv-it7.jpg";
import poster8 from "../../shared/assets/mv-it8.jpg";
import poster9 from "../../shared/assets/mv-it9.jpg";
import poster10 from "../../shared/assets/mv-it10.jpg";
import poster11 from "../../shared/assets/mv-it11.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

const Home = () => {
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

  const multipleSetting = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="slider">
        <div className="container">
          <Slider {...settings}>
            <div className="movie-item">
              <div className="row">
                <div className="col-md-8 col-sm-12 col-xs-12">
                  <div className="title-in">
                    <div className="cate">
                      <span className="blue">
                        <NavLink to="/movies">Sci-fi</NavLink>
                      </span>
                      <span className="yell">
                        <NavLink to="/movies">Action</NavLink>
                      </span>
                      <span className="orange">
                        <NavLink to="/movies">Advanture</NavLink>
                      </span>
                    </div>
                    <h1>
                      <Link to="movie">
                        guardians of the
                        <br />
                        galaxy <span>2015</span>
                      </Link>
                    </h1>
                    <div className="social-btn">
                      <a href="/" className="parent-btn">
                        <i>
                          <IosPlay />
                        </i>{" "}
                        Watch Trailer
                      </a>
                      <a href="/" className="parent-btn">
                        <i>
                          <MdHeart fontSize="20px" />
                        </i>{" "}
                        Add to Favorite
                      </a>
                      <div className="hover-bnt">
                        <a href="/" className="parent-btn">
                          <i>
                            <MdShare fontSize="20px" />
                          </i>{" "}
                          share
                        </a>
                        <div className="hvr-item">
                          <a href="/" className="hvr-grow">
                            <i>
                              <LogoFacebook />
                            </i>
                          </a>
                          <a href="/" className="hvr-grow">
                            <i>
                              <LogoTwitter />
                            </i>
                          </a>
                          <a href="/" className="hvr-grow">
                            <i>
                              <LogoGoogleplus />
                            </i>
                          </a>
                          <a href="/" className="hvr-grow">
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
                        <span>7.4</span> /10
                      </p>
                      <ul className="mv-infor">
                        <li> Run Time: 2h21’ </li>
                        <li> Rated: PG-13 </li>
                        <li> Release: 1 May 2015</li>
                      </ul>
                    </div>
                    <Link to="movie" className="item item-1 redbtn">
                      more detail
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <div className="mv-img-2">
                    <Link to="movie">
                      <img src={poster} alt="poster" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="movie-item">
              <div className="row">
                <div className="col-md-8 col-sm-12 col-xs-12">
                  <div className="title-in">
                    <div className="cate">
                      <span className="blue">
                        <NavLink to="/movies">Sci-fi</NavLink>
                      </span>
                      <span className="yell">
                        <NavLink to="/movies">Action</NavLink>
                      </span>
                      <span className="orange">
                        <NavLink to="/movies">Advanture</NavLink>
                      </span>
                    </div>
                    <h1>
                      <Link to="movie">
                        guardians of the
                        <br />
                        galaxy <span>2015</span>
                      </Link>
                    </h1>
                    <div className="social-btn">
                      <a href="/" className="parent-btn">
                        <i>
                          <IosPlay />
                        </i>{" "}
                        Watch Trailer
                      </a>
                      <a href="/" className="parent-btn">
                        <i>
                          <MdHeart fontSize="20px" />
                        </i>{" "}
                        Add to Favorite
                      </a>
                      <div className="hover-bnt">
                        <a href="/" className="parent-btn">
                          <i>
                            <MdShare fontSize="20px" />
                          </i>{" "}
                          share
                        </a>
                        <div className="hvr-item">
                          <a href="/" className="hvr-grow">
                            <i>
                              <LogoFacebook />
                            </i>
                          </a>
                          <a href="/" className="hvr-grow">
                            <i>
                              <LogoTwitter />
                            </i>
                          </a>
                          <a href="/" className="hvr-grow">
                            <i>
                              <LogoGoogleplus />
                            </i>
                          </a>
                          <a href="/" className="hvr-grow">
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
                        <span>7.4</span> /10
                      </p>
                      <ul className="mv-infor">
                        <li> Run Time: 2h21’ </li>
                        <li> Rated: PG-13 </li>
                        <li> Release: 1 May 2015</li>
                      </ul>
                    </div>
                    <Link to="movie" className="item item-1 redbtn">
                      more detail
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <div className="mv-img-2">
                    <Link to="movie">
                      <img src={poster} alt="poster" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="movie-items full-width">
        <div className="row">
          <div className="col-md-12">
            <div className="title-hd">
              <h2>in theater</h2>
              <Link to="movie" className="viewall">
                View all <IosArrowForward fontSize="15px" />
              </Link>
            </div>
            <div className="movies-filter">
              <ul className="tab-links">
                <li className="active">
                  <a href="#tab1-h2">#Popular</a>
                </li>
                <li>
                  <a href="#tab2-h2"> #Coming soon</a>
                </li>
                <li>
                  <a href="#tab3-h2"> #Top rated </a>
                </li>
                <li>
                  <a href="#tab4-h2"> #Most reviewed</a>
                </li>
              </ul>
              <Slider {...multipleSetting} className="slick-multiItem2">
                <div className="slide-it">
                  <div className="movie-item">
                    <div className="mv-img">
                      <img src={poster9} alt="" />
                    </div>
                    <div className="hvr-inner">
                      <a href="moviesingle.html">
                        {" "}
                        Read more{" "}
                        <i className="ion-android-arrow-dropright"></i>{" "}
                      </a>
                    </div>
                    <div className="title-in">
                      <h6>
                        <a href="/">Interstellar</a>
                      </h6>
                      <div className="mv-details">
                        <p>
                          <i>
                            <MdStar />
                          </i>
                          <span>7.4</span> /10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-it">
                  <div className="movie-item">
                    <div className="mv-img">
                      <img src={poster10} alt="" />
                    </div>
                    <div className="hvr-inner">
                      <a href="moviesingle.html">
                        {" "}
                        Read more{" "}
                        <i className="ion-android-arrow-dropright"></i>{" "}
                      </a>
                    </div>
                    <div className="title-in">
                      <h6>
                        <a href="/">The revenant</a>
                      </h6>
                      <div className="mv-details">
                        <p>
                          <i>
                            <MdStar />
                          </i>
                          <span>7.4</span> /10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-it">
                  <div className="movie-item">
                    <div className="mv-img">
                      <img src={poster11} alt="" />
                    </div>
                    <div className="hvr-inner">
                      <a href="moviesingle.html">
                        {" "}
                        Read more{" "}
                        <i className="ion-android-arrow-dropright"></i>{" "}
                      </a>
                    </div>
                    <div className="title-in">
                      <h6>
                        <a href="/">Die hard</a>
                      </h6>
                      <div className="mv-details">
                        <p>
                          <i>
                            <MdStar />
                          </i>
                          <span>7.4</span> /10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-it">
                  <div className="movie-item">
                    <div className="mv-img">
                      <img src={poster4} alt="" />
                    </div>
                    <div className="hvr-inner">
                      <a href="moviesingle.html">
                        {" "}
                        Read more{" "}
                        <i className="ion-android-arrow-dropright"></i>{" "}
                      </a>
                    </div>
                    <div className="title-in">
                      <h6>
                        <a href="/">The walk</a>
                      </h6>
                      <div className="mv-details">
                        <p>
                          <i>
                            <MdStar />
                          </i>
                          <span>7.4</span> /10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-it">
                  <div className="movie-item">
                    <div className="mv-img">
                      <img src={poster5} alt="" />
                    </div>
                    <div className="hvr-inner">
                      <a href="moviesingle.html">
                        {" "}
                        Read more{" "}
                        <i className="ion-android-arrow-dropright"></i>{" "}
                      </a>
                    </div>
                    <div className="title-in">
                      <h6>
                        <a href="/">Die hard</a>
                      </h6>
                      <div className="mv-details">
                        <p>
                          <i>
                            <MdStar />
                          </i>
                          <span>7.4</span> /10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-it">
                  <div className="movie-item">
                    <div className="mv-img">
                      <img src={poster6} alt="" />
                    </div>
                    <div className="hvr-inner">
                      <a href="moviesingle.html">
                        {" "}
                        Read more{" "}
                        <i className="ion-android-arrow-dropright"></i>{" "}
                      </a>
                    </div>
                    <div className="title-in">
                      <h6>
                        <a href="/">Interstellar</a>
                      </h6>
                      <div className="mv-details">
                        <p>
                          <i>
                            <MdStar />
                          </i>
                          <span>7.4</span> /10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-it">
                  <div className="movie-item">
                    <div className="mv-img">
                      <img src={poster7} alt="" />
                    </div>
                    <div className="hvr-inner">
                      <a href="moviesingle.html">
                        {" "}
                        Read more{" "}
                        <i className="ion-android-arrow-dropright"></i>{" "}
                      </a>
                    </div>
                    <div className="title-in">
                      <h6>
                        <a href="/">Die hard</a>
                      </h6>
                      <div className="mv-details">
                        <p>
                          <i>
                            <MdStar />
                          </i>
                          <span>7.4</span> /10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-it">
                  <div className="movie-item">
                    <div className="mv-img">
                      <img src={poster8} alt="" />
                    </div>
                    <div className="hvr-inner">
                      <a href="moviesingle.html">
                        {" "}
                        Read more{" "}
                        <i className="ion-android-arrow-dropright"></i>{" "}
                      </a>
                    </div>
                    <div className="title-in">
                      <h6>
                        <a href="/">Die hard</a>
                      </h6>
                      <div className="mv-details">
                        <p>
                          <i>
                            <MdStar />
                          </i>
                          <span>7.4</span> /10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="title-hd">
              <h2>in theater</h2>
              <Link to="movie" className="viewall">
                View all <IosArrowForward fontSize="15px" />
              </Link>
            </div>
            <div className="movies-filter">
              <ul className="tab-links">
                <li className="active">
                  <a href="#tab1-h2">#Popular</a>
                </li>
                <li>
                  <a href="#tab2-h2"> #Coming soon</a>
                </li>
                <li>
                  <a href="#tab3-h2"> #Top rated </a>
                </li>
                <li>
                  <a href="#tab4-h2"> #Most reviewed</a>
                </li>
              </ul>
              <Slider {...multipleSetting}  className="slick-multiItem2">
                <div className="slide-it">
                  <div className="movie-item">
                    <div className="mv-img">
                      <img src={poster1} alt="" />
                    </div>
                    <div className="hvr-inner">
                      <a href="moviesingle.html">
                        {" "}
                        Read more{" "}
                        <i className="ion-android-arrow-dropright"></i>{" "}
                      </a>
                    </div>
                    <div className="title-in">
                      <h6>
                        <a href="/">Interstellar</a>
                      </h6>
                      <div className="mv-details">
                        <p>
                          <i>
                            <MdStar />
                          </i>
                          <span>7.4</span> /10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-it">
                  <div className="movie-item">
                    <div className="mv-img">
                      <img src={poster2} alt="" />
                    </div>
                    <div className="hvr-inner">
                      <a href="moviesingle.html">
                        {" "}
                        Read more{" "}
                        <i className="ion-android-arrow-dropright"></i>{" "}
                      </a>
                    </div>
                    <div className="title-in">
                      <h6>
                        <a href="/">The revenant</a>
                      </h6>
                      <div className="mv-details">
                        <p>
                          <i>
                            <MdStar />
                          </i>
                          <span>7.4</span> /10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-it">
                  <div className="movie-item">
                    <div className="mv-img">
                      <img src={poster3} alt="" />
                    </div>
                    <div className="hvr-inner">
                      <a href="moviesingle.html">
                        {" "}
                        Read more{" "}
                        <i className="ion-android-arrow-dropright"></i>{" "}
                      </a>
                    </div>
                    <div className="title-in">
                      <h6>
                        <a href="/">Die hard</a>
                      </h6>
                      <div className="mv-details">
                        <p>
                          <i>
                            <MdStar />
                          </i>
                          <span>7.4</span> /10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-it">
                  <div className="movie-item">
                    <div className="mv-img">
                      <img src={poster4} alt="" />
                    </div>
                    <div className="hvr-inner">
                      <a href="moviesingle.html">
                        {" "}
                        Read more{" "}
                        <i className="ion-android-arrow-dropright"></i>{" "}
                      </a>
                    </div>
                    <div className="title-in">
                      <h6>
                        <a href="/">The walk</a>
                      </h6>
                      <div className="mv-details">
                        <p>
                          <i>
                            <MdStar />
                          </i>
                          <span>7.4</span> /10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-it">
                  <div className="movie-item">
                    <div className="mv-img">
                      <img src={poster5} alt="" />
                    </div>
                    <div className="hvr-inner">
                      <a href="moviesingle.html">
                        {" "}
                        Read more{" "}
                        <i className="ion-android-arrow-dropright"></i>{" "}
                      </a>
                    </div>
                    <div className="title-in">
                      <h6>
                        <a href="/">Die hard</a>
                      </h6>
                      <div className="mv-details">
                        <p>
                          <i>
                            <MdStar />
                          </i>
                          <span>7.4</span> /10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-it">
                  <div className="movie-item">
                    <div className="mv-img">
                      <img src={poster6} alt="" />
                    </div>
                    <div className="hvr-inner">
                      <a href="moviesingle.html">
                        {" "}
                        Read more{" "}
                        <i className="ion-android-arrow-dropright"></i>{" "}
                      </a>
                    </div>
                    <div className="title-in">
                      <h6>
                        <a href="/">Interstellar</a>
                      </h6>
                      <div className="mv-details">
                        <p>
                          <i>
                            <MdStar />
                          </i>
                          <span>7.4</span> /10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-it">
                  <div className="movie-item">
                    <div className="mv-img">
                      <img src={poster7} alt="" />
                    </div>
                    <div className="hvr-inner">
                      <a href="moviesingle.html">
                        {" "}
                        Read more{" "}
                        <i className="ion-android-arrow-dropright"></i>{" "}
                      </a>
                    </div>
                    <div className="title-in">
                      <h6>
                        <a href="/">Die hard</a>
                      </h6>
                      <div className="mv-details">
                        <p>
                          <i>
                            <MdStar />
                          </i>
                          <span>7.4</span> /10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-it">
                  <div className="movie-item">
                    <div className="mv-img">
                      <img src={poster8} alt="" />
                    </div>
                    <div className="hvr-inner">
                      <a href="moviesingle.html">
                        {" "}
                        Read more{" "}
                        <i className="ion-android-arrow-dropright"></i>{" "}
                      </a>
                    </div>
                    <div className="title-in">
                      <h6>
                        <a href="/">Die hard</a>
                      </h6>
                      <div className="mv-details">
                        <p>
                          <i>
                            <MdStar />
                          </i>
                          <span>7.4</span> /10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
