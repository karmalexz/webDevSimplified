import React, { Component } from "react";

export default class App extends Component {
  a = 100;
  render() {
    return (
      <div>
        <input type="text" />
        <button
          onClick={() => {
            console.log("click1", this);
          }}
        >
          add1
        </button>
        <button onClick={this.handleClick2.bind(this)}>add2</button>
        <button onClick={this.handleClick3}>add3</button>
        <button
          onClick={() => {
            this.handleClick4();
          }}
        >
          add4
        </button>
      </div>
    );
  }

  handleClick2() {
    console.log("click2", this.a);
  }
  handleClick3 = (e) => {
    console.log("click3",e);
  };
  handleClick4 = () => {
    console.log("click4");
  };
}
/**
 * call //change this dir, execute the code
 * apply //change this dir, execute the code
 * bind //change this dir, need to execute the code manually
 */
var obj1 = {
  name: "obj1",
  getName() {
    console.log(this.name);
  },
};
var obj2={
    name: "obj2",
    getName(){
        console.log(this.name);
    }
}
obj1.getName.bind(obj2)()
obj2.getName()