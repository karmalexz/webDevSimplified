import React, { Component } from "react";
import './css/01-index.css'
export default class App extends Component {
  render() {
    const myname = "alex";
    const style = {
      background: "yellow",
      fontSize: "50px",
      color: "purple"
    };
    return (
      <div style={style}>
        <div style={{ background: "red" }}>Hello world</div>
        {10 - 20}={myname}
        <div className="active">Hello world 2</div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
    );
  }
}
