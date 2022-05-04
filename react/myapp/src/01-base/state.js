import React, { Component } from "react";

export default class App extends Component {
//   state = {
//     show: true,
//   };
constructor(){
    super()
    this.state={
        show:true
    }
}
  render() {
    return (
      <div>
        <h1>Welcome to Reach Website</h1>
        <button
          onClick={() => {
            this.setState({
                show:!this.state.show
            })
          }}
        >{this.state.show?'❤️':'🖤'}</button>
      </div>
    );
  }
}
