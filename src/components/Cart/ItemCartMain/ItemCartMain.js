import React, { Component } from "react";

class ItemCartMain extends Component {
  render() {
    return (
      <div className="w-full my-3 mb-5 flex md:bg-white">
        <div className="w-1/4 md:w-2/12 flex justify-center pb-1 md:p-3">
          <img
            src="./images/product_3.png"
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
                  Apple watch series 6
                </p>
                <p className="text-gray-500 text-base  text-center">
                  Màu : Trắng
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
                  7.760.000 <u>đ</u>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex justify-center pb-1 md:p-3">
            <div className="flex items-center">
              <div>
                <input
                  type="number"
                  className="w-28 p-3 border-2 border-solid border-gray-300 
                    rounded-full text-center font-semibold"
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
                  7.760.000 <u>đ</u>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/3 flex justify-center pb-1 md:p-3">
            <div className="flex items-center">
              <i
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

export default ItemCartMain;
