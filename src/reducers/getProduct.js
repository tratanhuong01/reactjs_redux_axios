import * as Types from "../constants/ActionTypes";

var initialState = {
  productTopSell: null,
};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCT_TOP_SELL:
      var { products } = action;
      for (let i = 0; i < products.length - 1; i++) {
        for (let j = 0; j < products.length - i - 1; j++) {
          if (products[j].TopSell < products[j + 1].TopSell) {
            var temp = products[j];
            products[j] = products[j + 1];
            products[j + 1] = temp;
          }
        }
      }
      state.productTopSell = products[0];
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
