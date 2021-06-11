import React, { Component, Fragment } from "react";
import Sale from "./Sale/Sale";
import ImageMain from "./Image/ImageMain/ImageMain";
import OptionAndView from "./OptionAndView/OptionAndView";
import ArrowUp from "./TypeProduct/ArrowDown/ArrowDown";
import ArrowDown from "./TypeProduct/ArrowDown/ArrowDown";
import ItemTypeProduct from "./TypeProduct/ItemTypeProduct/ItemTypeProduct";
class ItemProductIndex extends Component {
  render() {
    return (
      <Fragment>
        <div className="w-1/2 p-2 relative">
          <Sale />
          <div className="w-full relative h-64 mx-auto product ">
            <ImageMain />
            <OptionAndView />
          </div>
          <div className="w-full mx-auto p-1 flex">
            <ArrowUp />
            <ul className="w-11/12 flex ">
              <ItemTypeProduct />
              <ItemTypeProduct />
              <ItemTypeProduct />
            </ul>
            <ArrowDown />
          </div>
          <p
            className="p-2 hover:text-organce text-center cursor-pointer 
                    text-xm"
          >
            Apple watch series 4
          </p>
          <p
            className="p-2 pt-0 text-organce text-center cursor-pointer 
                    text-xm"
          >
            7.700.000 <u>đ</u>&nbsp;
            <strike className="text-gray-500">
              7.900.000 <u>đ</u>
            </strike>
          </p>
        </div>
      </Fragment>
    );
  }
}

export default ItemProductIndex;
