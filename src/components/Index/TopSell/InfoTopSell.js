import React, { Component } from "react";
import TitleMain from "../../General/TitleMain/TitleMain";
class InfoTopSell extends Component {
  render() {
    return (
      <div className="w-full md:w-1/2 px-4">
        <TitleMain Content={"TOP BÁN CHẠY"} />
        <p className="text-xl pt-5">Apple Watch Series 3</p>
        <p className="pt-5">
          |&nbsp;&nbsp;
          <span className="text-gray-500 text-xm">Thương Hiệu : </span>
          &nbsp;Apple&nbsp;&nbsp;|&nbsp;&nbsp;
          <span className="text-gray-500 text-xm">Bảo hành : </span>
          12 tháng
        </p>
        <p className="py-7 text-organce text-4xl">
          9.700.000 <u>đ</u>
        </p>
        <p className="py-1">Kích thước màn hình: 1.65"</p>
        <p className="py-1">Độ phân giải màn hình: 390 x 312pixels</p>
        <p className="py-1">Luôn hiển thị: Không</p>
        <p className="py-1">Mật độ điểm ảnh : 303pixels</p>
        <p className="py-1">Multi-touch: Có</p>
        <p className="py-1">Loại màn hình: AMOLED</p>
      </div>
    );
  }
}

export default InfoTopSell;
