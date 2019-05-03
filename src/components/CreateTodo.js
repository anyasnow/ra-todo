import React from 'react';

class CreateTodo extends React.Component {
state = {
    userInput: ''
};

handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        });
     };
        

render() {

    return (
        <form id="form" onSubmit={this.props.handleSubmit}>
            <label htmlFor="userInput">Enter Task</label>
            <input name="newTaskFromUserInput" type="text" value={this.state.userInput} onChange={this.handleChange}/>
            <input type="submit" value="Add Task" />
        </form>
    )

    
}
}

export default CreateTodo;