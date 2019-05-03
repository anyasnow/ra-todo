import React from 'react';

class CreateTodo extends React.Component {
state = {
    userInput: ""
}

handleChange = (e) => {
    //update state
    if (this.state.userInput === "h"){
        this.setState({
            userInput: "what"
        })
    }
    this.setState({
        userInput: e.target.value
    }) 
}

render() {
    return (
        <form onSubmit={(e) => this.props.handleSubmit(e, this.state.userInput)}>
            <label htmlFor="userInput">Enter Task</label>
            <input type="text" id="userInput" onChange={this.handleChange}/>
            <button>Add Task</button>
        </form>
    )
}
}

export default CreateTodo;