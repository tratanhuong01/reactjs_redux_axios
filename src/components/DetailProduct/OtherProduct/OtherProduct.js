import React, { Component } from "react";
import ItemProductOther from "../../General/ItemProduct/ItemProductOther";
class OtherProduct extends Component {
  render() {
    return (
      <div className="w-full my-5">
        <p className="font-semibold my-4 text-center text-4xl hover:text-organce cursor-pointer">
          Sản phẩm khác
        </p>
        <div className="w-full flex">
          <ItemProductOther className="w-1/2 md:w-1/3 lg:w-1/4 m-2 bg-white relative" />
          <ItemProductOther className="w-1/2 md:w-1/3 lg:w-1/4 m-2 bg-white relative" />
          <ItemProductOther className="w-1/2 md:w-1/3 lg:w-1/4 hidden md:block m-2 bg-white relative" />
          <ItemProductOther className="w-1/2 md:w-1/3 lg:w-1/4 hidden lg:block m-2 bg-white relative" />
        </div>
      </div>
    );
  }
}

export default OtherProduct;
