import React, { Component } from "react";

class BannerIndex extends Component {
  render() {
    return (
      <div className="w-full h-80 md:hidden">
        <img
          src="./images/banner_1.jpg"
          className="w-full h-68 object-cover"
          alt=""
        />
      </div>
    );
  }
}

export default BannerIndex;
