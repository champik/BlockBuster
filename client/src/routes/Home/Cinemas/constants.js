export const SET_MOVIES = "SET_MOVIES";
export const SET_ACTIVE_FILTER = "SET_ACTIVE_FILTER";
export const IS_LOADING = "IS_LOADING";

export const SLIDER_SETTINGS = {
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