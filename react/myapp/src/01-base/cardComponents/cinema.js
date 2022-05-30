import React, { Component } from "react";
import axios from "axios";
export default class Cinema extends Component {
  constructor() {
    super();
    this.state = {
      cinemaList: [],
      backup:[]
    };

    // axios.get("请求地址").then(res=>{}).catch(err=>{console.log(err)})

    // axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159").then(res=>{
    //     console.log(res)
    // }).catch(err=>{
    //     console.log(err)
    // })

    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',

        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      console.log(res.data);
      this.setState({
        cinemaList: res.data.data.cinemas,
        backup: res.data.data.cinemas,
      });
    });
  }
  render() {
    return (
      <div>
        <input onInput={this.handleInput}></input>
        {this.state.cinemaList.map((item) => (
          <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        ))}
      </div>
    );
  }
  handleInput = (event) => {
    console.log("input", event.target.value);
    let newList = this.state.backup.filter((item) =>
      item.name.toUpperCase().includes(event.target.value.toUpperCase())||item.address.toUpperCase().includes(event.target.value.toUpperCase())
      )
    // console.log(newList);
    this.setState({
        cinemaList:newList
    })
  };
}

import "./styles.css";

// task
// fetch API, JSON
// https://api.adviceslip.com/advice
// Fetch a advice on initial rendering
// Fetch a advice when pressing the button
// Display the advice

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

    </div>
  );
  axios({
    url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
    method: "get",
    headers: {
      "X-Client-Info":
        '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',

      "X-Host": "mall.film-ticket.cinema.list",
    },
  }).then((res) => {
    console.log(res.data);
    this.setState({
      cinemaList: res.data.data.cinemas,
      backup: res.data.data.cinemas,
    });
  });
}
}
