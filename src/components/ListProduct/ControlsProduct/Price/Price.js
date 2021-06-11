import React, { Component } from "react";

class Price extends Component {
  render() {
    return (
      <>
        <p className="text-xl my-3 font-semibold">Lọc giá</p>
        <div className="w-full my-2">
          <input
            type="range"
            name=""
            min="0"
            max="100000000"
            className="w-full"
            id=""
          />
          <ul className="w-full my-2 flex">
            <li className="w-1/2 flex justify-start">
              <span id="price">0</span> <u>đ</u>
            </li>
            <li className="w-1/2 flex justify-end">
              100.000.000 <u>đ</u>
            </li>
          </ul>
          <button
            type="button"
            className="px-5 py-2 my-2 bg-organce text-white font-semibold 
                rounded-full"
          >
            Lọc giá
          </button>
        </div>
      </>
    );
  }
}

export default Price;
