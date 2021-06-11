import React, { Component } from "react";

class ItemSizeProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsActive: true,
    };
  }

  render() {
    return (
      <div
        className="w-10 h-10 p-1 m-1 flex justify-center border-2 
        border-solid border-orangce bg-white rounded-full cursor-pointer"
      >
        <span className="text-organce text-xm flex items-center font-bold">
          {this.props.size.Size}
        </span>
      </div>
    );
  }
}

export default ItemSizeProduct;
