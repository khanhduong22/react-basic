// import React, { Component } from 'react';
// import Color from "../HOC/Color"

// export default class Color(Home) extends Component {
//   render() {
//     return (
//       <div>
//         <h1>This is homepage</h1>
//       </div>
//     );
//   }
// }
import React, { Component } from 'react';
import Color from '../HOC/Color';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>This is homepage with color random when reload</h1>
      </div>
    );
  }
}

export default Color(Home);
