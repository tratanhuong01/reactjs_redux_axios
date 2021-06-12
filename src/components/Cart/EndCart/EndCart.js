import React, { Component } from "react";
import { Link } from "react-router-dom";

class EndCart extends Component {
  render() {
    return (
      <div className="w-full my-5 flex">
        <div className="w-1/4 hidden sm:flex sm:justify-start">
          <div className="flex items-center">
            <Link
              to="/products"
              className="w-full px-5 py-3.5 rounded-full shadow-lg bg-white  
              font-semibold text-sm font-semibold flex items-center border-2 font-semibold
              border-solid border-2 border-orangce * hover:bg-organce hover:text-white flex 
              items-center hover:border-white"
            >
              Tiếp tục mua hàng
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-3/4 pl-7 md:pl-0">
          <div className="w-full md:w-4/5 ml-auto flex mb-3">
            <div
              className="w-1/2 rounded-l-full font-semibold text-base p-4 bg-white 
            border-2 border-solid border-gray-200 text-xm text-center"
            >
              Tổng giá các sản phẩm :
            </div>
            <div
              className="w-1/2 rounded-r-full font-semibold text-base p-4 bg-white 
            text-organce border-2 border-solid border-gray-200 text-center"
            >
              {new Intl.NumberFormat("ban", "id").format(this.props.sumMoney)}{" "}
              <u>đ</u>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <Link
              to="/payment"
              className="px-12 py-4 text-base rounded-full shadow-lg bg-organce 
              font-semibold flex items-center text-white border-solid border-2 border-gray-100 
              ml-10 * hover:border-organce  flex hover:bg-white hover:text-black items-center"
            >
              Thanh toán
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default EndCart;
