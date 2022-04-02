import thunk from "redux-thunk";
import rootReducers from "../reducers/index";
import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);
console.log(store)
export default store;
