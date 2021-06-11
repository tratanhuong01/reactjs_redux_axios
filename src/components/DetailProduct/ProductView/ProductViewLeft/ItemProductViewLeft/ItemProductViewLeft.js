import React, { Component } from "react";

class ItemProductViewLeft extends Component {
  onHoverChangeImage = () => {
    var data = {
      indexImageActive: this.props.index,
      imageMain: this.props.item.Url,
    };
    this.props.onHoverChangeImage(data);
  };
  render() {
    return (
      <li className="w-full p-3">
        <img
          onMouseEnter={this.onHoverChangeImage}
          src={this.props.item.Url}
          className={
            this.props.indexImageActive === this.props.index
              ? "w-full border-2 border-solid border-orangce hover:border-organce cursor-pointer"
              : "w-full border-2 border-solid border-white hover:border-organce cursor-pointer"
          }
          alt=""
        />
      </li>
    );
  }
}

export default ItemProductViewLeft;
