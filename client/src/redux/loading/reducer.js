import { SET_LOADING } from "./action";

const defaultState = { isLoading: false };

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};

export default reducer;
