import React, { Component } from "react";
import BannerSmartWatch from "../../components/Banner/BannerIndex/BannerSmartWatch/BannerSmartWatch";
import TitleMain from "../../components/General/TitleMain/TitleMain";
import ItemProductIndex from "../../components/General/ItemProduct/ItemProductIndex";
import { connect } from "react-redux";
class SmartWatch extends Component {
  render() {
    var products = this.props.product;
    products = products.slice(0, 4);
    var showLeft = products.slice(0, 2).map((item, index) => {
      return <ItemProductIndex product={item} key={index} />;
    });
    var showRight = products.slice(2, 4).map((item, index) => {
      return <ItemProductIndex product={item} key={index} />;
    });
    return (
      <div className="w-full md:w-11/12 xl:w-4/5 mx-auto p-4">
        <TitleMain Content={"SMART WATCH"} />
        <div className="w-full">
          <div className="w-full flex p-2">
            <BannerSmartWatch />
            <div className="w-full xl:w-1/2 flex p-2 pt-0">{showLeft}</div>
          </div>
          <div className="w-full flex p-2">
            <div className="w-full xl:w-1/2 flex p-2 pt-0">{showRight}</div>
            <BannerSmartWatch />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};
export default connect(mapStateToProps)(SmartWatch);
