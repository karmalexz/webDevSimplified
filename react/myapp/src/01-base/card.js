// import React, { Component } from "react";
// import "./css/card.css";
// import Film from "./cardComponents/film";
// import Cinema from "./cardComponents/cinema";
// import Centre from "./cardComponents/centre";

// export default class App extends Component {
//   state = {
//     list: [
//       {
//         id: 1,
//         text: "Movie",
//       },
//       {
//         id: 2,
//         text: "Theater",
//       },
//       {
//         id: 3,
//         text: "Me",
//       },
//     ],
//     current: 0,
//   };
//   which() {
//     switch (this.state.current) {
//       case 0:
//         return <Film></Film>;
//         break;
//       case 1:
//         return <Cinema></Cinema>;
//         break;
//       case 2:
//         return <Centre></Centre>;
//         break;
//     }
//   }
//   render() {
//     return (
//       <div>
//         {/* {this.state.current === 0 && <Film></Film>}
//         {this.state.current === 1 && <Cinema></Cinema>}
//         {this.state.current === 2 && <Centre></Centre>} */}
//         {
//             this.which()
//         }
//         <ul>
//           {this.state.list.map((item, index) => (
//             <li
//               key={item.id}
//               className={this.state.current === index ? "active" : ""}
//               onMouseOver={() => {
//                 this.handleClick(index);
//               }}
//             >
//               {item.text}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
//   handleClick(index) {
//     console.log(index);
//     this.setState({
//       current: index,
//     });
//   }
// }
import React, { Component } from 'react'

export default class card extends Component {
  render() {
    return (
      <div>card</div>
    )
  }
}

import "./styles.css";
// task
// fetch API, JSON
// https://api.adviceslip.com/advice
// Fetch a advice on initial rendering
// Fetch a advice when pressing the button
// Display the advice

export default function App() {
    render
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

