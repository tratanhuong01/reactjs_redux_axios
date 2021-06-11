import React, { Component, Fragment } from "react";

class ItemCart extends Component {
  render() {
    return (
      <Fragment>
        <div className="w-full py-2 flex">
          <div className="w-1/3">
            <img src="./images/product_3.png" className="w-full" alt="" />
          </div>
          <div className="w-2/3 pl-4 relative">
            <p className="mb-2">Apple watch series 4</p>
            <p className="mb-2">Màu : trắng</p>
            <p className="text-organce">
              7.760.000 <u>đ</u>
            </p>
            <span
              className="text-2xl font-semibold hover:text-organce 
                                            absolute right-2 bottom-2"
            >
              &times;
            </span>
          </div>
        </div>
        <hr className="my-2"></hr>
      </Fragment>
    );
  }
}

export default ItemCart;
