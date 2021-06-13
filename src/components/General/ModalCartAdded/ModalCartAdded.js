import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart/ItemCart";

class ModalCartAdded extends Component {
  render() {
    var { carts } = this.props;
    var sumMoney = 0;
    var showAllCart = carts.map((item, index) => {
      sumMoney +=
        item.product.Price.Price *
        ((100 - item.product.Price.Sale) / 100) *
        item.cart.NumberChoose;
      return <ItemCart item={item} key={index} />;
    });
    return (
      <div
        id="modal__cart__added"
        className="w-80 rounded-lg bg-white absolute 
        top-12 right-1/4 text-gray-700 z-50"
      >
        <div className="w-full max-h-72 overflow-y-auto p-2">{showAllCart}</div>
        <hr className="my-1"></hr>
        <div className="w-full flex p-2 h-12">
          <div
            className="w-1/2 float-left justify-start flex items-center 
            font-semibold text-base"
          >
            Thành tiền :
          </div>
          <div
            className="w-1/2 float-right justify-end flex items-center 
            text-organce pr-4"
          >
            {new Intl.NumberFormat(["ban", "id"]).format(sumMoney)} <u>đ</u>
          </div>
        </div>

        <hr className="my-1"></hr>
        <div className="w-full p-2 h-16">
          <Link
            to="/cart"
            className="px-6 py-2 rounded-full bg-organce 
            hover:bg-white hover:border-white border-2 border-solid text-white
            border-white shadow-lg float-left flex items-center font-semibold 
            hover:text-black ml-2"
          >
            Giỏ hàng
          </Link>
          <Link
            to="/payment"
            className="px-6 py-2 rounded-full hover:bg-organce 
            bg-white border-white border-2 border-solid hover:text-white
            hover:border-white shadow-lg float-right flex items-center font-semibold 
            text-black ml-2"
          >
            Thanh toán
          </Link>
        </div>
      </div>
    );
  }
}

export default ModalCartAdded;
