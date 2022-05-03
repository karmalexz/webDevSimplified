import React, { Children, Component } from 'react'
class Child extends Component{
    render(){
        return <div>child</div>
    }
}
class Navbar extends Component{
    render(){
        return <div>navbar
            <Child></Child>
        </div>
    }
}


let Swiper=()=>{
    return <div>swiper</div>
}
class Tabbar extends Component{
    render(){
        return <div>tabbar</div>
    }
}
export default class App extends Component {
  render() {
    return (
      <div>
          <Navbar></Navbar>
          <Swiper></Swiper>
          <Tabbar></Tabbar>
      </div>
    )
  }
}
