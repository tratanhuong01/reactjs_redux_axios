import React, { Component } from "react";

class ItemColor extends Component {
  filterProductColor = () => {
    this.props.filterProductColor(this.props.products, this.props.item.color);
  };

  render() {
    return (
      <li
        onClick={this.filterProductColor}
        className={`w-10 h-10 my-2 mr-3 ml-0 rounded-full cursor-pointer hover:border-yellow-700 
        border-2 border-solid ${this.props.item.code}`}
      ></li>
    );
  }
}

export default ItemColor;
