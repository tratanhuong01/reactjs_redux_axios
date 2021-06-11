import React, { Component } from "react";
import ImageTopSell from "../../components/Index/TopSell/ImageTopSell";
import InfoTopSell from "../../components/Index/TopSell/InfoTopSell";
class TopSell extends Component {
  render() {
    return (
      <div className="xl:w-3/4 md:w-11/12 w-full mx-auto md:flex flex-col md:flex-row">
        <ImageTopSell />
        <InfoTopSell />
      </div>
    );
  }
}

export default TopSell;
