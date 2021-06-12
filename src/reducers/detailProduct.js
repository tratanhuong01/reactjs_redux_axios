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
  viewScroll: false,
  indexSizeActive: 0,
  Type: "Detail-Product",
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.VIEW_PRODUCT:
      var { products, slug } = action;
      var index = products.findIndex((item) => item.Path === slug);
      if (index !== -1) {
        state.product = products[index];
        state.productChoose.IDProduct = products[index].id;
      } else {
        state.product = null;
      }
      return state;
    case Types.VIEW_SCROLL_PRODUCT:
      var y = window.scrollY;
      if (y >= 600) {
        state.viewScroll = true;
      } else {
        state.viewScroll = false;
      }
      return { ...state };
    case Types.HOVER_IMAGE_EVENT_DP:
      var { data } = action;
      state.indexImageActive = data.indexImageActive;
      state.imageMain = data.imageMain;
      state.productChoose.Color = data.color;
      return { ...state };
    case Types.CHOOSE_SIZE_PRODUCT:
      state.productChoose.Size = action.data.size;
      state.indexSizeActive = action.data.indexSizeActive;
      return { ...state };
    case Types.ASC_OR_DESC_NUMBER_PRODUCT:
      state.productChoose.NumberChoose = action.number;
      return { ...state };
    case Types.SCROLL_TOP:
      window.scroll(0, 0);
      state.viewScroll = false;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
