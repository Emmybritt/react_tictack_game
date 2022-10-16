import React, { Component } from "react";

export default class AboutMeHeader extends Component {
  constructor(props) {
    super(props);
  }
  
  getFirstName() {
    let newName = this.props.myName.split(" ");
    return newName[0];
  }
  render() {
    return <h3 style={{ textAlign: "center" }}>About {this.getFirstName()}</h3>;
  }
}
