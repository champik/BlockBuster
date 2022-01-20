import { SET_MOVIES, SET_ACTIVE_FILTER, IS_LOADING } from "./constants";

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return { ...state, movies: action.payload };
        case SET_ACTIVE_FILTER:
            return { ...state, activeCategory: action.payload };
        case IS_LOADING:
            return { ...state, isLoading: action.payload };
        default:
            throw new Error();
    }
};
