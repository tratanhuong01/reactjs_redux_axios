import { combineReducers } from "redux";
import product from "./product";
import detailProduct from "./detailProduct";
import carts from "./carts";
import modal from "./modal";
import getProduct from "./getProduct";
import filterProduct from "./filterProduct";
const myReducer = combineReducers({
  product,
  detailProduct,
  carts,
  modal,
  getProduct,
  filterProduct,
});

export default myReducer;
