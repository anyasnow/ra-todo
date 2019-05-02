import React from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import ListTodo from './components/ListTodo';

class App extends React.Component {
  state = {
    todos: [
      {
        task: 'learn js', 
        isdone: true
      },
      {
        task: 'clean room',
        isdone: false},
      {
        task: 'cook steak',
        isdone: true
      },
    ]
  }

  render() {
    return (
      <div className="App">
        <ListTodo todos={this.state.todos}/>
      </div>
    );
  }
  
}

export default App;
