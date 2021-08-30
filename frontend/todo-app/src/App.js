import React, { Component } from 'react';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import ForthComponent from './components/learning-examples/ForthComponent';

class App extends Component {
  render() {
    return (
      <div className='App'>
        My Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <ForthComponent></ForthComponent>
      </div>
    );
  }
}

export default App;
