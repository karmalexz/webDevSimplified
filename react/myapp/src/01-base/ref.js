import React, { Component } from "react";

export default class App extends Component {
  a = 100;
  myref=React.createRef()
  render() {
    return (
      <div>
        {/* <input ref="mytest" type="text" /> */}
        <input ref={this.myref}  />
        <button
          onClick={() => {
            // console.log("click1", this.refs.mytest.value);
            console.log("click1", this.myref.current.value);
          }}>
          add1
        </button>
      </div>
    );
  }
}
