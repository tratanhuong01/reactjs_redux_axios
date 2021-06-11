import { combineReducers } from "redux";
import product from "./product";
import detailProduct from "./detailProduct";
const myReducer = combineReducers({
  product,
  detailProduct,
});

export default myReducer;
