import React, { Component } from "react";

class ItemProductPayment extends Component {
  render() {
    return (
      <div className="w-full flex my-5">
        <div className="w-1/12 flex justify-center">
          <span className="flex items-center">
            <input
              type="checkbox"
              name=""
              id=""
              className="transform scale-125"
            />
          </span>
        </div>
        <div className="w-11/12 flex">
          <div className="w-1/5 p-1 relative">
            <img
              src="./images/product_3.png"
              className="w-full object-cover"
              alt=""
            />
            <div
              className="w-6 h-6 rounded-full bg-organce text-white font-semibold 
            absolute -top-1 -right-1 flex justify-center "
            >
              <span className="flex items-center">1</span>
            </div>
          </div>
          <div className="w-4/5 pl-4 flex">
            <div className="w-3/4 flex">
              <div className="flex flex-wrap items-center">
                <div>
                  <p className="w-full mb-2">Apple Watch Series 4</p>
                  <p className="text-gray-700">Màu : Trắng</p>
                </div>
              </div>
            </div>
            <div className="w-1/4 flex">
              <div className="flex items-center ">
                <p className="text-organce">
                  7.760.000 <u>đ</u>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemProductPayment;
