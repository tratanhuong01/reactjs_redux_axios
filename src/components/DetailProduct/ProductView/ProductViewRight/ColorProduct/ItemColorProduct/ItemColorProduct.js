import React, { Component } from "react";

class ItemColorProduct extends Component {
  onHoverChangeImage = () => {
    var data = {
      indexImageActive: this.props.index,
      imageMain: this.props.image.Url,
    };
    this.props.onHoverChangeImage(data);
  };
  render() {
    var { image } = this.props;
    return (
      <div className="w-20 h-20 p-1 m-1 relative image-color">
        <div
          className="px-4 py-2 bg-organce font-semibold absolute -top-12 
        left-0 text-white text-xm color"
        >
          {image.Color}
        </div>
        <img
          onMouseEnter={this.onHoverChangeImage}
          src={image.Url}
          className={
            this.props.indexImageActive === this.props.index
              ? "w-16 h-16 border-2 border-solid border-orangce cursor-pointer object-cover "
              : "w-16 h-16 border-2 border-solid border-white hover:border-orangce cursor-pointer object-cover "
          }
          alt=""
        />
      </div>
    );
  }
}

export default ItemColorProduct;
