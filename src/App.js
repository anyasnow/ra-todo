import React from 'react';
import CreateTodo from './components/CreateTodo';
import ListTodo from './components/ListTodo';
import  './components/styles.css';
import cuid from '../node_modules/cuid'


class App extends React.Component {
  state = {
    todos: []
  }

  handleSubmit = (e, userInput) => {
    //grab user input
    //update state with input
    e.preventDefault();
    let newTaskList = this.state.todos;
    let newTask = {
      task: userInput,
      completed: false,
      important: false,
      id: cuid()
    }
    newTaskList.push(newTask)

    this.setState({
      todos: newTaskList
    });
    e.target.reset();
    
  }

  handleComplete = (id) => {
    //grab particular object from state
      let todos = this.state.todos;
      let filteredTodos = todos.map((object) => {
        if(object.id === id) {
          //toggle completed boolean
          object.completed = !object.completed;
        }
        return object;
      });
      
      this.setState({
        todos: filteredTodos
      });
      
  }

  handleImportant = id => {
   this.setState({
     todos: this.state.todos.map(element => {
       if(element.id === id) {
         element.important = !element.important
       }
       return element
     })
   })
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
                  handleDelete={this.handleDelete}
                  handleImportant={this.handleImportant}/>
                

      </>
    );
  }
  
}

export default App;
