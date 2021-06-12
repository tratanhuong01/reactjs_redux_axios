import React, { Component } from "react";
import ColorProduct from "./ColorProduct/ColorProduct";
import DescribeChild from "./DescribeChild/DescribeChild";
import SizeProduct from "./SizeProduct/SizeProduct";
import { connect } from "react-redux";
import * as actions from "../../../../actions";
class ProductViewRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
  }
  onClickNumberDESC = () => {
    var { number } = this.state;
    number = number === 1 ? 1 : number - 1;
    this.setState({
      number: number,
    });
    this.props.ascOrDescNumberProduct(number);
  };
  onClickNumberASC = () => {
    var { number } = this.state;
    number += 1;
    this.setState({
      number: number,
    });
    this.props.ascOrDescNumberProduct(number);
  };
  checkIssetProduct = (product, productMain) => {
    var carts = this.props.carts;
    product.Color =
      product.Color === "" ? productMain.UrlImage[0].Color : product.Color;
    product.Size =
      product.Size === "" ? productMain.SizeProduct[0].Size : product.Size;
    var index = carts.findIndex(
      (element) =>
        product.Color === element.cart.Color &&
        product.Size === element.cart.Size &&
        product.IDProduct === element.cart.IDProduct
    );
    return index;
  };
  addCartRequest = () => {
    var index = this.checkIssetProduct(
      this.props.detailProduct.productChoose,
      this.props.detailProduct.product
    );
    var carts = this.props.carts;
    if (index === -1) {
      this.props.addCartRequest(
        this.props.detailProduct.productChoose,
        this.props.detailProduct.product
      );
    } else {
      var cart = this.props.detailProduct.productChoose;
      cart.id = carts[index].cart.id;
      this.props.updateCartIssetRequest(cart, this.props.detailProduct.product);
    }
  };
  render() {
    var { product } = this.props.detailProduct;
    var { number } = this.state;
    return (
      <div className="w-full xl:w-5/12">
        <div className="w-full flex mb-2">
          <div className="w-full pl-4 pt-1">
            <p className="text-2xl font-semibold cursor-pointer hover:text-organce mb-3">
              {product.NameProduct}
            </p>
            <DescribeChild />
            <ColorProduct />
            <SizeProduct />
            <div className="w-full my-3 flex ">
              <div
                className="flex w-32 rounded-full border-2 border-solid 
                border-gray-200"
              >
                <span
                  onClick={this.onClickNumberDESC}
                  className="w-1/4 py-3.5 text-center cursor-pointer"
                >
                  <i className="bx bx-minus color-black"></i>
                </span>
                <input
                  type="text"
                  name="number"
                  className="w-1/2 py-3.5 text-center font-semibold"
                  value={number}
                  onChange={() => ""}
                />
                <span
                  onClick={this.onClickNumberASC}
                  className="w-1/4 text-center py-3.5 cursor-pointer"
                >
                  <i className="bx bx-plus"></i>
                </span>
              </div>
              <button
                onClick={this.addCartRequest}
                type="button"
                className="px-10 py-3.5 rounded-full shadow-lg bg-organce 
                font-semibold text-sm font-semibold flex items-center text-white border-2 
                border-solid border-2 border-gray-100 ml-10 * hover:border-orangce"
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    detailProduct: state.detailProduct,
    carts: state.carts,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    ascOrDescNumberProduct: (data) => {
      dispatch(actions.ascOrDescNumberProduct(data));
    },
    addCartRequest: (cart, product) => {
      dispatch(actions.addCartRequest(cart, product));
      dispatch(actions.showModalAddCartCurrent(cart, product));
    },
    updateCartIssetRequest: (cart, product) => {
      dispatch(actions.updateCartIssetRequest(cart));
      dispatch(actions.showModalAddCartCurrent(cart, product));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductViewRight);
