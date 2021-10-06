import React, { Component } from 'react';

export default class ChildComponent extends Component {
  state = {
    show: true,
  };
  handleOnClick = () => {
    this.setState({ show: !this.state.show });
    console.log('đã click');
  };
  render() {
    return (
      <div>
        {this.state.show && this.props.status && (
          <>
            <div> This is first name from props: {this.props.fname}</div>
            <div>
              <button onClick={() => this.handleOnClick()}>
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
