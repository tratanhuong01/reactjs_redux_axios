import React, { Component } from "react";
import ItemBrand from "./ItemBrand/ItemBrand";
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
class Brand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Tất cả",
    };
  }
  filterProductBrand = (products, brand) => {
    this.setState({
      brand: brand,
    });
    this.props.filterProductBrand(products, brand);
  };
  render() {
    var { brand } = this.state;
    var brandProduct = this.props.getProduct.brandProduct;
    brandProduct = brandProduct === null ? [] : brandProduct;
    var showItemBrands = brandProduct.map((item, index) => {
      return (
        <ItemBrand
          item={item}
          key={index}
          filterProductBrand={this.filterProductBrand}
          brand={brand}
          product={this.props.product}
        />
      );
    });
    return (
      <>
        <p className="text-xl my-3 font-semibold">Thương hiệu</p>
        <ul className="my-3 w-full max-h-72 overflow-y-auto">
          {showItemBrands}
        </ul>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    getProduct: state.getProduct,
    product: state.product,
    filterProduct: state.filterProduct,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    filterProductBrand: (products, brand) => {
      dispatch(actions.filterProductBrand(products, brand));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Brand);
