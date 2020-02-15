import { SET_TRANDING, SET_TRAILER, SET_IMAGE } from "../constants/Trending";

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_TRANDING:
            return { ...state, tranding: action.payload };
        case SET_TRAILER:
            return { ...state, trailer: action.payload };
        case SET_IMAGE:
            return { ...state, image: action.payload };
        default:
            throw new Error();
    }
};
