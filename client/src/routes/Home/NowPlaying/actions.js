import { SET_nowPlaying, SET_TRAILER, SET_IMAGE } from "./constants";

export const setNowPlaying = data => {
    return {
        type: SET_nowPlaying,
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