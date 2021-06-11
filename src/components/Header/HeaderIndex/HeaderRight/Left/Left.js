import React, { Component } from "react";

class Left extends Component {
  render() {
    return (
      <li className="p-2 hidden md:flex">
        <div className="flex items-center">
          <img
            src="/images/avatar.jpg"
            className="w-8 h-8 rounded-full mr-3"
            alt=""
          />
          <span className="font-semibold text-xm mr-1">Trà Hưởng</span>
          <i className="bx bxs-chevron-down"></i>
        </div>
      </li>
    );
  }
}

export default Left;
