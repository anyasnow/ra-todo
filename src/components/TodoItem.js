import React from 'react';
import './styles.css'

function TodoItem(props) {

  let completeness = props.completed ? "completed" : "";
  let importance = props.important ? "important" : "";

  return (
  <>
    <li>
      <i className="far fa-check-square" onClick={() => props.handleComplete(props.id)} />
      <p className={completeness + ' ' + importance}>{props.task}</p>
      <i className="fas fa-star" onClick={() => props.handleImportant(props.id)} />
      <i className="far fa-trash-alt" onClick={() => props.handleDelete(props.id)} />
    </li>
    <br /> 
  </>
  )
}



export default TodoItem;