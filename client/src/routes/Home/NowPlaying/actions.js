import { SET_NOWPLAYING, SET_TRAILER, SET_IMAGE } from "./constants";

export const setNowPlaying = data => {
    return {
        type: SET_NOWPLAYING,
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