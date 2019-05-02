import React from 'react';
import TodoItem from './TodoItem';

function ListTodo(props) {

    let css = {
      listStyle: "none",
      paddingLeft: "0"
    }

    let todoArray = props.todos.map((object) => {
      return <TodoItem task={object.task} 
                       isDone={object.isDone} 
                       handleComplete={props.handleComplete} 
                       handleDelete={props.handleDelete}
                       id={object.id}/>
    });

    return (
        <>
          <h1>My List:</h1>
          <ul style={css}>
            {todoArray}
          </ul>
        </>
    )
}

export default ListTodo