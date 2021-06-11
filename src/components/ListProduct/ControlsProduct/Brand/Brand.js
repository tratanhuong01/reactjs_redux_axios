import React, { Component } from "react";
import ItemBrand from "./ItemBrand/ItemBrand";
class Brand extends Component {
  render() {
    return (
      <>
        <p className="text-xl my-3 font-semibold">Thương hiệu</p>
        <ul className="my-3">
          <ItemBrand />
          <ItemBrand />
          <ItemBrand />
          <ItemBrand />
          <ItemBrand />
          <ItemBrand />
        </ul>
      </>
    );
  }
}

export default Brand;
