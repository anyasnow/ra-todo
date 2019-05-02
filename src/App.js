import React from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import ListTodo from './components/ListTodo';

function App() {
  return (
    <div className="App">
      <CreateTodo />
      <ListTodo />
    </div>
  );
}

export default App;
