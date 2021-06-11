import React, { Component } from "react";

class OptionAndView extends Component {
  render() {
    return (
      <div
        className="w-full hidden bg-pink-500 bg-opacity-30 h-64 absolute top-0 
                  left-0 justify-center items-product"
      >
        <div className="w-full flex items-center">
          <div className="w-full text-center">
            <button
              type="button"
              className="w-4/5 p-3 mx-auto rounded-full border-2 border-solid
                              border-white font-bold text-black bg-white hover:bg-organce hover:text-white mb-2"
            >
              Tùy chọn
            </button>
            <button
              type="button"
              className="w-4/5 p-3 mx-auto rounded-full border-2 border-solid
                              border-white font-bold text-black bg-white hover:bg-organce hover:text-white"
            >
              Xem nhanh
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OptionAndView;
