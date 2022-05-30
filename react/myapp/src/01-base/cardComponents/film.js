import { Component } from "react";
import "./styles.css";

// task
// fetch API, JSON
// https://api.adviceslip.com/advice
// Fetch a advice on initial rendering
// Fetch a advice when pressing the button
// Display the advice

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      DataisLoaded: true,
    };
  }
  conponentDidMount(){
    fetch("https://api.adviceslip.com/advice")
    .then((res)=>res.json())
    .then((json)=>{
      this.setState({
        items:json,
      })
    })
    }
  render(){
    const{DetaisLoaded,items}=this.state;
    if (!DataisLoaded) return <div>
      Wait for the data
    </div>
    return (
      <div className = "App">
          <h1> Fetch data from an api in react </h1>  {
              items.map((item) => ( 
              <ol key = { item.id } >
                Advice:{item.advice}
                  </ol>
              ))
    }
    </div>
    
    )}
  }
