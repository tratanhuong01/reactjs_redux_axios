import React, { Component } from "react";
import ItemColor from "./ItemColor/ItemColor";
import { connect } from "react-redux";
class Color extends Component {
  render() {
    var colorProduct = this.props.getProduct.colorProduct;
    colorProduct = colorProduct === null ? [] : colorProduct;
    var showColorProducts = colorProduct.map((item, index) => {
      return <ItemColor item={item} key={index} />;
    });
    return (
      <>
        <p className="text-xl my-3 font-semibold">Màu sắc</p>
        <ul className="w-full flex-wrap my-3 flex">{showColorProducts}</ul>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    getProduct: state.getProduct,
  };
};
export default connect(mapStateToProps)(Color);
