import React from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import ListTodo from './components/ListTodo';

class App extends React.Component {
  state = {
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
    coolProp: 'a;lsdkfjha;slkj'
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
      <div className="App">
        <ListTodo todos={this.state.todos} 
                  handleComplete={this.handleComplete}
                  handleDelete={this.handleDelete}/>
      </div>
    );
  }
  
}

export default App;
