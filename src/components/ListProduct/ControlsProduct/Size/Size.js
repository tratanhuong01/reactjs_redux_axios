import React, { Component } from "react";
import ItemSize from "./ItemSize/ItemSize";
import { connect } from "react-redux";
class Size extends Component {
  render() {
    var sizeProduct = this.props.getProduct.sizeProduct;
    sizeProduct = sizeProduct === null ? [] : sizeProduct;
    var showSizeProducts = sizeProduct.map((item, index) => {
      return <ItemSize item={item} key={index} />;
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
  };
};
export default connect(mapStateToProps)(Size);
