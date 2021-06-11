import React, { Component } from "react";
import ItemColorProduct from "./ItemColorProduct/ItemColorProduct";

class ColorProduct extends Component {
  onHoverChangeImage = (data) => {
    this.props.onHoverChangeImage(data);
  };
  render() {
    var { images, indexImageActive } = this.props;
    var showColorImages = images.map((image, index) => {
      return (
        <ItemColorProduct
          onHoverChangeImage={this.onHoverChangeImage}
          image={image}
          key={index}
          index={index}
          indexImageActive={
            typeof indexImageActive === "undefined" ? 0 : indexImageActive
          }
        />
      );
    });
    return (
      <div className="w-full my-3">
        <p className="font-bold text-xl font-semibold">MÀU SẮC :</p>
        <div className="w-full flex">{showColorImages}</div>
      </div>
    );
  }
}

export default ColorProduct;
