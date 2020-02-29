import { SET_MOVIES, SET_ACTIVE_FILTER, IS_LOADING } from "./constants";

export const setMovies = data => {
    return {
        type: SET_MOVIES,
        payload: data
    };
};

export const setactiveCategory = active => {
    return {
        type: SET_ACTIVE_FILTER,
        payload: active
    };
};

export const setLoading = isLoading => {
    return {
        type: IS_LOADING,
        payload: isLoading
    };
};