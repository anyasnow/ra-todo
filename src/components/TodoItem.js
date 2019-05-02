import React from 'react';

function TodoItem(props) {

  let bgColor;


  if(props.isDone) {
    bgColor = "#ED7D3A"
  } else {
    bgColor = "#363537"
  }


  let css = {
    color: "teal",
    backgroundColor: bgColor,
    padding: "10px"
  }


  return (
    <li style={css}>
      <button onClick={() => props.handleComplete(props.id)}>Completed</button>
      <button onClick={() => props.handleDelete(props.id)}>Delete</button>
      <h1>{props.task}</h1>
    </li>
  )
}



export default TodoItem;