import React, { Component } from "react";
import Search from "../../../components/General/ModalSearch/Search";

class ModalSearch extends Component {
  render() {
    return (
      <div
        className="w-72 rounded-lg absolute animate__animated animate__zoomIn 
        top-16 my-1 right-1/4 text-gray-700 z-50 modal__cart__added"
      >
        <Search />
      </div>
    );
  }
}

export default ModalSearch;
