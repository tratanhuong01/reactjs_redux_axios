import React, { Component } from "react";
import ItemSizeProduct from "./ItemSizeProduct/ItemSizeProduct";
class SizeProduct extends Component {
  render() {
    var { SizeProduct } = this.props;
    var showSizeProducts = SizeProduct.map((size, index) => {
      return <ItemSizeProduct size={size} key={index} />;
    });
    return (
      <div className="w-full my-3">
        <p className="font-bold text-xl font-semibold">KÍCH THƯỚC :</p>
        <div className="w-full flex">{showSizeProducts}</div>
      </div>
    );
  }
}

export default SizeProduct;
