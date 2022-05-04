import React, { Component } from "react";

export default class App extends Component {
  a = 100;
  state = {
    list: [
      { id: 1, mytext: "Have breakfast" },
      { id: 2, mytext: "See GP" },
      { id: 3, mytext: "Buy fruits" },
    ],
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
            this.handleClick();
          }}
        >
          ADD
        </button>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={item.id}>
              {item.mytext}
              <button
                onClick={() => {
                  this.handleDelClick(index);
                }}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  handleClick = () => {
    //   this.state.list.push(this.myref.current.value)
    let newList = [...this.state.list];
    newList.push({
        id:Math.random()*100000,
        mytext:this.myref.current.value});
    this.setState({
      list: newList,
    });
  };
  handleDelClick = (index) => {
    console.log("delete", index);
    let newList=[...this.state.list];
    newList.splice(index,1)
    this.setState({
        list:newList,
    })
  };
}
