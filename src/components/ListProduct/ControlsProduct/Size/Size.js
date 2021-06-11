import React, { Component } from "react";
import ItemSize from "./ItemSize/ItemSize";
class Size extends Component {
  render() {
    return (
      <>
        <p className="text-xl my-3 font-semibold">Kích thước</p>
        <ul className="w-full my-3 flex-wrap flex">
          <ItemSize />
          <ItemSize />
          <ItemSize />
          <ItemSize />
          <ItemSize />
          <ItemSize />
          <ItemSize />
          <ItemSize />
          <ItemSize />
          <ItemSize />
        </ul>
      </>
    );
  }
}

export default Size;
