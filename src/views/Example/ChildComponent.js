import React, { Component } from 'react';

export default class ChildComponent extends Component {
  state = {};

  render() {
    return (
      <div>
        {this.state.show && this.props.status && (
          <>
            <div> This is first name from props: {this.props.fname}</div>
            <div>
              <button onClick={() => this.props.addNewJob()}>
                Hide the first name line
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

// import React from 'react';

// const Childcomponent = (props) => {
//   let { fname } = props;
//   return (
//     <div>
//       <div> This is first name from props: {fname}</div>
//     </div>
//   );
// };

// export default Childcomponent;
