import React, { Component } from "react";
import "./css/02-index.css";

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
              {/* <span
                dangerouslySetInnerHTML={{
                  __html: item.mytext,
                }}
              ></span> */}
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
        {/* {this.state.list.length === 0 ? <div>Nothing to do</div> : null} */}
        {/* {this.state.list.length === 0 && <div>Nothing to do</div>} */}
        <div className={this.state.list.length === 0 ? "" : "hidden"}>
          Nothing to do
        </div>
      </div>
    );
  }
  handleClick = () => {
    //   this.state.list.push(this.myref.current.value)
    let newList = [...this.state.list];
    newList.push({
      id: Math.random() * 100000,
      mytext: this.myref.current.value,
    });
    this.setState({
      list: newList,
    });
    this.myref.current.value = "";
  };
  handleDelClick = (index) => {
    console.log("delete", index);
    let newList = [...this.state.list];
    newList.splice(index, 1);
    this.setState({
      list: newList,
    });
  };
}
