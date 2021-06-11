import React, { Component } from "react";

class ItemSize extends Component {
  render() {
    return (
      <li
        className="w-10 h-10 m-2 bg-white flex justify-center 
        hover:text-organce"
      >
        <span className="flex items-center font-semibold">30</span>
      </li>
    );
  }
}

export default ItemSize;
