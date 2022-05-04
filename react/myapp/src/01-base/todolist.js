import React, { Component } from "react";

export default class App extends Component {
  a = 100;
  state = {
    list: ["Have breakfast", "See GP", "Buy fruits"],
  };
  myref = React.createRef();
  render() {
    return (
      <div>
        {/* <input ref="mytest" type="text" /> */}
        <input ref={this.myref} />
        <button
          onClick={() => {
            // console.log("click1", this.refs.mytest.value);
           this.handleClick()
          }}
        >
          ADD
        </button>
        <ul>
          {this.state.list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  handleClick =()=>{
      this.state.list.push(this.myref.current.value)
    this.setState({
        list:this.state.list
    })  
  }
}
