import React, { Component } from "react";
import ItemProduct from "../../components/General/ItemProduct/ItemProduct";
import api from "../../Utils/api";
class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    api("products", "GET", {})
      .then((res) => {
        this.setState({
          products: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    var { products } = this.state;
    var showProducts = products.map((product, index) => {
      return <ItemProduct key={index} product={product} />;
    });
    return (
      <div className="w-full md:w-4/5 mx-auto xl:w-3/4">
        <p className="mb-6 text-2xl pl-2 font-semibold">Tất cả sản phẩm</p>
        <div className="w-full flex flex-wrap my-4 z-10">{showProducts}</div>
      </div>
    );
  }
}

export default ListProduct;
