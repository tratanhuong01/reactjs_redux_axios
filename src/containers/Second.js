import React, { Component } from "react";
import Category from "../components/General/Category/Category";
class Second extends Component {
  render() {
    return (
      <div
        className="w-full h-screen bg-opacity-50 bg-black top-0 left-0 fixed hidden"
        id="second"
      >
        <Category />
      </div>
    );
  }
}

export default Second;
