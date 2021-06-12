import { combineReducers } from "redux";
import product from "./product";
import detailProduct from "./detailProduct";
import carts from "./carts";
import modal from "./modal";
import getProduct from "./getProduct";
const myReducer = combineReducers({
  product,
  detailProduct,
  carts,
  modal,
  getProduct,
});

export default myReducer;
