import React, { Component } from "react";
import ProductViewLeft from "../../components/DetailProduct/ProductView/ProductViewLeft/ProductViewLeft";
import ProductViewRight from "../../components/DetailProduct/ProductView/ProductViewRight/ProductViewRight";

class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexImageActive: 0,
      imageMain:
        this.props.product.UrlImage.length > 0
          ? this.props.product.UrlImage[0].Url
          : "",
      productChoose: {
        IDProduct: "",
        Color: "",
        Size: "",
        NumberChoose: 1,
      },
    };
  }
  onHoverChangeImage = (data) => {
    this.setState({
      indexImageActive: data.indexImageActive,
      imageMain: data.imageMain,
    });
  };
  render() {
    var { product } = this.props;
    return (
      <div className="w-full flex flex-col xl:flex-row">
        <ProductViewLeft
          product={product}
          indexImageActive={this.state.indexImageActive}
          imageMain={this.state.imageMain}
          onHoverChangeImage={this.onHoverChangeImage}
        />
        <ProductViewRight
          product={product}
          indexImageActive={this.state.indexImageActive}
          imageMain={this.state.imageMain}
          onHoverChangeImage={this.onHoverChangeImage}
        />
      </div>
    );
  }
}

export default ProductView;
