import React, { Component } from "react";
import * as actions from "../../../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class ItemCartMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Number: this.props.item.cart.NumberChoose,
    };
  }

  deleteCartByIDRequest = () => {
    this.props.deleteCartByIDRequest(this.props.item.cart.id);
  };
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
    var item = this.props.item;
    item.cart.NumberChoose = value;
    this.props.updateCartRequest(item.cart);
  };
  render() {
    var { item } = this.props;
    var url = "";
    item.product.UrlImage.forEach(function (child, index) {
      if (child.Color === item.cart.Color) {
        url = child.Url;
      } else {
      }
    });
    return (
      <div className="w-full my-3 mb-5 flex md:bg-white">
        <div className="w-1/4 md:w-2/12 flex justify-center pb-1 md:p-3">
          <img
            src={url}
            className="w-full md:w-11/12 sm:px-3 object-cover"
            alt=""
          />
        </div>
        <div className="w-2/4 md:w-7/12 flex justify-center flex-col md:flex-row">
          <div className="w-full md:w-2/4 flex justify-center pb-1 md:p-3">
            <div className="flex items-center">
              <div className="">
                <p
                  className="mb-2 text-gray-700 text-base hover:text-organce text-center 
                    cursor-pointer"
                >
                  <Link to={`/detail-product/${item.product.Path}`}>
                    {item.product.NameProduct}
                  </Link>
                </p>
                <p className="text-gray-500 text-base  text-center">
                  Màu : {item.cart.Color} {" - "} Kích thước : {item.cart.Size}{" "}
                  mm
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex justify-center pb-1 md:p-3">
            <div className="flex items-center">
              <div className="">
                <p
                  className="mb-2 text-gray-700 text-base text-organce text-center 
                    cursor-pointer"
                >
                  <span className="md:hidden mr-3">Đơn giá :</span>
                  {new Intl.NumberFormat("ban", "id").format(
                    item.product.Price.Price *
                      ((100 - item.product.Price.Sale) / 100)
                  )}{" "}
                  <u>đ</u>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex justify-center pb-1 md:p-3">
            <div className="flex items-center">
              <div>
                <input
                  type="number"
                  name="Number"
                  className="w-28 p-3 border-2 border-solid border-gray-300 
                    rounded-full text-center font-semibold"
                  value={this.state.Number}
                  min="1"
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 md:w-3/12 flex flex-col sm:flex-row justify-center">
          <div className="w-full sm:w-2/3 flex justify-center pb-1 md:p-3">
            <div className="flex items-center">
              <div className="">
                <p className="mb-2 font-semibold md:hidden text-center">
                  Tổng tiền
                </p>
                <p
                  className="mb-2 text-gray-700 text-base text-organce text-center 
                    cursor-pointer"
                >
                  {new Intl.NumberFormat("ban", "id").format(
                    item.product.Price.Price *
                      ((100 - item.product.Price.Sale) / 100) *
                      item.cart.NumberChoose
                  )}{" "}
                  <u>đ</u>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/3 flex justify-center pb-1 md:p-3">
            <div className="flex items-center">
              <i
                onClick={this.deleteCartByIDRequest}
                className="bx bx-trash-alt text-3xl mb-3 cursor-pointer 
                hover:text-organce"
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteCartByIDRequest: (id) => {
      dispatch(actions.deleteCartByIDRequest(id));
    },
    updateCartRequest: (cart) => {
      dispatch(actions.updateCartRequest(cart));
    },
  };
};
export default connect(null, mapDispatchToProps)(ItemCartMain);
