import React from 'react';
import './styles.css'

function TodoItem(props) {

  let completeness = props.completed ? "completed" : "";
  let importance = props.important ? "important" : "";
  let checkboxIcon = props.completed ? "fas fa-calendar-check" : "far fa-calendar-check";
  let starIcon = props.important ? "fas fa-star": "far fa-star";

  return (
  <>
    <li>
        <i className={`${checkboxIcon}  ${completeness}`} onClick={() => props.handleComplete(props.id)} />
      <p className={`${completeness} ${importance}`}>{props.task}</p>
      <i className="far fa-trash-alt" onClick={() => props.handleDelete(props.id)} />
      <i className={`${starIcon}  ${importance}`} onClick={() => props.handleImportant(props.id)} />
      
    </li>
    <br /> 
  </>
  )
}



export default TodoItem;