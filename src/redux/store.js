import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

let middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = createStore(rootReducer, {}, middleware);

export default function configureStore() {
    return store;
}