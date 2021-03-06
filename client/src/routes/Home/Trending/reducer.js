import { SET_TRENDING, SET_TRAILER, SET_IMAGE } from "./constants";

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_TRENDING:
            return { ...state, trending: action.payload };
        case SET_TRAILER:
            return { ...state, trailer: action.payload };
        case SET_IMAGE:
            return { ...state, image: action.payload };
        default:
            throw new Error();
    }
};
