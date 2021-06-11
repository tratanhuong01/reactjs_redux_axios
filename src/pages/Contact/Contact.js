import React, { Component } from "react";
import Second from "../../containers/Second";
import MainContact from "../../containers/Contact/MainContact";
class Contact extends Component {
  render() {
    return (
      <>
        <MainContact />
        <Second />
      </>
    );
  }
}

export default Contact;
