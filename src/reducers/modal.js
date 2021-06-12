import * as Types from "../constants/ActionTypes";
import ModalCartAddedCurrent from "../containers/General/ModalCartAddedCurrent/ModalCartAddedCurrent";
import Category from "../components/General/Category/Category";
import ModalViewFastProduct from "../containers/General/ModalViewFastProduct/ModalViewFastProduct";
var initialState = {
  StateModal: false,
  DataModal: "",
};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_MODAL_ADD_CART_CURRENT:
      state.StateModal = true;
      var { cart, product } = action;
      state.DataModal = <ModalCartAddedCurrent product={product} cart={cart} />;
      return { ...state };
    case Types.CLOSE_MODAL:
      state.StateModal = false;
      state.DataModal = "";
      return { ...state };
    case Types.OPEN_CATEGORY:
      state.StateModal = true;
      state.DataModal = <Category />;
      return { ...state };
    case Types.OPEN_VIEW_FAST_PRODUCT:
      state.StateModal = true;
      state.DataModal = <ModalViewFastProduct />;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
