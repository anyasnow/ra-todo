import React from 'react';
import TodoItem from './TodoItem';

function ListTodo(props) {

    

    let todoArray = props.todos.map((object) => {
      return <TodoItem task={object.task} 
                       completed={object.completed}
                       important={object.important} 
                       handleComplete={props.handleComplete} 
                       handleDelete={props.handleDelete}
                       handleImportant={props.handleImportant}
                       id={object.id}
                       key={object.id}/>
    });

    return (
        <>
          <h2>My Todo List:</h2>
          <ul>
            {todoArray}
          </ul>
        </>
    )
}

export default ListTodo