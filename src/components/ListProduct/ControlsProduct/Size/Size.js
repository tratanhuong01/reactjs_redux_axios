import React, { Component } from "react";
import ItemSize from "./ItemSize/ItemSize";
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
class Size extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: this.props.filterProduct.size,
    };
  }
  filterProductSize = (products, size) => {
    this.setState({
      size: size,
    });
    this.props.filterProductSize(products, size);
  };
  render() {
    var { getProduct, filterProduct } = this.props;
    var sizeProduct =
      getProduct.sizeProduct === null ? [] : getProduct.sizeProduct;
    var showSizeProducts = sizeProduct.map((item, index) => {
      return (
        <ItemSize
          item={item}
          key={index}
          products={filterProduct.products}
          filterProductSize={this.filterProductSize}
        />
      );
    });
    return (
      <>
        <p className="text-xl my-3 font-semibold">Kích thước</p>
        <ul className="w-full my-3 flex-wrap flex">{showSizeProducts}</ul>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    getProduct: state.getProduct,
    filterProduct: state.filterProduct,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    filterProductSize: (products, size) => {
      dispatch(actions.filterProductSize(products, size));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Size);
