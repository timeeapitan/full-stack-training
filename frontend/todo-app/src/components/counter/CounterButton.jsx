import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterButton extends Component {
  // Define the initial state in a constructor
  // state => counter 0

  constructor() {
    super(); // Error 1
    // this.state = {
    //   counter: 0,
    // };

    // this.increment = this.increment.bind(this); // Error 2
    // this.decrement = this.decrement.bind(this);
  }

  render() {
    // const style = { fontSize: '50px', padding: '15px 30px' };
    return (
      <div className='counter'>
        <button onClick={() => this.props.incrementMethod(this.props.by)}>
          +{this.props.by}
        </button>
        {/*<span className='count'>{this.state.counter}</span>*/}
        <button onClick={() => this.props.decrementMethod(this.props.by)}>
          -{this.props.by}
        </button>
      </div>
    );
  }

  //   increment() {
  //     // Update state - counter++
  //     // console.log('increment');
  //     //this.state.counter++; // Bad Practice!!!
  //     this.setState((prevState) => {
  //       return { counter: prevState.counter + this.props.by };
  //     });

  //     this.props.incrementMethod(this.props.by);
  //   }

  //   decrement() {
  //     this.setState((prevState) => {
  //       return { counter: prevState.counter - this.props.by };
  //     });

  //     this.props.decrementMethod(this.props.by);
  //   }
}

CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: PropTypes.number,
};

export default CounterButton;
