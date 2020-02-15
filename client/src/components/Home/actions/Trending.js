import { SET_TRANDING, SET_TRAILER, SET_IMAGE } from "../constants/Trending";

export const setTranding = data => {
    return {
        type: SET_TRANDING,
        payload: data
    };
};

export const setTrailer = key => {
    return {
        type: SET_TRAILER,
        payload: key
    };
};

export const setImage = image => {
    return {
        type: SET_IMAGE,
        payload: image
    };
};