// import React, { Component } from 'react';

// export default class ChildComponent extends Component {
//   render() {
//     return (
//       <div>
//         <div> This is first name from props: {this.props.fname}</div>
//       </div>
//     );
//   }
// }

import React from 'react';

const Childcomponent = (props) => {
  let { fname } = props;
  return (
    <div>
      <div> This is first name from props: {fname}</div>
    </div>
  );
};

export default Childcomponent;
