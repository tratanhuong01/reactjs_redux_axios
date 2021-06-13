import React, { Component } from "react";

class ItemBrand extends Component {
  onChange = (event) => {
    var target = event.target;
    var value = target.value;
    this.props.filterProductBrand(this.props.product, value);
  };
  render() {
    var { brand, item } = this.props;
    return (
      <li className="my-2">
        <input
          type="radio"
          name="brand"
          value={item}
          className="mr-3"
          onChange={this.onChange}
          checked={item === brand ? true : false}
        />
        <label className="hover:text-organce cursor-pointer font-semibold">
          {item}
        </label>
      </li>
    );
  }
}

export default ItemBrand;
