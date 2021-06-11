import * as Types from "./../constants/ActionTypes";
var initialState = {
  product: null,
  indexImageActive: 0,
  imageMain: "",
  productChoose: {
    IDProduct: "",
    Color: "",
    Size: "",
    NumberChoose: 1,
  },
  viewScroll: false,
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.VIEW_PRODUCT:
      var { products, slug } = action;
      var index = products.findIndex((item) => item.Path === slug);
      state.product =
        typeof products[index] === "undefined" ? null : products[index];
      return state;
    default:
      return state;
  }
};

export default myReducer;
