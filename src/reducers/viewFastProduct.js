import * as Types from "./../constants/ActionTypes";
var initialState = {
  product: null,
  indexImageActive: 0,
  imageMain: null,
  productChoose: {
    IDProduct: "",
    IDKhachHang: "",
    Color: "",
    Size: "",
    NumberChoose: 1,
  },
  indexSizeActive: 0,
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.VIEW_FAST_PRODUCT:
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
