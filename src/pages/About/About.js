import React, { Component } from "react";
import MainAbout from "../../containers/About/MainAbout";
import Second from "../../containers/Second";
class About extends Component {
  render() {
    return (
      <>
        <MainAbout />
        <Second />
      </>
    );
  }
}

export default About;
