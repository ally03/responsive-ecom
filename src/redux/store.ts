import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/";

const initialState = {};
const enhancers = [];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension =
    ((window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
    compose;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension);
  }
}

const composedEnhancers = compose(applyMiddleware(thunk), ...enhancers);

export default createStore(rootReducer, initialState, composedEnhancers);
