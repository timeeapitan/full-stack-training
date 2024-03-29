import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService';

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.retreiveWelcomeMessage = this.retreiveWelcomeMessage.bind(this);
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.handleError = this.handleError.bind(this);
    this.state = {
      welcomeMessage: '',
    };
  }
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className='container'>
          Welcome, {this.props.match.params.name}! You can manage your todos{' '}
          <Link to='/todos'>here</Link>
        </div>
        <div className='container'>
          Click here to get a customized welcome message.
          <button
            onClick={this.retreiveWelcomeMessage}
            className='btn btn-success'
          >
            Get Welcome Message
          </button>
        </div>
        <div className='container'>{this.state.welcomeMessage}</div>
      </>
    );
  }

  retreiveWelcomeMessage() {
    // HelloWorldService.executeHelloWorldService().then((response) =>
    //   this.handleSuccessfulResponse(response)
    // );

    // HelloWorldService.executeHelloWorldBeanService().then((response) =>
    //   this.handleSuccessfulResponse(response)
    // );

    HelloWorldService.executeHelloWorldPathVariableService(
      this.props.match.params.name,
      'red',
      'female'
    )
      .then((response) => this.handleSuccessfulResponse(response))
      .catch((error) => this.handleError(error));
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    this.setState({ welcomeMessage: response.data.message });
  }

  handleError(error) {
    this.setState({ welcomeMessage: error.response.data.message });
    console.log(error.response.data.message);
  }
}

export default WelcomeComponent;
