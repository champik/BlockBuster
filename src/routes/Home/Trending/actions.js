import { SET_TRENDING, SET_TRAILER, SET_IMAGE } from "./constants";

export const setTrending = data => {
    return {
        type: SET_TRENDING,
        payload: data
    };
};

export const setTrailer = key => {
    return {
        type: SET_TRAILER,
        payload: key
    };
};

export const setBackground = image => {
    return {
        type: SET_IMAGE,
        payload: image
    };
};