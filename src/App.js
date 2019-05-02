import React from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import ListTodo from './components/ListTodo';

class App extends React.Component {
  state = {
    todos: [
      {
        task: 'learn js', 
        isdone: true,
        id: 1
      },
      {
        task: 'clean room',
        isdone: false,
        id: 2
      },
      {
        task: 'cook steak',
        isdone: true,
        id: 3
      },
    ]
  }

  handleCompleteButton() {

    this.setState(){
      isdone: true
    }
  }

  handleDeleteButton() {
    console.log('clickedDelete')
  }

  render() {
    return (
      <div className="App">
        <ListTodo todos={this.state.todos} handleComplete={this.handleCompleteButton}/>
      </div>
    );
  }
  
}

export default App;
