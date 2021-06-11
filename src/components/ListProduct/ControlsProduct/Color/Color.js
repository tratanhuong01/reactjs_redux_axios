import React, { Component } from "react";
import ItemColor from "./ItemColor/ItemColor";
class Color extends Component {
  render() {
    return (
      <>
        <p className="text-xl my-3 font-semibold">Màu sắc</p>
        <ul className="w-full flex-wrap my-3 flex">
          <ItemColor />
          <ItemColor />
          <ItemColor />
          <ItemColor />
          <ItemColor />
          <ItemColor />
          <ItemColor />
          <ItemColor />
          <ItemColor />
        </ul>
      </>
    );
  }
}

export default Color;
