import React, { Component } from "react";
class ImageTopSell extends Component {
  render() {
    return (
      <div className="w-full md:w-1/2">
        <img
          src={this.props.product.UrlImage[0].Url}
          className="w-10/12 mx-auto"
          alt=""
        />
      </div>
    );
  }
}

export default ImageTopSell;
