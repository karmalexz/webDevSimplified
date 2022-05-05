import React, { Component } from "react";
import "./css/card.css";
import Film from "./cardComponents/film";
import Cinema from "./cardComponents/cinema";
import Centre from "./cardComponents/centre";

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "Movie",
      },
      {
        id: 2,
        text: "Theater",
      },
      {
        id: 3,
        text: "Me",
      },
    ],
    current: 0,
  };
  which() {
    switch (this.state.current) {
      case 0:
        return <Film></Film>;
        break;
      case 1:
        return <Cinema></Cinema>;
        break;
      case 2:
        return <Centre></Centre>;
        break;
    }
  }
  render() {
    return (
      <div>
        {/* {this.state.current === 0 && <Film></Film>}
        {this.state.current === 1 && <Cinema></Cinema>}
        {this.state.current === 2 && <Centre></Centre>} */}
        {
            this.which()
        }
        <ul>
          {this.state.list.map((item, index) => (
            <li
              key={item.id}
              className={this.state.current === index ? "active" : ""}
              onMouseOver={() => {
                this.handleClick(index);
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  handleClick(index) {
    console.log(index);
    this.setState({
      current: index,
    });
  }
}
