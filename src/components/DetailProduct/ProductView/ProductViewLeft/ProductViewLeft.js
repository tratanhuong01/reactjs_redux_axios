import React, { Component } from "react";
import ItemProductViewLeft from "../ProductViewLeft/ItemProductViewLeft/ItemProductViewLeft";
class ProductViewLeft extends Component {
  onHoverChangeImage = (data) => {
    this.props.onHoverChangeImage(data);
  };
  render() {
    var { product, indexImageActive, imageMain } = this.props;
    var showItemProductViewLeft = product.UrlImage.map((item, index) => {
      return (
        <ItemProductViewLeft
          onHoverChangeImage={this.onHoverChangeImage}
          item={item}
          key={index}
          index={index}
          indexImageActive={
            typeof indexImageActive === "undefined" ? 0 : indexImageActive
          }
        />
      );
    });
    return (
      <div className="w-full xl:w-7/12 flex">
        <ul className="w-2/12">
          <li className="text-center cursor-pointer">
            <i className="bx bx-caret-up text-2xl text-gray-700"></i>
          </li>
          {showItemProductViewLeft}
          <li className="text-center cursor-pointer">
            <i className="bx bx-caret-down text-2xl text-gray-700"></i>
          </li>
        </ul>
        <div className="w-10/12 pr-4">
          <div className="w-full border-2 border-gray-200 border-solid">
            <img
              id="images__product__detail"
              src={
                typeof imageMain === "undefined"
                  ? product.UrlImage[0].Url
                  : imageMain
              }
              alt=""
              className="w-full object-cover
                cursor-pointer"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductViewLeft;
