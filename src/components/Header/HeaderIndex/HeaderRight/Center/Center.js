import React, { Component } from "react";
import ModalCartAdded from "../../../../General/ModalCartAdded/ModalCartAdded";
import { connect } from "react-redux";
class Center extends Component {
  render() {
    var { carts } = this.props;
    return (
      <li
        id="toggel__hover__cart_show"
        className="p-2 flex relative cursor-pointer"
      >
        <a href="/cart">
          <i className="bx bxs-shopping-bag text-3xl"></i>
        </a>
        <span
          className="w-5 h-5 rounded-full border-2 border-solid 
            border-white flex justify-center items-center py-0.5 font-bold 
            absolute right-0.5 bg-white text-yellow-500 top-0.5 text-sm"
        >
          {carts.length}
        </span>
        <ModalCartAdded carts={carts} />
      </li>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    carts: state.carts,
  };
};
export default connect(mapStateToProps)(Center);
