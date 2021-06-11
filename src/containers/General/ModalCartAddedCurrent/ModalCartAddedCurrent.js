import React, { Component } from "react";
import ModalCartAddedTop from "../../../components/General/ModalCartAddedCurent/ModalCartAddedTop";
import ModalCartAddedBottom from "../../../components/General/ModalCartAddedCurent/ModalCartAddedBottom";

class ModalCartAddedCurrent extends Component {
  render() {
    return (
      <div
        class="w-11/12 xl:w-1/2 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        rounded-lg z-50"
      >
        <div class="w-full relative bg-white rounded-lg">
          <ModalCartAddedTop />
          <ModalCartAddedBottom />
        </div>
      </div>
    );
  }
}

export default ModalCartAddedCurrent;
