import React, { Component } from "react";

class Right extends Component {
  render() {
    return (
      <div className="w-1/2 flex justify-end">
        <div className="flex items-center">
          <button
            type="button"
            className="px-10 py-3.5 rounded-full shadow-lg bg-organce 
            font-semibold text-sm font-semibold flex items-center text-white border-2 
            border-solid border-2 border-gray-100 ml-10 * hover:border-orangce flex 
            items-center"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

export default Right;
