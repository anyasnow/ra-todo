import React from 'react';

function TodoItem(props) {

  let css = {
    color: "teal",
    backgroundColor: "#212121",
    padding: "10px"
  }


  return (
    <li style={css}>
      <button>Completed</button>
      <button>Delete</button>
      <h1>{props.task}</h1>
    </li>
  )
}

export default TodoItem;