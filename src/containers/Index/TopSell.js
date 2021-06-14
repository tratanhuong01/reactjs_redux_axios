import React, { Component } from "react";
import ImageTopSell from "../../components/Index/TopSell/ImageTopSell";
import InfoTopSell from "../../components/Index/TopSell/InfoTopSell";
import { connect } from "react-redux";
import ImageChildTopSell from "../../components/Index/TopSell/ImageChildTopSell";
class TopSell extends Component {
  render() {
    var { productTopSell } = this.props.getProduct;
    return (
      <>
        <div className="xl:w-3/4 md:w-11/12 w-full mx-auto md:flex flex-col md:flex-row">
          {productTopSell === null ? (
            ""
          ) : (
            <>
              <ImageTopSell product={productTopSell} />
              <InfoTopSell product={productTopSell} />
            </>
          )}
        </div>
        <ImageChildTopSell product={productTopSell} />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    getProduct: state.getProduct,
  };
};
export default connect(mapStateToProps, null)(TopSell);
