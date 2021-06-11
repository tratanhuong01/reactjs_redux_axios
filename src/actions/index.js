import * as Types from "../constants/ActionTypes";
import api from "../Utils/api";

export const getAllProductRequest = () => {
  return (dispatch) => {
    return api("products", "GET", {})
      .then((res) => {
        dispatch(getAllProduct(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getAllProduct = (products) => {
  return {
    type: Types.GET_ALL_PRODUCT,
    products,
  };
};

export const viewProduct = (slug, products) => {
  return {
    type: Types.VIEW_PRODUCT,
    slug,
    products,
  };
};
