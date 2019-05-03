import React from 'react';
import CreateTodo from './components/CreateTodo';
import ListTodo from './components/ListTodo';
import  './components/styles.css';
import cuid from '../node_modules/cuid'

//why does this need to be outside the class?
function createTask(task) {
  return ({
    task: task,
    completed: false,
    important: false,
    id: cuid()
  });
}

class App extends React.Component {
  state = {
    todos: []
  };



  handleSubmit = (e) => {
    //grab user input
    //update state with input
    
    e.preventDefault();

    const newTask = e.target.newTaskFromUserInput.value; //why access w "name" and not "value" ?
    
    this.setState({
      todos: [...this.state.todos, createTask(newTask)]
    });

    e.target.reset();  
  };     
    
    


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
    //return all items except select element
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

   

  }

  render() {
    return (
      <>
        
        <ListTodo todos={this.state.todos} 
                  handleComplete={this.handleComplete}
                  handleDelete={this.handleDelete}
                  handleImportant={this.handleImportant}/>
        <CreateTodo handleSubmit={this.handleSubmit} />
               
      </>
    );
  }
  
}

export default App;
