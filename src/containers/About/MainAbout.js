import React, { Component } from "react";
import HeaderNormal from "../../components/Header/HeaderNormal/HeaderNormal";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import Rule from "../../containers/General/Rule";
import ReciveInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
class MainAbout extends Component {
  render() {
    return (
      <div className="w-full">
        <div className="w-full relative text-white md:text-black">
          <HeaderNormal />
        </div>
        <div className="w-full bg-gray-100">
          <p className="text-3xl font-bold text-center py-12">Giới thiệu</p>
          <LevelUrl />
          <hr className="my-2"></hr>
          <div className="w-full xl:w-4/5 mx-auto p-4">
            <div className="w-full mx-auto mt-5 mb-2"></div>
          </div>
          <Rule />
          <ReciveInfo />
          <EndFooter />
        </div>
      </div>
    );
  }
}

export default MainAbout;
