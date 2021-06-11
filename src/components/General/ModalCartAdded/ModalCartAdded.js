import React, { Component } from "react";
import ItemCart from "./ItemCart/ItemCart";

class ModalCartAdded extends Component {
  render() {
    return (
      <div
        id="modal__cart__added"
        className="w-80 rounded-lg bg-white absolute 
        top-12 right-1/4 text-gray-700 z-50"
      >
        <div className="w-full max-h-60 overflow-y-auto p-2">
          <ItemCart />
          <ItemCart />
        </div>
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
            7.760.000 <u>đ</u>
          </div>
        </div>
        <hr className="my-1"></hr>
        <div className="w-full p-2 h-16">
          <button
            type="button"
            className="px-6 py-2 rounded-full bg-organce 
            hover:bg-white hover:border-white border-2 border-solid text-white
            border-white shadow-lg float-left flex items-center font-semibold 
            hover:text-black ml-2"
          >
            Giỏ hàng
          </button>
          <button
            type="button"
            className="px-6 py-2 rounded-full hover:bg-organce 
            bg-white border-white border-2 border-solid hover:text-white
            hover:border-white shadow-lg float-right flex items-center font-semibold 
            text-black ml-2"
          >
            Thanh toán
          </button>
        </div>
      </div>
    );
  }
}

export default ModalCartAdded;