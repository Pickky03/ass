import { combineReducers } from "redux";
import productsReducer from "./reducers/Cart";

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
