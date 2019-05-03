import React from 'react';
import styles from './styles.css'

function TodoItem(props) {

  let completeness = props.completed ? "completed" : "";
  let importance = props.important ? "important" : "";

  return (
    <li>
      <p className={completeness + ' ' + importance}>{props.task}</p>
      <button onClick={() => props.handleImportant(props.id)}>Important</button>
      <button onClick={() => props.handleComplete(props.id)}>Completed</button>
      <button onClick={() => props.handleDelete(props.id)}>Delete</button>
    </li>
  )
}



export default TodoItem;