import React, { Component } from "react";

class ItemBrand extends Component {
  render() {
    return (
      <li className="my-2">
        <input type="radio" name="brand" id="" className="mr-3" />
        <label className="hover:text-organce cursor-pointer">Apple</label>
      </li>
    );
  }
}

export default ItemBrand;
