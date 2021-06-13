import React, { Component } from "react";

class ItemSize extends Component {
  render() {
    return (
      <li
        className="w-10 h-10 m-2 bg-white flex justify-center border-2 border-solid 
        hover:text-organce cursor-pointer hover:border-organce border-white"
      >
        <span className="flex items-center font-semibold">
          {this.props.item}
        </span>
      </li>
    );
  }
}

export default ItemSize;
