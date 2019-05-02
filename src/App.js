import React from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import ListTodo from './components/ListTodo';


class App extends React.Component {
  state = {
    idCount: 4,
    todos: [
      {
        task: 'learn js', 
        isDone: false,
        id: 1
      },
      {
        task: 'clean room',
        isDone: false,
        id: 2
      },
      {
        task: 'cook steak',
        isDone: false,
        id: 3
      },
    ],
    
  }

  handleSubmit = (e, userInput) => {
    //grab user input
    //update state with input
    e.preventDefault();
    let newTodos = this.state.todos;
    let newTodo = {
      task: userInput,
      isDone: false,
      id: this.state.idCount
    }
    newTodos.push(newTodo)

    this.setState({
      todos: newTodos,
      idCount: this.state.idCount+1
    });
    e.target.reset();
    
  }

  handleComplete = (id) => {
    //grab particular object from state
      let todos = this.state.todos;
      let filteredTodos = todos.map((object) => {
        if(object.id === id) {
          //update isDone to true
          object.isDone = !object.isDone;
        }
        return object;
      });
      
      this.setState({
        todos: filteredTodos
      });
      
  }

  handleDelete = (id) => {
    //identify particular object
    let todos = this.state.todos;
    let filteredTodos = todos.filter((object) => {
      if(object.id === id) {
        return false
      }
      return true
    });

    this.setState({
      todos: filteredTodos
    });


    //return all items except select element

  }

  render() {
    return (
      <>
        <CreateTodo handleSubmit={this.handleSubmit}/>
        <ListTodo todos={this.state.todos} 
                  handleComplete={this.handleComplete}
                  handleDelete={this.handleDelete}/>
                

      </>
    );
  }
  
}

export default App;
