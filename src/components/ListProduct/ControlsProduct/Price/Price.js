import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: 0,
      to: 100000000,
    };
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value.replaceAll(",", ""),
    });
  };
  filterProductPrice = () => {
    this.props.filterProductPrice(this.props.product, {
      from: this.state.from,
      to: this.state.to,
    });
  };
  render() {
    var { from, to } = this.state;
    return (
      <>
        <p className="text-xl my-3 font-semibold">Lọc giá</p>
        <div className="w-full my-2 flex">
          <div className="flex items-center">
            <input
              type="text"
              name="from"
              className="w-1/2 text-sm bg-white p-2 mb-2 text-center"
              value={new Intl.NumberFormat("ban", "id").format(from) + " VNĐ"}
              placeholder="Từ"
              onChange={this.onChange}
            />
            <i className="bx bxs-right-arrow-alt text-gray-700 text-xl"></i>
            <input
              type="text"
              name="to"
              className="w-1/2 bg-white text-sm p-2 mb-2 rounded-xl text-center"
              value={new Intl.NumberFormat("ban", "id").format(to) + " VNĐ"}
              placeholder="Đến"
              onChange={this.onChange}
            />
          </div>
        </div>
        <button
          onClick={this.filterProductPrice}
          type="button"
          className="px-5 py-2 my-2 bg-organce text-white font-semibold 
                rounded-full"
        >
          Lọc giá
        </button>
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
    filterProductPrice: (products, price) => {
      dispatch(actions.filterProductPrice(products, price));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Price);
