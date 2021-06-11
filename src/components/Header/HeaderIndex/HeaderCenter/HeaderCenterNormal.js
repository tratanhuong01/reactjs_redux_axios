import React, { Component } from "react";

class HeaderCenterNormal extends Component {
  render() {
    return (
      <div className="w-1/3 md:w-1/3 flex justify-center relative">
        <img
          src="/images/logo.png"
          className="w-4/5 md:w-4/5 xl:w-7/12 p-3 flex items-center"
          alt=""
        />
        <span
          className="absolute text-4xl top-1/2 transform -translate-y-1/2 left-48 
                    font-bold hidden xl:block"
        >
          XSMART
        </span>
      </div>
    );
  }
}

export default HeaderCenterNormal;
