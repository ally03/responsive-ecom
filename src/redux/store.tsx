import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import rootReducer from "./reducer/";

const initialState = {};

export default createStore(rootReducer, initialState);
