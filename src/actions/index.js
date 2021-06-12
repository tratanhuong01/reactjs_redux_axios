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
export const viewScrollProduct = () => {
  return {
    type: Types.VIEW_SCROLL_PRODUCT,
  };
};
export const scrollTop = () => {
  return {
    type: Types.SCROLL_TOP,
  };
};
export const getAllProduct = (products) => {
  return {
    type: Types.GET_ALL_PRODUCT,
    products,
  };
};
export const onMouseEnterEventImage = (data) => {
  return {
    type: Types.HOVER_IMAGE_EVENT_DP,
    data,
  };
};
export const viewProduct = (slug, products) => {
  return {
    type: Types.VIEW_PRODUCT,
    slug,
    products,
  };
};
export const chooseSizeProduct = (data) => {
  return {
    type: Types.CHOOSE_SIZE_PRODUCT,
    data,
  };
};
export const ascOrDescNumberProduct = (number) => {
  return {
    type: Types.ASC_OR_DESC_NUMBER_PRODUCT,
    number,
  };
};
export const getAllCartRequest = () => {
  return (dispatch) => {
    return api("carts", "GET", {})
      .then((res_1) => {
        var myData = [];
        if (res_1.data.length > 0)
          res_1.data.forEach((item) => {
            var data = {
              cart: item,
              product: null,
            };
            api("products/" + item.IDProduct, "GET", {})
              .then((res_2) => {
                data.product = res_2.data;
                myData.push(data);
                dispatch(getAllCart(myData));
              })
              .catch((err) => {
                console.log(err);
              });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getAllCart = (carts) => {
  return {
    type: Types.GET_ALL_CART,
    carts,
  };
};
export const addCartRequest = (cart, product) => {
  return (dispatch) => {
    cart.Color = cart.Color === "" ? product.UrlImage[0].Color : cart.Color;
    cart.Size = cart.Size === "" ? product.SizeProduct[0].Size : cart.Size;
    return api("carts", "POST", cart)
      .then((res_1) => {
        var myData = {
          cart: res_1.data,
          product: null,
        };
        api(`products/${res_1.data.IDProduct}`, "GET", {})
          .then((res_2) => {
            myData.product = res_2.data;
            dispatch(addCart(myData));
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const addCart = (cart) => {
  return {
    type: Types.ADD_CART,
    cart,
  };
};
export const showModalAddCartCurrent = (cart, product) => {
  return {
    type: Types.SHOW_MODAL_ADD_CART_CURRENT,
    product,
    cart,
  };
};
export const closeModal = () => {
  return {
    type: Types.CLOSE_MODAL,
  };
};
export const openCategory = () => {
  return {
    type: Types.OPEN_CATEGORY,
  };
};
export const deleteCartByIDRequest = (id) => {
  return (dispatch) => {
    return api(`carts/${id}`, "DELETE", {})
      .then((res) => {
        dispatch(deleteCartByID(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const deleteCartByID = (id) => {
  return {
    type: Types.DELETE_CART_BY_ID,
    id,
  };
};
export const viewFastProduct = () => {
  return {
    type: Types.VIEW_FAST_PRODUCT,
  };
};
export const openModalFastViewProduct = () => {
  return {
    type: Types.OPEN_VIEW_FAST_PRODUCT,
  };
};
export const updateCartIssetRequest = (cart) => {
  return (dispatch) => {
    return api(`carts/${cart.id}`, "GET", {})
      .then((res_1) => {
        api(`carts/${cart.id}`, "PUT", {
          IDProduct: cart.IDProduct,
          IDKhachHang: cart.IDKhachHang,
          Color: cart.Color,
          Size: cart.Size,
          NumberChoose:
            Number(cart.NumberChoose) + Number(res_1.data.NumberChoose),
        })
          .then((res_2) => {
            dispatch(updateCartIsset(res_2.data));
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const updateCartIsset = (cart) => {
  return {
    type: Types.UPDATE_CART_ISSET,
    cart,
  };
};
export const updateCartRequest = (cart) => {
  return (dispatch) => {
    return api(`carts/${cart.id}`, "PUT", {
      IDProduct: cart.IDProduct,
      IDKhachHang: cart.IDKhachHang,
      Color: cart.Color,
      Size: cart.Size,
      NumberChoose: cart.NumberChoose,
    })
      .then((res) => {
        dispatch(updateCart(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const updateCart = (cart) => {
  return {
    type: Types.UPDATE_CART,
    cart,
  };
};
export const getProductTopSell = (products) => {
  return {
    type: Types.GET_PRODUCT_TOP_SELL,
    products,
  };
};
