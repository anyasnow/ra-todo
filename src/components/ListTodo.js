import React from 'react';


function ListTodo(props) {
    return (
        <ul>
            {props.todos}
        </ul>
    )
}

export default ListTodo