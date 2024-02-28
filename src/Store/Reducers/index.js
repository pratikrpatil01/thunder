import { combineReducers } from "redux";
import productDataReducer from "./productDataReducer";
import cardDataReducer from "./cardDataReducer";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  product: productDataReducer,
  card: cardDataReducer,
});

export default reducers;
