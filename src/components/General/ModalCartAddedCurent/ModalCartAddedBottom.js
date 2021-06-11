import React, { Component } from "react";

class ModalCartAddedBottom extends Component {
  render() {
    return (
      <div className="w-full mt-5">
        <div className="w-11/12 mx-auto flex">
          <div className="w-1/4">
            <img
              src="/images/product_3.png"
              className="w-full object-cover"
              alt=""
            />
          </div>
          <div className="w-3/4 flex pl-4">
            <div className="flex flex-wrap items-center w-full">
              <div className="">
                <p className="w-full mb-2 text-gray-700 cursor-pointer text-xl font-semibold">
                  Fitbit Charge HR S4
                </p>
                <p className="text-organce">
                  1.760.000 <u>đ</u>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-4 flex my-3">
          <div className="w-1/2 flex">
            <p className="flex items-center hover:text-organce text-gray-700 cursor-pointer">
              <i className="bx bx-caret-right mr-3"></i>
              Giỏ hàng của bạn hiện có (<span>2</span>) sản phẩm
            </p>
          </div>
          <div className=" w-1/2 flex justify-end">
            <div className="flex items-center">
              <button
                type="button"
                className="px-10 py-3.5 rounded-full shadow-lg bg-organce 
                font-semibold text-sm font-semibold flex items-center text-white border-2 
                border-solid border-2 border-gray-100 ml-10 * hover:border-orangce flex 
                items-center"
              >
                Tiến hành thanh toán&nbsp;&nbsp;
                <i className="bx bx-right-arrow-alt text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalCartAddedBottom;
