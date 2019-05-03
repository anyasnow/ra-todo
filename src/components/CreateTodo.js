import React from 'react';



class CreateTodo extends React.Component {
state = {
    userInput: ''
}

clearInput = () => {
        this.setState({
            userInput: ''
        });
}

handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        });
    }

 
        

render() {

    
    return (
        <form id="form" onSubmit={this.props.handleSubmit} >
            <label htmlFor="userInput"></label>
            <input name="newTaskFromUserInput" type="text" onChange={this.handleChange} required/>
            <input type="submit" value="Add Task" />
        </form>
    )
}
}

export default CreateTodo;