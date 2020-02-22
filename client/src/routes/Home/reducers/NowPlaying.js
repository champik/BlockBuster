import { SET_nowPlaying, SET_TRAILER, SET_IMAGE } from "../constants/NowPlaying";

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_nowPlaying:
            return { ...state, nowPlaying: action.payload };
        case SET_TRAILER:
            return { ...state, trailer: action.payload };
        case SET_IMAGE:
            return { ...state, image: action.payload };
        default:
            throw new Error();
    }
};
