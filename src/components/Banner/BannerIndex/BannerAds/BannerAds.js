import React, { Component } from "react";

class BannerAds extends Component {
  render() {
    return (
      <div className="xl:w-4/5 w-full  mx-auto p-4">
        <img
          src="./images/banner_2.jpg"
          className="w-full object-cover"
          alt=""
        />
      </div>
    );
  }
}

export default BannerAds;
