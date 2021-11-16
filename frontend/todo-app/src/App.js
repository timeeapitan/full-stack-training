import React, { Component } from 'react';
import './App.css';
// import FirstComponent from './components/learning-examples/FirstComponent';
// import SecondComponent from './components/learning-examples/SecondComponent';
// import ThirdComponent from './components/learning-examples/ThirdComponent';
// import ForthComponent from './components/learning-examples/ForthComponent';
// // import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp.jsx';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/*<Counter />*/}
        <TodoApp />
      </div>
    );
  }
}

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className='LearningComponents'>
//         My Hello World
//         <FirstComponent></FirstComponent>
//         <SecondComponent></SecondComponent>
//         <ThirdComponent></ThirdComponent>
//         <ForthComponent></ForthComponent>
//       </div>
//     );
//   }
// }

export default App;
