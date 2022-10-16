import React, { Component } from "react";

export default class CustomModalForm extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "15% auto",
          backgroundColor:"white",
          width: "50%",
          height: "40%",
          padding: 10,
        }}
      >
        <div style={{width: '100%'}}>
          <h3 style={{textAlign: 'center'}}>Enter your details</h3>
          <div>
            <div style={{}}>
              <input type="text" style={{width: "50%"}} placeholder="Enter your full name"/>
            </div>
            <div style={{}}>
              <input type="text" style={{width: "50%"}} placeholder="Enter your full name"/>
            </div>
            <div style={{}}>
              <input type="text" style={{width: "50%"}} placeholder="Enter your full name"/>
            </div>
            <div style={{}}>
              <input type="text" style={{width: "50%"}} placeholder="Enter your full name"/>
            </div>
   
          </div>
        </div>
      </div>
    );
  }
}
