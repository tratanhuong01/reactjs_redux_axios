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
      [name]: value,
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
        <div className="w-full my-2">
          <input
            type="text"
            name=""
            className="w-full bg-white p-2 mb-2 rounded-xl text-center"
            value={new Intl.NumberFormat("ban", "id").format(from) + " đ"}
            onChange={() => ""}
            disabled
          />
          <input
            type="range"
            name="from"
            min="0"
            max="100000000"
            value={from}
            className="w-full mb-2"
            onChange={this.onChange}
          />
        </div>
        <div className="w-full my-2">
          <input
            type="text"
            name=""
            className="w-full bg-white p-2 mb-2 rounded-xl text-center"
            value={new Intl.NumberFormat("ban", "id").format(to) + " đ"}
            onChange={() => ""}
            disabled
          />
          <input
            type="range"
            name="to"
            min="0"
            max="100000000"
            value={to}
            className="w-full"
            onChange={this.onChange}
          />
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
