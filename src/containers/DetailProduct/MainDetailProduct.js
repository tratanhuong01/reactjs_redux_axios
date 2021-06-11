import React, { Component } from "react";
import ViewProductWhenScroll from "../DetailProduct/ViewProductWhenScroll";
import HeaderNormal from "../../components/Header/HeaderNormal/HeaderNormal";
import Rule from "../General/Rule";
import ReciviceInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import ProductView from "./ProductView";
import OtherProduct from "../../components/DetailProduct/OtherProduct/OtherProduct";
import DescribeProduct from "../../components/DetailProduct/ProductView/DescribeProduct/DescribeProduct";
import NotFound from "../../pages/NotFound/NotFound";
import api from "../../Utils/api";
class MainDetailProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      viewScroll: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onViewScroll);
    api("products", "GET", {})
      .then((res) => {
        var index = res.data.findIndex(
          (item) => item.Path === this.props.match.params.slug
        );
        this.setState({
          product: res.data[index],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onViewScroll = () => {
    var y = window.scrollY;
    if (y >= 610) {
      this.setState({
        viewScroll: true,
      });
    } else {
      this.setState({
        viewScroll: false,
      });
    }
  };
  render() {
    var { product, viewScroll } = this.state;
    return (
      <div className="w-full">
        {product === null ? (
          <NotFound />
        ) : (
          <>
            {viewScroll === true ? (
              <ViewProductWhenScroll product={product} />
            ) : (
              ""
            )}
            <div className="w-full relative text-white md:text-black">
              <HeaderNormal />
            </div>
            <div className="w-full bg-gray-100">
              <LevelUrl />
              <hr className="my-2"></hr>
              <div className="w-full xl:w-4/5 mx-auto p-4">
                <ProductView product={product} />
                <DescribeProduct />
                <OtherProduct />
              </div>
              <Rule />
              <ReciviceInfo />
              <EndFooter />
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.product,
  };
};
const mapDispatchToProps = (dispatch) => {};
export default connect(mapStateToProps, mapDispatchToProps)(MainDetailProduct);
