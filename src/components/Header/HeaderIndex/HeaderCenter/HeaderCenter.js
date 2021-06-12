import React, { Component } from "react";

class HeaderCenter extends Component {
  render() {
    return (
      <div className="w-1/2 md:w-1/3 flex justify-center">
        <img
          src="/images/logo.png"
          className="w-4/5 md:w-3/5 p-3 flex items-center cursor-pointer"
          alt=""
        />
      </div>
    );
  }
}

export default HeaderCenter;
